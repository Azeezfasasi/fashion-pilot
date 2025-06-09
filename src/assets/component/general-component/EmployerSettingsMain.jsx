import { useState } from 'react';
import UserChangeIcon from '@rsuite/icons/UserChange';
import GlobalIcon from '@rsuite/icons/Global';
import LockIcon from '@rsuite/icons/Lock';
import CompanyProfileForm from './CompanyProfileForm';
import OrganizationDetailsForm from './OrganizationDetailsForm';
import EmployerSocialLinksForm from './EmployerSocialLinkForm';
import EmployerContactInfoForm from './EmployerContactInfoForm';

const navTabs = [
  { key: 'company', label: 'Company Info', icon: <UserChangeIcon /> },
  { key: 'founding', label: 'Founding Info', icon: <UserChangeIcon /> },
  { key: 'social', label: 'Social Media Info', icon: <GlobalIcon /> },
  { key: 'contact', label: 'Contact', icon: <LockIcon /> },
];

const EmployerSettingsMain = () => {
    const [activeTab, setActiveTab] = useState('company');

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header and Navigation (formerly SettingsNavbar) */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Setting</h1>
        <nav className="border-b border-gray-200 pb-4">
          <ul className="flex space-x-6">
            {navTabs.map(tab => (
              <li key={tab.key}>
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center space-x-2 pb-3 px-2 sm:px-4 text-sm font-medium transition-colors duration-200 border-b-2 -mb-2 focus:outline-none ${
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
        {activeTab === 'company' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Company</h2>
            <CompanyProfileForm />
          </div>
        )}
        {activeTab === 'founding' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile</h2>
            <OrganizationDetailsForm />
          </div>
        )}
        {activeTab === 'social' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Social Links</h2>
            <EmployerSocialLinksForm />
          </div>
        )}
        {activeTab === 'contact' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Setting</h2>
            <EmployerContactInfoForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerSettingsMain;