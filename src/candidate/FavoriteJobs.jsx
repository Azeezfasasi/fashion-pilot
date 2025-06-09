import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import SideMenu from "../assets/component/general-component/SideMenu"
import TopHeader from "../assets/component/home-component/TopHeader"

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
      <button
        className="mt-3 sm:mt-0 bg-blue-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition"
        disabled={job.isExpired}
      >
        {job.isExpired ? 'Expired' : 'View Details'}
      </button>
    </div>
    </>
  );
}


// Sample data (replace with actual data fetching in a real application)
const jobData = [
  {
    id: 1,
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Placeholder
    jobTitle: 'Technical Support Specialist',
    jobType: 'Full Time',
    location: 'Idaho, USA',
    salaryRange: '$15K-$20K',
    isExpired: true,
  },
  {
    id: 2,
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/YouTube_logo.png', // Placeholder
    jobTitle: 'UI/UX Designer',
    jobType: 'Full Time',
    location: 'Minnesota, USA',
    salaryRange: '$10K-$15K',
    daysRemaining: '4 Days',
    isExpired: false,
  },
  {
    id: 3,
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Asana_logo.png', // Placeholder
    jobTitle: 'Senior UX Designer',
    jobType: 'Full Time',
    location: 'United Kingdom of Great Britain',
    salaryRange: '$30K-$35K',
    daysRemaining: '4 Days',
    isExpired: false,
    isFeatured: true, // This job will have the blue border
  },
  {
    id: 4,
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Facebook_Logo_%282019%29.png', // Placeholder
    jobTitle: 'Junior Graphic Designer',
    jobType: 'Full Time',
    location: 'Mymensingh, Bangladesh',
    salaryRange: '$40K-$50K',
    daysRemaining: '4 Days',
    isExpired: false,
  },
  {
    id: 5,
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Placeholder
    jobTitle: 'Technical Support Specialist',
    jobType: 'Full Time',
    location: 'Idaho, USA',
    salaryRange: '$15K-$20K',
    isExpired: true,
  },
  {
    id: 6,
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Twitter_bird_logo_2012.svg', // Placeholder
    jobTitle: 'Product Designer',
    jobType: 'Full Time',
    location: 'Sivas, Turkey',
    salaryRange: '$50K-$70K',
    daysRemaining: '4 Days',
    isExpired: false,
  },
];

function FavoriteJobs() {
  return (
    <>
    <TopHeader />
    <DashboardHeader />
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[20%] mb-4 lg:mb-0">
        <SideMenu />
      </div>
      <div className="w-full lg:w-[80%]">
        <div className="font-sans p-5 bg-gray-100 min-h-screen">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Favorite Jobs ({jobData.length})</h2>
            <div className="space-y-4"> {/* Replaces gap */}
              {jobData.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FavoriteJobs