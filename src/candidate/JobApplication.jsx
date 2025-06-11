import { useState, useEffect } from 'react';
import TopHeader from '../assets/component/home-component/TopHeader';
import useApplication from '../assets/context-api/application/UseApplication';
import useJob from '../assets/context-api/job/useJob';
import useUser from '../assets/context-api/user/useUser';
import { useParams } from 'react-router-dom';
import DashboardHeader from '../assets/component/general-component/DashboardHeader';

function JobApplication() {
  const { applyToJob, loading, error } = useApplication();
  const { id: jobId } = useParams();
  const { job, fetchJob } = useJob();
  const { user } = useUser();
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState(user?.resume || '');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (jobId) fetchJob(jobId);
    if (user?.resume) setResume(user.resume);
    // eslint-disable-next-line
  }, [jobId, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    const result = await applyToJob({ jobId, coverLetter, resume });
    console.log('jobId:', jobId);
    if (result) {
      setSuccess('Application submitted successfully!');
      setCoverLetter('');
      // Optionally keep resume prefilled
    }
  };

  return (
    <>
      <TopHeader />
      <DashboardHeader />
      <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Apply for this Job</h2>
        {job && (
          <div className="mb-4">
            <div className="text-lg font-semibold text-blue-700">{job.title}</div>
            <div className="text-gray-600 text-sm mb-2">at {job.employer?.companyName || job.employer?.company || 'Company'}</div>
          </div>
        )}
        {user && (
          <div className="mb-4 p-3 bg-blue-50 rounded">
            <div className="font-medium text-gray-700">Your Info:</div>
            <div className="text-gray-800">{user.firstName} {user.lastName}</div>
            <div className="text-gray-600 text-sm">{user.phoneNumber}</div>
            <div className="text-gray-600 text-sm">{user.email}</div>
            <div className="text-gray-600 text-sm">{user.location}</div>
            <div className="text-gray-600 text-sm">{user.country}</div>
            <div className="text-gray-600 text-sm">{user.experience}</div>
            <div className="text-gray-600 text-sm">{user.headline}</div>
            <div className="text-gray-600 text-sm">{user.gender}</div>
            <div className="text-gray-600 text-sm">{user.education}</div>
            <div className="text-gray-600 text-sm">{user.maritalStatus}</div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Cover Letter <span className="text-blue-500">Optional</span></label>
            <textarea
              name="coverLetter"
              value={coverLetter}
              onChange={e => setCoverLetter(e.target.value)}
            //   required
              rows={6}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a brief cover letter explaining why you're a great fit..."
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume <span className='text-blue-500'>(PDF or Word)</span> <span className="text-red-500">*</span></label>
            <input
              type="file"
              name="resume"
              value={resume}
              onChange={e => setResume(e.target.value)}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Paste your resume link or text here"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </>
  );
}

export default JobApplication;