import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import { Link, useNavigate } from "react-router-dom";

function MostRecentVacancy() {
  const [recentCompanies, setRecentCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/jobs`);
        const jobs = await res.json();
        // Only open jobs
        const openJobs = jobs.filter(j => j.status === 'open');
        // Group by company and count open positions
        const companyMap = {};
        openJobs.forEach(job => {
          const company = job.employer?.company || 'Unknown Company';
          if (!companyMap[company]) {
            companyMap[company] = { company, count: 0, latest: job.createdAt };
          }
          companyMap[company].count += 1;
          // Track the most recent job posting date for sorting
          if (new Date(job.createdAt) > new Date(companyMap[company].latest)) {
            companyMap[company].latest = job.createdAt;
          }
        });
        // Convert to array and sort by most recent job posting
        const companiesArr = Object.values(companyMap)
          .sort((a, b) => new Date(b.latest) - new Date(a.latest))
          .slice(0, 8);
        setRecentCompanies(companiesArr);
      } catch (err) {
        console.log(err);
        setRecentCompanies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleEmployerClick = (employerId) => {
    navigate(`/app/joblist?employer=${employerId}`);
  };

  return (
    <>
      <div
        className="bg-white pt-10 sm:pt-20 pr-4 sm:pr-[50px] pb-10 sm:pb-[100px] pl-4 sm:pl-[50px] flex flex-col gap-8 sm:gap-[50px] items-start justify-start relative"
        style={{ boxShadow: "inset 0px -1px 0px 0px rgba(228, 229, 232, 1)" }}
      >
        <div className="text-gray-900 text-center font-heading-01-font-family text-2xl sm:text-[40px] leading-8 sm:leading-[48px] font-[500] relative w-full">
          Most Popular Vacancies
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
          {loading ? (
            <div className="col-span-4 text-center text-gray-500">Loading...</div>
          ) : recentCompanies.length === 0 ? (
            <div className="col-span-4 text-center text-gray-500">No recent vacancies found.</div>
          ) : (
            recentCompanies.map((item, idx) => (
              <div onClick={handleEmployerClick} key={item.company + idx} className="flex flex-col gap-2 items-start justify-start bg-blue-100 rounded-lg p-4 shadow-sm w-full border border-solid border-gray-300 cursor-pointer">
                <div className="text-[#18191c] text-left font-body-large-500-font-family text-base sm:text-[18px] leading-6 sm:leading-[28px] font-[500]">
                  {item.company}
                </div>
                <div className="text-[#767f8c] text-left font-body-small-400-font-family text-sm sm:text-[14px] leading-5 sm:leading-[20px] font-[400]">
                  {item.count.toLocaleString()} Open Position{item.count > 1 ? 's' : ''}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MostRecentVacancy;