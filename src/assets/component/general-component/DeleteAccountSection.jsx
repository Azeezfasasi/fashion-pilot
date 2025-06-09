// import{ FC } from 'react';

const DeleteAccountSection = () => {
  const handleDeleteAccount = () => {
    // In a real application, you would typically:
    // 1. Show a confirmation modal (much better than alert/confirm)
    // 2. If confirmed, make an API call to delete the account
    // 3. Handle success (e.g., redirect to logout page) or error

    // Using a simple confirm for demonstration purposes only.
    // In a production environment, use a custom modal for confirmation.
    if (window.confirm("Are you sure you want to delete your Jobpilot account? This action cannot be undone.")) {
      console.log('User confirmed account deletion.');
      // Simulate API call for deletion
      alert('Your account deletion request has been sent.');
      // Example: redirect user or log them out
      // window.location.href = '/logout';
    } else {
      console.log('Account deletion cancelled.');
    }
  };

  return (
    <div className="font-sans antialiased bg-gray-50 p-6 flex justify-center items-start">
      <div className="mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Delete Your Account</h2>

        {/* Warning Message */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          If you delete your Jobpilot account, you will no longer be able to get information
          about the matched jobs, following employers, and job alert, shortlisted jobs and
          more. You will be abandoned from all the services of Jobpilot.com.
        </p>

        {/* Close Account Button */}
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
            <i className="fa-regular fa-circle-xmark text-red-500"></i>
          <span>Close Account</span>
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountSection;
