import React, { useEffect, useState } from 'react';
import useJob from '../../context-api/job/useJob';
import useApplication from '../../context-api/application/UseApplication';

function ApplicantsMain() {
  const { myJobs, fetchMyJobs, loading: jobsLoading, error: jobsError } = useJob();
  const {
    applications,
    fetchApplicationsForJob,
    updateApplicationStatus,
    loading: appsLoading,
    error: appsError,
  } = useApplication();

  const [expandedJobId, setExpandedJobId] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(null);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [resumePreviewUrl, setResumePreviewUrl] = useState(null);

  useEffect(() => {
    fetchMyJobs();
    // eslint-disable-next-line
  }, []);

  // When a job is expanded, fetch its applications
  const handleExpand = (jobId) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(jobId);
      fetchApplicationsForJob(jobId);
    }
  };

  // Filter applicants by search and status
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.candidate?.name?.toLowerCase().includes(search.toLowerCase()) ||
      app.candidate?.email?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus ? app.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  // Status badge color
  const statusBadge = (status) => {
    switch (status) {
      case 'applied': return 'bg-gray-200 text-gray-800';
      case 'reviewed': return 'bg-blue-100 text-blue-700';
      case 'interview': return 'bg-yellow-100 text-yellow-700';
      case 'offered': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Update application status
  const handleStatusChange = async (id, status) => {
    setStatusUpdating(id);
    await updateApplicationStatus(id, status);
    setStatusUpdating(null);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white shadow rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Applicants for My Jobs</h2>
      {jobsError && <div className="text-red-600 text-sm mb-2">{jobsError}</div>}
      {jobsLoading ? (
        <div>Loading jobs...</div>
      ) : myJobs && myJobs.length > 0 ? (
        <div className="space-y-6">
          {myJobs.map((job) => (
            <div key={job._id} className="border rounded p-5 bg-gray-50">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleExpand(job._id)}>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <div className="text-gray-600 text-sm">{job.location} | {job.contract} | {job.salary}</div>
                </div>
                <button className="text-blue-600 font-medium underline">{expandedJobId === job._id ? 'Hide Applicants' : 'View Applicants'}</button>
              </div>
              {expandedJobId === job._id && (
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Search applicants by name or email"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="border rounded px-3 py-1 text-sm"
                      />
                      <select
                        value={filterStatus}
                        onChange={e => setFilterStatus(e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value="">All Statuses</option>
                        <option value="applied">Applied</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="interview">Interview</option>
                        <option value="offered">Offered</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => window.print()}>Print</button>
                      {/* Export can be implemented as needed */}
                    </div>
                  </div>
                  {appsError && <div className="text-red-600 text-sm mb-2">{appsError}</div>}
                  {appsLoading ? (
                    <div>Loading applicants...</div>
                  ) : filteredApplications.length === 0 ? (
                    <div className="text-gray-600">No applicants found for this job.</div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="p-2 text-left">Name</th>
                            <th className="p-2 text-left">Email</th>
                            <th className="p-2 text-left">Resume</th>
                            <th className="p-2 text-left">Cover Letter</th>
                            <th className="p-2 text-left">Status</th>
                            <th className="p-2 text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredApplications.map((app) => (
                            <tr key={app._id} className="border-b hover:bg-gray-100">
                              <td className="p-2">{app.candidate?.name || 'N/A'}</td>
                              <td className="p-2">{app.candidate?.email || 'N/A'}</td>
                              <td className="p-2">
                                {app.resume ? (
                                    <>
                                    <button
                                        className="text-blue-600 underline"
                                        onClick={() => setResumePreviewUrl(app.resume)}
                                        type="button"
                                    >
                                        View
                                    </button>
                                    </>
                                ) : 'N/A'}
                              </td>
                              <td className="p-2">
                                {app.coverLetter ? (
                                  <button className="text-blue-600 underline" onClick={() => { setSelectedApplicant(app); setShowModal(true); }}>View</button>
                                ) : 'N/A'}
                              </td>
                              <td className="p-2">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge(app.status)}`}>{app.status}</span>
                              </td>
                              <td className="p-2">
                                <select
                                  value={app.status}
                                  onChange={e => handleStatusChange(app._id, e.target.value)}
                                  disabled={statusUpdating === app._id}
                                  className="border rounded px-2 py-1 text-sm"
                                >
                                  <option value="applied">Applied</option>
                                  <option value="reviewed">Reviewed</option>
                                  <option value="interview">Interview</option>
                                  <option value="offered">Offered</option>
                                  <option value="rejected">Rejected</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600">You have not posted any jobs yet.</div>
      )}
      {/* Modal for applicant details */}
      {showModal && selectedApplicant && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative border border-solid border-gray-300">
            <button
              className="absolute top-1 right-2 text-red-700 text-[48px] hover:text-red-900"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2">Applicant Details</h2>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Name:</span> {selectedApplicant.candidate?.name}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Email:</span> {selectedApplicant.candidate?.email}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Resume:</span> {selectedApplicant.resume ? <a href={selectedApplicant.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Resume</a> : 'N/A'}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Cover Letter:</span></div>
            <div className="mb-4 text-gray-600 bg-gray-100 rounded p-3 whitespace-pre-line max-h-40 overflow-y-auto">{selectedApplicant.coverLetter || 'N/A'}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Status:</span> <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge(selectedApplicant.status)}`}>{selectedApplicant.status}</span></div>
            <div className="flex flex-row justify-end gap-3 mt-4">
              <button
                className="bg-blue-600 text-white text-[18px] py-1 px-4 hover:bg-blue-700 border rounded-lg cursor-pointer"
                onClick={window.print}
              >
                Print
              </button>
              <button
                className="bg-red-500 text-white text-[18px] py-1 px-4 hover:bg-red-700 border rounded-lg cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Resume Preview */}
      {resumePreviewUrl && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
            <button
                className="absolute top-1 right-2 text-red-700 text-[32px] hover:text-red-900"
                onClick={() => setResumePreviewUrl(null)}
            >
                &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Candidate Resume</h3>
            {resumePreviewUrl.endsWith('.pdf', '.docx', '.png', '.jpeg', '.jpg') ? (
                <iframe
                src={resumePreviewUrl}
                title="Resume Preview"
                className="w-full h-[500px] border"
                />
            ) : (
                <img
                src={resumePreviewUrl}
                alt="Resume Preview"
                className="max-w-full max-h-[500px] mx-auto"
                />
            )}
            <div className="mt-4">
                <a
                href={resumePreviewUrl}
                download
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                >
                Download Resume
                </a>
            </div>
            </div>
        </div>
        )}
    </div>
  );
}

export default ApplicantsMain;