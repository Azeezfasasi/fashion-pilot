import { useState } from 'react';


const OnboardingEmployerContactInfo = () => {
  // State for form fields (example using string for phone number)
  const [mapLocation, setMapLocation] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'mapLocation':
        setMapLocation(value);
        break;
      case 'countryCode':
        setCountryCode(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or update global state
    console.log({
      mapLocation,
      fullPhoneNumber: `${countryCode}${phoneNumber}`,
      email,
    });
    // Add logic for saving changes, e.g., showing a success message
    alert('Changes saved (Check console for data)!');
  };

  return (
    <div className="font-sans antialiased bg-gray-50 p-6 flex justify-center items-start">
      <div className="mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Info</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Address */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Address Location</label>
            <div className="mt-1 flex rounded-md shadow-sm border border-solid border-gray-200">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                type="text"
                id="mapLocation"
                value={mapLocation}
                onChange={handleInputChange}
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your address"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <div className="mt-1 flex rounded-md shadow-sm border border-solid border-gray-200">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Phone number.."
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="mt-1 flex rounded-md shadow-sm border border-solid border-gray-200">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange}
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="mt-8">
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

export default OnboardingEmployerContactInfo;
