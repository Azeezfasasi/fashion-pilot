import { useState } from 'react';
import UserChangeIcon from '@rsuite/icons/UserChange';
import GlobalIcon from '@rsuite/icons/Global';
import LockIcon from '@rsuite/icons/Lock';
import CompanyProfileForm from './CompanyProfileForm';
import OrganizationDetailsForm from './OrganizationDetailsForm';
import EmployerSocialLinksForm from './EmployerSocialLinkForm';
import EmployerContactInfoForm from './EmployerContactInfoForm';
import BasicInformationFormOnly from './BasicInformationFormOnly';
import AdditionalPersonalInfoForm from './AdditionalPersonalInfoForm';
import SocialLinksForm from './SocialLinksForm';
import ContactInfoForm from './ContactInfoForm';
import NotificationSettings from './NotificationSettings';
import PrivacyPasswordSettings from './PrivacyPasswordSettings';
import DeleteAccountSection from './DeleteAccountSection';

const navTabs = [
  { key: 'details', label: 'Personal', icon: <UserChangeIcon /> },
  { key: 'information', label: 'Profile', icon: <UserChangeIcon /> },
  { key: 'socialmedia', label: 'Social Links', icon: <GlobalIcon /> },
  { key: 'account', label: 'Accounting Settings', icon: <LockIcon /> },
];

  const CandidateAccountSetupMain = () => {
    const stepKeys = ['details', 'information', 'socialmedia', 'account'];
    const [activeStep, setActiveStep] = useState(() => {
    const saved = localStorage.getItem('CandidateAccountSetupActiveStep');
    return saved ? Number(saved) : 0;
  });
  const activeTab = stepKeys[activeStep];

  console.log('AccountSetupMain render, activeStep:', activeStep);

  const goToStep = (idx) => {
    if (idx >= 0 && idx < stepKeys.length) {
      localStorage.setItem('CandidateAccountSetupActiveStep', idx);
      setActiveStep(idx);
    }
  };

  const handleNext = () => goToStep(activeStep + 1);
  const handlePrevious = () => goToStep(activeStep - 1);

  return (
    <>
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-2 sm:p-3 lg:p-6 mx-auto">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-2 sm:p-4 md:p-8 w-full">
      {/* Navigation */}
      <nav className="border-b border-gray-200 pb-2 sm:pb-4 overflow-x-auto">
        <ul className="flex flex-nowrap sm:space-x-6 space-x-2">
          {navTabs.map((tab, index) => (
            <li key={tab.key} className="flex-shrink-0">
              <button
                type="button"
                onClick={() => goToStep(index)}
                className={`flex items-center space-x-1 sm:space-x-2 pb-2 sm:pb-3 px-1 sm:px-4 text-xs sm:text-sm font-medium transition-colors duration-200 border-b-2 -mb-2 focus:outline-none cursor-pointer ${
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
      {activeTab === 'details' && (
        <div className="mt-4 sm:mt-6 md:mt-8">
          <BasicInformationFormOnly onNext={handleNext} isFirstStep={activeStep === 0} />
        </div>
      )}
      {activeTab === 'information' && (
        <div className="mt-4 sm:mt-8">
          <AdditionalPersonalInfoForm onNext={handleNext} onPrevious={handlePrevious} />
        </div>
      )}
      {activeTab === 'socialmedia' && (
        <div className="mt-4 sm:mt-8">
          <SocialLinksForm onNext={handleNext} onPrevious={handlePrevious} />
        </div>
      )}
      {activeTab === 'account' && (
        <div className="mt-4 sm:mt-8">
          <ContactInfoForm
            onPrevious={handlePrevious}
            isLastStep={activeStep === stepKeys.length - 1}
          />
        </div>
      )}
    </div>
  </div>
    </>
  );
};

export default CandidateAccountSetupMain;
