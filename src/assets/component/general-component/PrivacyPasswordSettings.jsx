import { useState } from 'react';

const PrivacyPasswordSettings = () => {
  // State for privacy toggles
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [isResumePrivate, setIsResumePrivate] = useState(false);

  // State for password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for password visibility toggles
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handlers for privacy toggles
  const handleProfileToggle = () => {
    setIsProfilePublic(!isProfilePublic);
  };

  const handleResumeToggle = () => {
    setIsResumePrivate(!isResumePrivate);
  };

  // Handlers for password input changes
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    if (id === 'currentPassword') {
      setCurrentPassword(value);
    } else if (id === 'newPassword') {
      setNewPassword(value);
    } else if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Privacy Settings Saved:', { isProfilePublic, isResumePrivate });

    // Password change logic (simplified, add actual validation and API calls)
    if (newPassword || currentPassword || confirmPassword) { // Only attempt password change if fields are touched
      if (newPassword !== confirmPassword) {
        alert('New password and confirm password do not match!');
        return;
      }
      if (currentPassword === '') {
        alert('Please enter your current password.');
        return;
      }
      // Simulate API call for password change
      console.log('Password Change Request:', {
        currentPassword,
        newPassword,
      });
      alert('Password change request sent!');
    } else {
        alert('Privacy settings saved!');
    }

    // Reset password fields after submission
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6 flex justify-center items-start">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <form onSubmit={handleSubmit}>
          {/* Profile Privacy Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile Privacy</h2>
          <div className="flex items-center justify-between mb-8 p-4 border border-gray-200 rounded-md shadow-sm">
            <label htmlFor="profile-public-toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="profile-public-toggle"
                  className="sr-only"
                  checked={isProfilePublic}
                  onChange={handleProfileToggle}
                />
                <div
                  className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
                    isProfilePublic ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 transform ${
                    isProfilePublic ? 'translate-x-6' : ''
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-sm font-medium text-gray-700">
                <span className={`${isProfilePublic ? 'text-blue-600' : 'text-gray-500'} font-bold mr-1`}>
                  {isProfilePublic ? 'YES' : 'NO'}
                </span>
                Your profile is {isProfilePublic ? 'public' : 'private'} now
              </div>
            </label>
          </div>

          {/* Resume Privacy Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Resume Privacy</h2>
          <div className="flex items-center justify-between mb-8 p-4 border border-gray-200 rounded-md shadow-sm">
            <label htmlFor="resume-private-toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="resume-private-toggle"
                  className="sr-only"
                  checked={isResumePrivate}
                  onChange={handleResumeToggle}
                />
                <div
                  className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
                    isResumePrivate ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 transform ${
                    isResumePrivate ? 'translate-x-6' : ''
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-sm font-medium text-gray-700">
                <span className={`${isResumePrivate ? 'text-blue-600' : 'text-gray-500'} font-bold mr-1`}>
                  {isResumePrivate ? 'YES' : 'NO'}
                </span>
                Your resume is {isResumePrivate ? 'public' : 'private'} now
              </div>
            </label>
          </div>

          {/* Change Password Section */}
          <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-6">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <div className="relative mt-1">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  id="currentPassword"
                  value={currentPassword}
                  onChange={handlePasswordChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showCurrentPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye-slash"></i>}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative mt-1">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showNewPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye-slash"></i>}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handlePasswordChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showConfirmPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye-slash"></i>}
                </button>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivacyPasswordSettings;
