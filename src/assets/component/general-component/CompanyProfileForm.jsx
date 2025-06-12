import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context-api/user/UserContext';
import { API_BASE_URL } from '../../config/api';

const CompanyProfileForm = ({ onNext }) => {
  const { user, updateProfile, loading, error } = useContext(UserContext);
  const [logoUrl, setLogoUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [logoUploading, setLogoUploading] = useState(false);
  const [bannerUploading, setBannerUploading] = useState(false);

  // State for text inputs
  const [company, setCompany] = useState('');
  const [aboutUs, setAboutUs] = useState('');

  useEffect(() => {
    if (user) {
      setCompany(user.company || '');
      setAboutUs(user.aboutUs || '');
      setLogoUrl(user.logo || '');
      setBannerUrl(user.bannerImage || '');
    }
  }, [user]);

  // Upload file to backend (Cloudinary) and get URL
  const uploadImage = async (file, type) => {
    const formData = new FormData();
    formData.append(type, file);
    const endpoint = type === 'logo'
      ? `${API_BASE_URL}/users/upload-logo`
      : `${API_BASE_URL}/users/upload-banner`;
    try {
      type === 'logo' ? setLogoUploading(true) : setBannerUploading(true);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (type === 'logo') setLogoUrl(data.logoUrl);
      else setBannerUrl(data.bannerUrl);
    } catch (err) {
      console.log(err)
      alert('Image upload failed');
    } finally {
      type === 'logo' ? setLogoUploading(false) : setBannerUploading(false);
    }
  };

  // Handler for file input changes
  const handleFileChange = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      uploadImage(e.target.files[0], type);
    }
  };

  // Handler for text input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'company') setCompany(value);
    else if (id === 'aboutUs') setAboutUs(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateProfile({
      company,
      aboutUs,
      logo: logoUrl,
      bannerImage: bannerUrl,
    });
    if (success && onNext) onNext();
  };

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6 flex justify-center items-start">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {/* Logo & Banner Image Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Logo & Banner Image</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {/* Upload Logo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Logo</label>
              <div className="relative w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-4">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'logo')}
                  disabled={logoUploading}
                />
                {logoUploading ? (
                  <span className="text-blue-600">Uploading...</span>
                ) : logoUrl ? (
                  <img src={logoUrl} alt="Logo" className="h-16 mb-2 object-contain" />
                ) : (
                  <i className="fa-solid fa-cloud-arrow-up text-[28px] text-blue-600"></i>
                )}
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-blue-600">Browse photo</span> or drop here
                </p>
                <p className="text-xs text-gray-500">
                  A photo larger than 400 pixels works best. Max photo size 5 MB.
                </p>
                {logoUrl && <p className="text-xs text-green-600 mt-1">Logo uploaded!</p>}
              </div>
            </div>

            {/* Banner Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
              <div className="relative w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-4">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'banner')}
                  disabled={bannerUploading}
                />
                {bannerUploading ? (
                  <span className="text-blue-600">Uploading...</span>
                ) : bannerUrl ? (
                  <img src={bannerUrl} alt="Banner" className="h-16 mb-2 object-contain" />
                ) : (
                  <i className="fa-solid fa-cloud-arrow-up text-[28px] text-blue-600"></i>
                )}
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-blue-600">Browse photo</span> or drop here
                </p>
                <p className="text-xs text-gray-500">
                  Banner images optimal dimension 1520x400. Supported format JPEG, PNG. Max photo size 5 MB.
                </p>
                {bannerUrl && <p className="text-xs text-green-600 mt-1">Banner uploaded!</p>}
              </div>
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-6">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your company name"
            />
          </div>

          {/* About Us Section */}
          <div className="mb-6">
            <label htmlFor="aboutUs" className="block text-sm font-medium text-gray-700 mb-1">About Us</label>
            <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden focus-within:ring-blue-500 focus-within:border-blue-500">
              <textarea
                id="aboutUs"
                rows={6}
                value={aboutUs}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none resize-y"
                placeholder="Write down about your company here. Let the candidate know who we are..."
              ></textarea>
            </div>
          </div>

          {/* Save & Next Button */}
          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200 flex items-center space-x-2"
              disabled={loading}
            >
              <span>{loading ? 'Saving...' : 'Save & Next'}</span>
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

export default CompanyProfileForm;