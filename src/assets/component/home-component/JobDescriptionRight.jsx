import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useJob from '../../context-api/job/useJob';
import bluemap from '../../images/bluemap.svg'
import JobDescriptionOverview from './JobDescriptionOverview';
import ShareThisJob from './ShareThisJob';

function JobDescriptionRight() {
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
      <div className="w-full lg:w-[45%] flex flex-col gap-0 lg:gap-6 items-center lg:items-start justify-start relative pr-0 lg:pr-10 mt-4 mx-auto lg:mx-0">
        {/* Top section */}
        <div className="w-full bg-white rounded-lg border border-[#e7f0fa] p-6 flex flex-col sm:flex-row gap-6 items-center justify-center shadow-sm">
          {/* Salary */}
          <div className="flex flex-col gap-2 items-center justify-center flex-1">
            <div className="text-gray-900 text-center font-semibold text-base sm:text-lg">Salary (NGN)</div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="text-[#0ba02c] text-center font-semibold text-base test-[14px]">
                {job.salary ? job.salary : 'Not specified'}
              </div>
              <div className="text-gray-500 text-center text-sm">
                {job.contract ? job.contract : ''}
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden sm:block border-l border-[#e7f0fa] h-16 mx-4" />
          {/* Location */}
          <div className="flex flex-col gap-2 items-center justify-center flex-1">
            <div className="w-10 h-10 mb-1">
              <img className="w-full h-full object-contain" src={bluemap} alt="Location" />
            </div>
            <div className="text-gray-900 text-center font-semibold text-base sm:text-lg">Job Location</div>
            <div className="text-gray-500 text-center text-base">
              {job.location ? job.location : 'Not specified'}
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <JobDescriptionOverview />
        <ShareThisJob />
      </div>
    </>
  );
}

export default JobDescriptionRight