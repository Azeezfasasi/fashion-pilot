import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const OnboardingOrganizationDetails = () => {
  // State for form fields
  const [organizationType, setOrganizationType] = useState<string>('');
  const [industryType, setIndustryType] = useState<string>('');
  const [teamSize, setTeamSize] = useState<string>('');
  const [yearOfEstablishment, setYearOfEstablishment] = useState<string>('');
  const [companyWebsite, setCompanyWebsite] = useState<string>('');
  const [companyVision, setCompanyVision] = useState<string>('');

  // Handler for input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'organizationType':
        setOrganizationType(value);
        break;
      case 'industryType':
        setIndustryType(value);
        break;
      case 'teamSize':
        setTeamSize(value);
        break;
      case 'yearOfEstablishment':
        setYearOfEstablishment(value);
        break;
      case 'companyWebsite':
        setCompanyWebsite(value);
        break;
      case 'companyVision':
        setCompanyVision(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      organizationType,
      industryType,
      teamSize,
      yearOfEstablishment,
      companyWebsite,
      companyVision,
    };
    console.log('Organization Details Saved:', formData);
    // Call the onSaveAndNext callback if provided
    alert('Organization details saved (check console)!'); // Using alert for demo
  };

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6 flex justify-center items-start">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <form onSubmit={handleSubmit}>
          {/* Top Row: Organization Type, Industry Types, Team Size */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-8">
            {/* Organization Type */}
            <div>
              <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
              <select
                id="organizationType"
                value={organizationType}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
              >
                <option value="">Select...</option>
                <option value="public">Public Company</option>
                <option value="private">Private Company</option>
                <option value="non-profit">Non-Profit Organization</option>
                <option value="startup">Startup</option>
              </select>
            </div>

            {/* Industry Types */}
            <div>
              <label htmlFor="industryType" className="block text-sm font-medium text-gray-700 mb-1">Industry Types</label>
              <select
                id="industryType"
                value={industryType}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
              >
                <option value="">Select...</option>
                <option value="it">Information Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                {/* Add more industries */}
              </select>
            </div>

            {/* Team Size */}
            <div>
              <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
              <select
                id="teamSize"
                value={teamSize}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
              >
                <option value="">Select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
          </div>

          {/* Middle Row: Year of Establishment, Company Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {/* Year of Establishment */}
            <div>
              <label htmlFor="yearOfEstablishment" className="block text-sm font-medium text-gray-700 mb-1">Year of Establishment</label>
              <div className="relative mt-1">
                <input
                  type="date"
                  id="yearOfEstablishment"
                  value={yearOfEstablishment}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>

            {/* Company Website */}
            <div>
              <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <i className="fa-solid fa-link"></i>
                </span>
                <input
                  type="url"
                  id="companyWebsite"
                  value={companyWebsite}
                  onChange={handleInputChange}
                  className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Website url..."
                />
              </div>
            </div>
          </div>

          {/* Company Vision Section */}
          <div className="mb-6">
            <label htmlFor="companyVision" className="block text-sm font-medium text-gray-700 mb-1">Company Vision</label>
            <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden focus-within:ring-blue-500 focus-within:border-blue-500">
              <textarea
                id="companyVision"
                rows={6}
                value={companyVision}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none resize-y"
                placeholder="Tell us about your company vision..."
              ></textarea>              
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-start space-x-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Save</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingOrganizationDetails;
