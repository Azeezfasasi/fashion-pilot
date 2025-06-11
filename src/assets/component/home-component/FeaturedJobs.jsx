import { useEffect } from "react";
import useJob from "../../context-api/job/useJob";
import { Link } from "react-router-dom";
import arrowright from '../../images/arrowright.svg';
import employeelogo from '../../images/employeelogo.svg';
import location from '../../images/location.svg';

function FeaturedJobs() {
  const { jobs, fetchJobs, loading, error } = useJob();

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, []);

  // Sort jobs by createdAt descending and take 4 most recent
  const featuredJobs = (jobs || [])
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <>
      <div className="bg-white pt-[40px] pr-[30px] pb-[40px] pl-[30px] flex flex-col gap-[50px] items-start justify-start shrink-0 relative" style={{ boxShadow: "inset 0px -1px 0px 0px rgba(228, 229, 232, 1)" }}>
        {/* Title */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between shrink-0 w-full relative">
          <div className="text-[#18191c] text-justified font-heading-01-font-family text-[30px] md:text-[40px] leading-[48px] font-[500] relative">
            Recent Jobs
          </div>
          <Link to="/app/joblist" className="rounded-[3px] border-solid border-primary-50 border pt-3 pr-6 pb-3 pl-6 flex flex-row gap-3 items-center justify-center shrink-0 relative">
            <div className="text-[#0a65cc] text-left font-button-button-font-family text-[14px] md:text-[16px] leading-[24px] font-[600] relative">
              View All
            </div>
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src={arrowright}
              alt="arrow"
            />
          </Link>
        </div>

        {/* Featured Jobs */}
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center relative mx-auto">
          {loading ? (
            <div>Loading jobs...</div>
          ) : error ? (
            <div className="text-red-600">{error}</div>
          ) : featuredJobs.length === 0 ? (
            <div>No jobs found.</div>
          ) : (
            featuredJobs.map((job) => (
              <Link
                to={`/app/jobdetails/${job._id}`}
                key={job._id}
                className="rounded-lg border-solid border-gray-100 border shadow-md p-6 flex flex-col gap-5 items-start justify-start shrink-0 relative min-w-[320px] max-w-[350px] w-full"
              >
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                  <div className="text-[#18191c] text-left font-body-large-500-font-family text-[18px] leading-[28px] font-[500] relative self-stretch">
                    {job.title}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    {job.contract && (
                      <div className="bg-[#e7f6ea] rounded-[3px] pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                        <div className="text-[#0ba02c] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-3 font-semibold uppercase relative">
                          {job.contract}
                        </div>
                      </div>
                    )}
                    <div className="text-[#767f8c] text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative">
                      Salary: {job.salary || 'N/A'}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative">
                  <div className="bg-[#edeff5] rounded p-3 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      src={job.employer?.logo || employeelogo}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                    <div className="text-[#18191c] text-left font-body-medium-500-font-family text-[16px] leading-[24px] font-[500] relative self-stretch">
                      {job.employer?.companyName || job.employer?.company || 'Company'}
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start self-stretch relative">
                      <div className="w-[18px] h-[18px] relative">
                        <img className="w-[100%] h-[100%]" src={location} alt="location icon" />
                      </div>
                      <div className="text-gray-500 text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative flex-1">
                        {job.location || 'Location not specified'}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default FeaturedJobs;