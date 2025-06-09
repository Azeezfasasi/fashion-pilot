import { Link } from "react-router-dom";

// Reusable Double Checkmark Icon for success
const DoubleCheckmarkIcon = ({ className = 'h-10 w-10' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const ProfileCompletionSuccess = () => {
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6 flex justify-center items-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mb-6">
          <DoubleCheckmarkIcon className="h-12 w-12 text-blue-600" />
        </div>

        {/* Congratulatory Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <span role="img" aria-label="party popper" className="mr-2 text-2xl">🎉</span>
          Congratulations, Your profile is 100% complete!
        </h2>

        {/* Descriptive Text */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Donec hendrerit, ante mattis pellentesque eleifend, tortor urna
          malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc
          mauris arcu, mattis sed sem vitae.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/app/dashboard"
            className="w-full sm:w-auto bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-6 rounded-md transition-colors duration-200 shadow-sm"
          >
            View Dashboard
          </Link>
          <Link to="/app/postjob"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
          >
            <span>Post Job</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletionSuccess;
