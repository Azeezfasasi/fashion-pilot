import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useJob from '../../context-api/job/useJob';
// import bookmarkblue from '../../images/bookmarkblue.svg';
import arrowrightwhite from '../../images/arrowrightwhite.svg';
import SaveToFavorite from './SaveToFavorite';

function TopJobDescription() {
  const { id } = useParams();
  const { job, fetchJob, loading } = useJob();

  useEffect(() => {
    if (id) fetchJob(id);
    // eslint-disable-next-line
  }, [id]);

  if (loading || !job) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <span>Loading job details...</span>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-10 md:gap-20 px-3 py-4 bg-white rounded-lg shadow-sm">
        <div className='w-full flex flex-row gap-4 sm:gap-6 items-center justify-start sm:w-auto'>
            {/* Company Logo */}
            <img
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 bg-transparent mx-auto sm:mx-0 border border-solid border-gray-200"
              src={job.employer?.logo || '/default-logo.png'}
              alt="Company Logo"
            />

            {/* Job Info */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start justify-center flex-1">
              <div className="flex flex-row gap-2 items-center justify-center sm:justify-start">
                <div className="text-gray-900 text-lg sm:text-2xl font-semibold">
                  {job.title}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
                <div className="text-gray-700 text-base sm:text-lg font-medium">
                  at {job.employer?.company || 'Company'}
                </div>
                {job.contract && (
                  <div className="bg-green-100 text-green-700 rounded px-2 py-0.5 text-xs sm:text-sm font-semibold">
                    {job.contract.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
        </div>
    
        {/* Apply btn */}
        <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center mt-4 sm:mt-0">
          <SaveToFavorite jobId={job._id} jobTitle={job.title} />
          <Link to={`/candidate/jobapplication/${job._id}`} className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-3 flex flex-row gap-2 items-center justify-center text-white font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
            Apply now
            <img
              className="w-6 h-6"
              src={arrowrightwhite}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopJobDescription;