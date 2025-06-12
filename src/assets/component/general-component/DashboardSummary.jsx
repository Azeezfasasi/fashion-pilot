import { useContext, useEffect } from "react";
import { UserContext } from "../../context-api/user/UserContext";
import useJob from "../../context-api/job/useJob";
import useApplication from "../../context-api/application/UseApplication";

function DashboardSummary() {
  const {user, isEmployer, isCandidate} = useContext(UserContext);
  const { myJobs, fetchMyJobs } = useJob();
  const { applications, allEmployerApplications,  fetchAllEmployerApplications } = useApplication();

  useEffect(() => {
    if (isEmployer) {
      fetchMyJobs();
      fetchAllEmployerApplications();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmployer]);

  // count all applications for jobs posted by this employer
  let numberOfCandidates = 0;
    if (isEmployer) {
      numberOfCandidates = allEmployerApplications.length;
    } else {
      numberOfCandidates = applications.length;
  }

  // Counts for number of posted jobs
  const numberOfPostedJobs = isEmployer ? (myJobs ? myJobs.length : 0) : 0;

  //  Counts for number of opened jobs
  const numberOfOpenedJobs = isEmployer
    ? (myJobs ? myJobs.filter(j => j.status === "open").length : 0)
    : 0;

  //  Counts for number of closed jobs
  const numberOfClosedJobs = isEmployer
    ? (myJobs ? myJobs.filter(j => j.status === "closed").length : 0)
    : 0;

  if (!user) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Greeting */}
      <div>
        {isEmployer && <h2 className="text-xl font-semibold text-gray-800">Hello, {user.company}</h2>}

        {isCandidate && <h2 className="text-xl font-semibold text-gray-800">Hello, {user.firstName} {user.lastName}</h2>}

        <p className="text-sm text-gray-500">Here is your daily activities and job alerts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Candidates */}
        <div className="flex items-center justify-between bg-blue-100 p-4 rounded-md">
          <div>
            <div className="text-2xl font-bold text-gray-800">{numberOfCandidates}</div>
            <div className="text-sm text-gray-600">{isEmployer ? "Candidates" : "Applied Jobs"}</div>
          </div>
          <div className="bg-white p-2 rounded-md">
            <i className="fa-solid fa-users text-blue-500"></i>
          </div>
        </div>

        {/* Posted Jobs */}
        <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-md">
          {isEmployer && <div>
            <div className="text-2xl font-bold text-gray-800">{numberOfPostedJobs}</div>
            <div className="text-sm text-gray-600">Posted jobs</div>
          </div>}
          {isCandidate && <div>
            <div className="text-2xl font-bold text-gray-800">{numberOfPostedJobs}</div>
            <div className="text-sm text-gray-600">Favorite Jobs</div>
          </div>}
          <div className="bg-white p-2 rounded-md">
            <i className="fa-solid fa-briefcase text-yellow-500"></i>
          </div>
        </div>

        {/* Opened Jobs */}
        {isEmployer && <div className="flex items-center justify-between bg-green-100 p-4 rounded-md">
          <div>
            <div className="text-2xl font-bold text-gray-800">{numberOfOpenedJobs}</div>
            <div className="text-sm text-gray-600">Opened Jobs</div>
          </div>
          <div className="bg-white p-2 rounded-md">
            <i className="fa-solid fa-briefcase text-green-600"></i>
          </div>
        </div>
        }

        {/* closed Jobs */}
        {isEmployer && <div className="flex items-center justify-between bg-green-100 p-4 rounded-md">
          <div>
            <div className="text-2xl font-bold text-gray-800">{numberOfClosedJobs}</div>
            <div className="text-sm text-gray-600">Closed Jobs</div>
          </div>
          <div className="bg-white p-2 rounded-md">
            <i className="fa-solid fa-briefcase text-red-600"></i>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default DashboardSummary;
