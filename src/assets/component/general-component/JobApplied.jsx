

const jobs = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Upwork_Logo.svg',
    title: 'Networking Engineer',
    type: 'Remote',
    location: 'Washington',
    salary: '$50k-80k/month',
    dateApplied: 'Feb 2, 2019 19:28',
    status: 'Active',
    companyColor: 'bg-green-100',
  },
  {
    id: 2,
    logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg',
    title: 'Product Designer',
    type: 'Full Time',
    location: 'Dhaka',
    salary: '$50k-80k/month',
    dateApplied: 'Dec 7, 2019 23:26',
    status: 'Active',
    companyColor: 'bg-pink-100',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    title: 'Junior Graphic Designer',
    type: 'Temporary',
    location: 'Brazil',
    salary: '$50k-80k/month',
    dateApplied: 'Feb 2, 2019 19:28',
    status: 'Active',
    companyColor: 'bg-black',
  },
  {
    id: 4,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    title: 'Visual Designer',
    type: 'Contract Base',
    location: 'Wisconsin',
    salary: '$50k-80k/month',
    dateApplied: 'Dec 7, 2019 23:26',
    status: 'Active',
    companyColor: 'bg-blue-100 border border-blue-300',
  },
];

function JobApplied() {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Applied Jobs (76)</h3>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 bg-gray-500 text-white text-sm font-medium border-b pb-2 px-2 py-2">
        <div className="col-span-2">Job</div>
        <div>Date Applied</div>
        <div>Status</div>
        <div>Action</div>
      </div>

      {/* Job Rows */}
      <div className="space-y-3 mt-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`grid grid-cols-5 items-center p-3 rounded-md hover:bg-gray-50 transition hover:border hover:border-blue-300 ${
              job.title === 'Visual Designer' ? '' : ''
            }`}
          >
            {/* Job Info */}
            <div className="col-span-2 flex items-center gap-4">
              <div className={`p-2 rounded-md ${job.companyColor}`}>
                <img src={job.logo} alt={job.title} className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{job.title}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.salary}</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded text-white text-[10px] font-semibold ${
                      job.type === 'Remote'
                        ? 'bg-blue-500'
                        : job.type === 'Full Time'
                        ? 'bg-blue-400'
                        : job.type === 'Temporary'
                        ? 'bg-purple-500'
                        : 'bg-cyan-600'
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Date Applied */}
            <div className="text-sm text-gray-700">{job.dateApplied}</div>

            {/* Status */}
            <div className="text-green-600 font-medium text-sm flex items-center gap-1">
              ✓ {job.status}
            </div>

            {/* Action */}
            <div>
              <button className="bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplied;
