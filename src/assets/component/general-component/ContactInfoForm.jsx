import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context-api/user/UserContext';

const ContactInfoForm = ({onNext}) => {
  const { user, updateProfile, loading, error } = useContext(UserContext);
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setLocation(user.location || '');
      setCountry(user.country || '');
      setPhoneNumber(user.phoneNumber || '');
      setEmail(user.email || '');
    }
  }, [user]);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'location':
        setLocation(value);
        break;
      case 'country':
        setCountry(value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
     const success = await updateProfile({
      location,
      country,
      phoneNumber,
      email,
    });
    console.log(success);
    if (success) {
      console.log('onNext:', onNext);
      if (onNext) onNext();
    }
  }

  return (
    <div className="font-sans antialiased bg-gray-50 p-6 flex justify-center items-start">
      <div className="mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Info</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-600 text-sm">{error}</div>}

          {/* Country */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <div className="mt-1 flex rounded-md shadow-sm border border-solid border-gray-200">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                <i className="fa-solid fa-phone"></i>
              </span>
              <select name="country" id="country" value={country} onChange={handleInputChange} className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="">Select</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
              </select>
            </div>
          </div>

            {/* Address */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Address Location</label>
            <div className="mt-1 flex rounded-md shadow-sm border border-solid border-gray-200">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                type="text"
                id="location"
                value={location}
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
                disabled
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-300"
                placeholder="Email address"
              />
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="mt-8 flex flex-col lg:flex-row justify-start items-center lg:items-start gap-4 lg:gap-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 lg:px-6 rounded-md shadow-sm transition-colors duration-200"
              disabled={loading}
            >
              Save Changes
            </button>
            <Link to='/app/dashboard'
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 lg:px-6 rounded-md shadow-sm transition-colors duration-200"
            >
              Go To Dashboard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInfoForm;
