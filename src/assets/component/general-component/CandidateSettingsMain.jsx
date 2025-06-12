import { useState, useEffect } from 'react';
import UserChangeIcon from '@rsuite/icons/UserChange';
import GlobalIcon from '@rsuite/icons/Global';
import LockIcon from '@rsuite/icons/Lock';
import BasicInformationFormOnly from './BasicInformationFormOnly';
import AdditionalPersonalInfoForm from './AdditionalPersonalInfoForm';
import SocialLinksForm from './SocialLinksForm';
import ContactInfoForm from './ContactInfoForm';
import NotificationSettings from './NotificationSettings';
import PrivacyPasswordSettings from './PrivacyPasswordSettings';
import DeleteAccountSection from './DeleteAccountSection';

const navTabs = [
  { key: 'personal', label: 'Personal', icon: <UserChangeIcon /> },
  { key: 'profile', label: 'Profile', icon: <UserChangeIcon /> },
  { key: 'social', label: 'Social Links', icon: <GlobalIcon /> },
  { key: 'account', label: 'Account Setting', icon: <LockIcon /> },
];

const CandidateSettingsMain = () => {
    // const [activeTab, setActiveTab] = useState('personal');
  const [resumes, setResumes] = useState([
    { id: 1, name: 'Professional Resume', size: '3.5 MB' },
  ]);
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('employerActiveTab') || 'personal');
  
  useEffect(() => {
    localStorage.setItem('employerActiveTab', activeTab);
  }, [activeTab]);

  const [showDropdownId, setShowDropdownId] = useState(null); // State to manage which resume dropdown is open

  const handleToggleDropdown = (id) => {
    setShowDropdownId(showDropdownId === id ? null : id);
  };

   const handleResumeUpload = (e) => {
  const file = e.target.files?.[0];
  if (file && file.type === 'application/pdf') {
    const newResume = {
      id: resumes.length + 1,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
    };
    setResumes((prev) => [...prev, newResume]);
  } else {
    alert('Only PDF files are allowed.');
  }
};


  return (
    <>
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-1 sm:p-3 lg:p-6 mx-auto">
      <div className="max-w-4xl mx-auto self-center bg-white rounded-lg shadow-md p-2 sm:p-4 md:p-8 w-full border border-solid border-gray-300">
        {/* Header and Navigation */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">Setting</h1>
        <nav className="border-b border-gray-200 pb-2 sm:pb-4 overflow-x-auto">
          <ul className="flex flex-nowrap sm:space-x-6 space-x-2">
            {navTabs.map(tab => (
              <li key={tab.key} className="flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center space-x-1 sm:space-x-2 pb-2 sm:pb-3 px-1 sm:px-4 text-xs sm:text-sm font-medium transition-colors duration-200 border-b-2 -mb-2 focus:outline-none ${
                    activeTab === tab.key
                      ? 'text-blue-600 border-blue-600 bg-blue-50'
                      : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-200'
                  }`}
                  aria-current={activeTab === tab.key ? 'page' : undefined}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        {activeTab === 'personal' && (
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-6">Personal Info</h2>
            <BasicInformationFormOnly onNext={() => {
              localStorage.setItem('employerActiveTab', 'profile');
              setActiveTab('profile');
            }} />
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="mt-4 sm:mt-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-6">Profile</h2>
            <AdditionalPersonalInfoForm onNext={() => {
              localStorage.setItem('employerActiveTab', 'social');
              setActiveTab('social');
            }} />
          </div>
        )}
        {activeTab === 'social' && (
          <div className="mt-4 sm:mt-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-6">Social Links</h2>
            <SocialLinksForm onNext={() => {
              localStorage.setItem('employerActiveTab', 'account');
              setActiveTab('account');
            }} />
          </div>
        )}
        {activeTab === 'account' && (
          <div className="mt-4 sm:mt-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-6">Account Setting</h2>
            <ContactInfoForm />
            <NotificationSettings />
            <PrivacyPasswordSettings />
            <DeleteAccountSection />
          </div>
        )}

        {/* Your CV/Resume Section */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Your Cv/Resume</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="relative bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-800">{resume.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{resume.size}</p>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={() => handleToggleDropdown(resume.id)}
                    className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                  {showDropdownId === resume.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      <button className="flex items-center px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit Resume
                      </button>
                      <button className="flex items-center px-4 py-2 text-xs sm:text-sm text-red-600 hover:bg-red-50 w-full text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Add Resume Card */}
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center h-32 sm:h-40">
              <input type="file" onChange={handleResumeUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
              <div className="p-2 sm:p-3 bg-blue-500 rounded-full mb-2 sm:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m0-6H6" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium text-blue-600">Browse file</span> or drop here. only pdf
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CandidateSettingsMain;