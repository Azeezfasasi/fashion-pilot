import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useApplication from '../../context-api/application/UseApplication';
import { UserContext } from "../../context-api/user/UserContext";

function RecentApplied() {
  const { applications, fetchMyApplications, loading, error } = useApplication();
  const [recentApps, setRecentApps] = useState([]);
  const { isCandidate} = useContext(UserContext);

  useEffect(() => {
    fetchMyApplications();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (applications && applications.length > 0) {
      // Sort by createdAt descending and take the 5 most recent
      const sorted = [...applications].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setRecentApps(sorted.slice(0, 5));
    } else {
      setRecentApps([]);
    }
  }, [applications]);

  return (
    <>
    {isCandidate && <div className="bg-white p-6 rounded-md shadow-sm">
      {/* Header */}
       <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recently Applied</h3>
        <Link to="/candidate/appliedjobs" className="text-sm text-blue-600 hover:underline">View all →</Link>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 text-gray-500 text-sm font-medium border-b pb-2">
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
        ) : recentApps.length === 0 ? (
          <div className="text-gray-600">You have not applied to any jobs yet.</div>
        ) : (
          recentApps.map((app) => (
            <div
              key={app._id}
              className="grid grid-cols-5 items-center p-3 rounded-md hover:bg-gray-50 transition hover:border hover:border-blue-300"
            >
              {/* Job Info */}
              <div className="col-span-2 flex items-center gap-4">
                <div className="p-2 rounded-md bg-gray-100">
                  <img src={app.job?.employer?.logo || '/default-logo.png'} alt={app.job?.title} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{app.job?.title}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{app.job?.location}</span>
                    <span>•</span>
                    <span>{app.job?.salary}</span>
                    <span className="ml-2 px-2 py-0.5 rounded text-white text-[10px] font-semibold bg-blue-500">
                      {app.job?.contract || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              {/* Date Applied */}
              <div className="text-sm text-gray-700">{app.createdAt ? new Date(app.createdAt).toLocaleString() : ''}</div>
              {/* Status */}
              <div className="text-green-600 font-medium text-sm flex items-center gap-1">
                ✓ {app.status}
              </div>
              {/* Action */}
              <div>
                <button className="bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    }
    </>
  );
}

export default RecentApplied;