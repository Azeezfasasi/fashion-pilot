import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context-api/user/UserContext';

const CloseIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const AddIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m0 0h-3m-3-3v3m0 0v3m0-3h3m0 0h-3M9 12h.01M15 12h.01M12 18h.01M12 6h.01M6 12h.01M18 12h.01M12 3v.01M12 21v.01M3 12h.01M21 12h.01" />
  </svg>
);

const EmployerSocialLinksForm = ({ onNext, onPrevious }) => {
  const { user, updateProfile, loading, error } = useContext(UserContext);
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'Facebook', url: '', label: 'Social Link 1' },
    { id: 2, platform: 'Twitter', url: '', label: 'Social Link 2' },
    { id: 3, platform: 'Instagram', url: '', label: 'Social Link 3' },
    { id: 4, platform: 'Youtube', url: '', label: 'Social Link 4' },
  ]);

  useEffect(() => {
    if (user && Array.isArray(user.socialLinks) && user.socialLinks.length > 0) {
      const platforms = ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'LinkedIn'];
      const links = user.socialLinks.map((url, idx) => {
        let platform = platforms.find(p => url.toLowerCase().includes(p.toLowerCase())) || '';
        return {
          id: Date.now() + idx,
          platform,
          url,
          label: `Social Link ${idx + 1}`,
        };
      });
      setSocialLinks(links);
    }
  }, [user]);

  const socialPlatforms = [
    { name: 'Facebook', icon: <i className='fa-brands fa-facebook text-gray-500'></i> },
    { name: 'Twitter', icon: <i className="fa-brands fa-twitter text-gray-500"></i> },
    { name: 'Instagram', icon: <i className="fa-brands fa-instagram text-gray-500"></i> },
    { name: 'Youtube', icon: <i className="fa-brands fa-youtube text-gray-500"></i> },
    { name: 'LinkedIn', icon: <i className="fa-brands fa-linkedin text-gray-500"></i> },
  ];

  const handleAddSocialLink = () => {
    setSocialLinks([
      ...socialLinks,
      { id: Date.now(), platform: '', url: '', label: `Social Link ${socialLinks.length + 1}` },
    ]);
  };

  const handleRemoveSocialLink = (id) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

  const handlePlatformChange = (id, newPlatform) => {
    setSocialLinks(
      socialLinks.map((link) =>
        link.id === id ? { ...link, platform: newPlatform } : link
      )
    );
  };

  const handleUrlChange = (id, newUrl) => {
    setSocialLinks(
      socialLinks.map((link) => (link.id === id ? { ...link, url: newUrl } : link))
    );
  };

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const linksToSave = socialLinks.map(link => link.url).filter(Boolean);
      const success = await updateProfile({ socialLinks: linksToSave });
      if (success && typeof onNext === 'function') {
        onNext();
      }
    }}>
      {error && <div className="text-red-600 text-sm">{error}</div>}
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6 flex justify-center items-start">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Social Links</h2>

        <div className="space-y-6">
          {socialLinks.map((link) => (
            <div key={link.id}>
              <label htmlFor={`social-platform-${link.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                {link.label}
              </label>
              <div className="flex items-center space-x-3">
                <div className="relative flex-grow">
                  <select
                    id={`social-platform-${link.id}`}
                    value={link.platform}
                    onChange={(e) => handlePlatformChange(link.id, e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  >
                    <option value="">Select...</option>
                    {socialPlatforms.map((platform) => (
                      <option key={platform.name} value={platform.name}>
                        {platform.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {socialPlatforms.find(p => p.name === link.platform)?.icon || <></>}
                  </div>
                </div>

                <input
                  type="text"
                  id={`social-url-${link.id}`}
                  value={link.url}
                  onChange={(e) => handleUrlChange(link.id, e.target.value)}
                  className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Profile link/url..."
                />

                <button
                  type="button"
                  onClick={() => handleRemoveSocialLink(link.id)}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Remove social link"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Social Link Button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleAddSocialLink}
            className="w-full flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-md border border-blue-200 transition-colors duration-200"
          >
            <AddIcon className="h-5 w-5" />
            <span>Add New Social Link</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-start">
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200 flex items-center space-x-2 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Previous</span>
          </button>
          <button
            type="submit"
            // onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200"
            disabled={loading}
          >
            <span>{loading ? 'Saving...' : 'Save & Next'}</span>
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default EmployerSocialLinksForm;
