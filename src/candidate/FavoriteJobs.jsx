import { useEffect, useState, useContext } from "react";
import DashboardHeader from "../assets/component/general-component/DashboardHeader";
import SideMenu from "../assets/component/general-component/SideMenu";
import TopHeader from "../assets/component/home-component/TopHeader";
import { UserContext } from "../assets/context-api/user/UserContext";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-lg border ${job.isFeatured ? 'border-blue-500' : 'border-gray-200'} bg-white shadow-sm relative`}
      >
        <img src={job.companyLogo} alt={job.jobTitle} className="w-14 h-14 object-contain rounded-md bg-gray-50" />
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <h3 className="text-lg font-semibold text-gray-800">{job.jobTitle}</h3>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-medium ml-0 sm:ml-2">{job.jobType}</span>
            {job.isExpired && (
              <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-600 font-medium ml-0 sm:ml-2">Expired</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-1">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.salaryRange}</span>
            {job.daysRemaining && !job.isExpired && (
              <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">{job.daysRemaining} left</span>
            )}
          </div>
        </div>
        <Link to={`/app/jobdetails/${job._id}`}
          className="mt-3 sm:mt-0 bg-blue-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </>
  );
}

function FavoriteJobs() {
  const { fetchFavorites } = useContext(UserContext);
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFavorites();
        setFavoriteJobs(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch favorite jobs');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <DashboardHeader />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full hidden lg:w-[20%] mb-4 lg:mb-0">
          <SideMenu />
        </div>
        <div className="w-full lg:w-[80%]">
          <div className="font-sans p-5 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Favorite Jobs ({favoriteJobs.length})</h2>
              <div className="space-y-4">
                {loading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div className="text-red-600">{error}</div>
                ) : favoriteJobs.length === 0 ? (
                  <div className="text-gray-600">You have no favorite jobs yet.</div>
                ) : (
                  favoriteJobs.map((job) => (
                    <JobCard
                      key={job._id}
                      job={{
                        companyLogo: job.employer?.logo || '/default-logo.png',
                        jobTitle: job.title,
                        jobType: job.contract,
                        location: job.location,
                        salaryRange: job.salary,
                        isExpired: job.status === 'closed',
                        isFeatured: false, // You can add logic for featured
                        ...job
                      }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoriteJobs;