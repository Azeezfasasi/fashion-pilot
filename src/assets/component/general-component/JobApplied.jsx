import { useEffect, useState } from 'react';
import useApplication from '../../context-api/application/UseApplication';
// import useJob from '../../context-api/job/useJob';

function JobApplied() {
  const { applications, fetchMyApplications, loading, error } = useApplication();
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMyApplications();
    // eslint-disable-next-line
  }, []);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
   <>
   <div className="bg-white p-2 sm:p-4 md:p-6 rounded-md shadow-sm">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">Applied Jobs ({applications.length})</h3>
    </div>
    {/* Table Header */}
    <div className="hidden sm:grid grid-cols-5 bg-gray-500 text-white text-xs sm:text-sm font-medium border-b pb-2 px-2 py-2">
      <div className="col-span-2">Job</div>
      <div>Date Applied</div>
      <div>Status</div>
      <div>Action</div>
    </div>
    {/* Job Rows */}
    <div className="space-y-3 mt-4">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : applications.length === 0 ? (
        <div className="text-gray-600">You have not applied to any jobs yet.</div>
      ) : (
        applications.map((app) => (
          <div
            key={app._id}
            className="grid grid-cols-1 sm:grid-cols-5 items-start sm:items-center p-2 sm:p-3 rounded-md hover:bg-gray-50 transition hover:border hover:border-blue-300 gap-y-2 border border-solid border-gray-300"
          >
            {/* Job Info */}
            <div className="col-span-1 sm:col-span-2 flex items-center gap-2 sm:gap-4">
              <div className="p-1 sm:p-2 rounded-md bg-gray-100">
                <img src={app.job?.employer?.logo || '/default-logo.png'} alt={app.job?.title} className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-xs sm:text-sm">{app.job?.title}</p>
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                  <span>{app.job?.location}</span>
                  <span>•</span>
                  <span>{app.job?.salary}</span>
                  <span className="ml-1 px-1 sm:ml-2 sm:px-2 py-0.5 rounded text-white text-[9px] sm:text-[10px] font-semibold bg-blue-500">
                    {app.job?.contract || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
            {/* Date Applied */}
            <div className="text-xs sm:text-sm text-gray-700">{app.createdAt ? new Date(app.createdAt).toLocaleString() : ''}</div>
            {/* Status */}
            <div className="text-green-600 font-medium text-xs sm:text-sm flex items-center gap-1">
              ✓ {app.status}
            </div>
            {/* Action */}
            <div>
              <button
                className="bg-blue-600 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-blue-700 transition"
                onClick={() => handleViewDetails(app.job)}
              >
                View Details
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    {/* Modal for job details */}
    {showModal && selectedJob && (
      <div className="fixed inset-0 shadow-md flex items-center justify-center z-50 bg-black bg-opacity-30 px-2">
        <div className="bg-pink-50 rounded-lg shadow-lg p-4 sm:p-8 max-w-lg w-full relative border border-solid border-gray-300">
          <button
            className="absolute top-1 right-2 text-red-700 text-3xl sm:text-[48px] hover:text-red-900"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
          <h2 className="text-lg sm:text-xl font-bold mb-2">{selectedJob.title}</h2>
          <div className="mb-2 text-gray-700 flex flex-col sm:flex-row justify-start gap-1 items-start">
            <div className='font-semibold text-blue-500'>Job Description:</div>
            {selectedJob.description}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-start gap-1 items-start"> 
            <div className='font-semibold text-blue-500'>Application Status:</div>
            {/* You can add status here if available */}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-start gap-1 items-start"> 
            <div className='font-semibold text-blue-500'>Location:</div>
            {selectedJob.location}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-start gap-1 items-start">
            <div className='font-semibold text-blue-500'>Salary:</div>
            {selectedJob.salary}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-start gap-1 items-start">
            <div className='font-semibold text-blue-500'>Type:</div> 
            {selectedJob.contract}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-start gap-1 items-start">
            <div className='font-semibold text-blue-500'>Status:</div>
            {selectedJob.status}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm">
            <div className='font-semibold text-blue-500'>Requirements:</div>
            {selectedJob.requirements?.join(', ')}
          </div>
          <div className="mb-2 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-start gap-1 items-start"> 
            <div className='font-semibold text-blue-500'>Employer:</div>
            {selectedJob.employer?.companyName || selectedJob.employer?.company || 'Company'}
          </div>
          <div className='flex flex-row justify-end gap-3 mt-4'>
            <button
              className="bg-blue-600 text-white text-base sm:text-[20px] py-1 px-3 hover:text-white border rounded-lg cursor-pointer"
              onClick={window.print}
            >
              Print
            </button>
            <button
              className="bg-red-500 text-white text-base sm:text-[20px] py-1 px-3 hover:text-white border rounded-lg cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
   </>
  );
}

export default JobApplied;