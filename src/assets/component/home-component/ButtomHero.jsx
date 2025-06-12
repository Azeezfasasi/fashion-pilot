import { useEffect, useState } from 'react';
import briefcase from '../../images/briefcase.svg';
// import company from '../../images/company.svg';
import candidates from '../../images/candidates.svg';
import { API_BASE_URL } from '../../config/api';

function ButtomHero() {
  const [stats, setStats] = useState({ jobs: 0, companies: 0, candidates: 0, employers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        // Fetch all jobs
        const jobsRes = await fetch(`${API_BASE_URL}/jobs`);
        const jobsData = await jobsRes.json();
        // Fetch all users
        const usersRes = await fetch(`${API_BASE_URL}/users/all`);
        const usersData = await usersRes.json();
        // Count companies (unique company names among employers)
        const employers = usersData.filter(u => u.role === 'employer');
        const companies = Array.from(new Set(employers.map(e => e.company))).filter(Boolean);
        // Count candidates
        const candidates = usersData.filter(u => u.role === 'candidate');
        setStats({
          jobs: jobsData.length,
          companies: companies.length,
          candidates: candidates.length,
          employers: employers.length,
        });
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="w-[95%] mx-auto border border-solid border-gray-200 bg-[#ffffff] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-10 py-4">
      {/* Card 1 */}
      <div className="rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="bg-primary-50 rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={briefcase} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">{loading ? '...' : stats.jobs}</div>
          <div className="text-gray-500 text-base">Live Job</div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-white rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className=" rounded p-4 flex items-center justify-center">
          {/* <img className="w-10 h-10" src={company} /> */}
          <i className="fa-regular fa-building text-[#0a65cc] text-[35px]"></i>
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">{loading ? '...' : stats.companies}</div>
          <div className="text-gray-500 text-base">Company</div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-white rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={candidates} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">{loading ? '...' : stats.candidates}</div>
          <div className="text-gray-500 text-base">Candidates</div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-gray-white rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={briefcase} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">{loading ? '...' : stats.employers}</div>
          <div className="text-gray-500 text-base">Employers</div>
        </div>
      </div>
    </div>
  );
}

export default ButtomHero;