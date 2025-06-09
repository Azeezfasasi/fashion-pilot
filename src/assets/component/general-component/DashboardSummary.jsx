
function DashboardSummary() {
  return (
    <div className="p-6 space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Hello, Esther Howard</h2>
        <p className="text-sm text-gray-500">Here is your daily activities and job alerts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Applied Jobs */}
        <div className="flex items-center justify-between bg-blue-100 p-4 rounded-md">
          <div>
            <div className="text-2xl font-bold text-gray-800">589</div>
            <div className="text-sm text-gray-600">Applied jobs</div>
          </div>
          <div className="bg-white p-2 rounded-md">
            <img src="https://www.svgrepo.com/show/497763/briefcase.svg" alt="Briefcase" className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        {/* Favorite Jobs */}
        <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-md">
          <div>
            <div className="text-2xl font-bold text-gray-800">238</div>
            <div className="text-sm text-gray-600">Favorite jobs</div>
          </div>
          <div className="bg-white p-2 rounded-md">
            <img src="https://www.svgrepo.com/show/510109/bookmark.svg" alt="Bookmark" className="w-5 h-5 text-yellow-500" />
          </div>
        </div>

        {/* Job Alerts */}
        <div className="flex items-center justify-between bg-green-100 p-4 rounded-md">
          <div>
            <div className="text-2xl font-bold text-gray-800">574</div>
            <div className="text-sm text-gray-600">Job Alerts</div>
          </div>
          <div className="bg-white p-2 rounded-md">
            <img src="https://www.svgrepo.com/show/514280/bell.svg" alt="Alert" className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>

      {/* Profile Alert */}
      <div className="bg-red-500 text-white rounded-md p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="font-semibold">Your profile editing is not completed.</p>
            <p className="text-sm">Complete your profile editing & build your custom Resume</p>
          </div>
        </div>
        <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-100 transition flex items-center gap-1">
          Edit Profile <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSummary;
