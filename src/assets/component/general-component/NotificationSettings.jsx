import { useState } from 'react';

const NotificationSettings = () => {
  // State for notification checkboxes
  const [notifications, setNotifications] = useState({
    shortlisted: true,
    appliedJobsExpire: false,
    fiveJobAlerts: true,
    savedProfile: false,
    rejected: true,
  });

  // State for Job Alert fields
  const [jobAlertRole, setJobAlertRole] = useState('');
  const [jobAlertLocation, setJobAlertLocation] = useState('');

  // Handle checkbox changes
  const handleNotificationChange = (e) => {
    const { id, checked } = e.target;
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [id]: checked,
    }));
  };

  // Handle job alert input changes
  const handleJobAlertChange = (e) => {
    const { id, value } = e.target;
    if (id === 'jobAlertRole') {
      setJobAlertRole(value);
    } else if (id === 'jobAlertLocation') {
      setJobAlertLocation(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Notification Settings Saved:', notifications);
    console.log('Job Alerts Saved:', {
      role: jobAlertRole,
      location: jobAlertLocation,
    });
    // In a real application, you would send this data to an API
    alert('Settings saved successfully (check console)!'); // Using alert for demo
  };

  return (
    <div className="font-sans antialiased bg-gray-50 py-3 px-6 flex justify-center items-start">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification</h2>

        {/* Notification Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="flex items-center">
            <input
              id="shortlisted"
              name="notification"
              type="checkbox"
              checked={notifications.shortlisted}
              onChange={handleNotificationChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="shortlisted" className="ml-2 block text-sm text-gray-900">
              Notify me when employers shortlisted me
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="savedProfile"
              name="notification"
              type="checkbox"
              checked={notifications.savedProfile}
              onChange={handleNotificationChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="savedProfile" className="ml-2 block text-sm text-gray-900">
              Notify me when employers saved my profile
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="appliedJobsExpire"
              name="notification"
              type="checkbox"
              checked={notifications.appliedJobsExpire}
              onChange={handleNotificationChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="appliedJobsExpire" className="ml-2 block text-sm text-gray-900">
              Notify me when my applied jobs are expire
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="rejected"
              name="notification"
              type="checkbox"
              checked={notifications.rejected}
              onChange={handleNotificationChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="rejected" className="ml-2 block text-sm text-gray-900">
              Notify me when employers rejected me
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="fiveJobAlerts"
              name="notification"
              type="checkbox"
              checked={notifications.fiveJobAlerts}
              onChange={handleNotificationChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="fiveJobAlerts" className="ml-2 block text-sm text-gray-900">
              Notify me when i have up to 5 job alerts
            </label>
          </div>
        </div>

        {/* Job Alerts Section */}
        <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-6">Job Alerts</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Role Input */}
            <div>
              <label htmlFor="jobAlertRole" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <input
                  type="text"
                  id="jobAlertRole"
                  value={jobAlertRole}
                  onChange={handleJobAlertChange}
                  className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your job roles"
                />
              </div>
            </div>

            {/* Location Input */}
            <div>
              <label htmlFor="jobAlertLocation" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <input
                  type="text"
                  id="jobAlertLocation"
                  value={jobAlertLocation}
                  onChange={handleJobAlertChange}
                  className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="City, state, country name"
                />
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

export default NotificationSettings;
