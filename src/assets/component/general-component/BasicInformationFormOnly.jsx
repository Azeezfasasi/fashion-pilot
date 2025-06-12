import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context-api/user/UserContext';
import { API_BASE_URL } from '../../config/api';

const BasicInformationFormOnly = ({ onNext }) => {
  const { user, updateProfile, loading, error } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState('');
  const [profileUploading, setProfileUploading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [headline, setHeadline] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    if (user) {
      setProfileImage(user.profileImage || '');
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setHeadline(user.headline || '');
      setExperience(user.experience || '');
      setEducation(user.education || '');
      setWebsite(user.website || '');
    }
  }, [user]);

  // Upload profile image to backend/Cloudinary
  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    setProfileUploading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/users/upload-profile`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      setProfileImage(data.imageUrl);
    } catch (err) {
      console.log(err);
      alert('Image upload failed');
    } finally {
      setProfileUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const success = await updateProfile({
      profileImage,
      firstName,
      lastName,
      headline,
      experience,
      education,
      website,
    });
    console.log(success);
    if (success) {
      console.log('onNext:', onNext);
      if (onNext) onNext();
    }
  }
  
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen p-6 flex justify-center items-start">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 w-full">
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {/* Basic Information Section Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Basic Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Profile Picture Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
            <div className="relative w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-4">
              <input type="file" accept="image/*" onChange={handleProfileImageChange} className="absolute inset-0 opacity-0 cursor-pointer" disabled={profileUploading} />

              {profileUploading ? (
                <span className="text-blue-600">Uploading...</span>
              ) : profileImage ? (
                <img src={profileImage} alt="Profile" className="w-14 h-14 rounded-full object-cover mb-2" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a3 3 0 013 3v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h4"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0l-3-3m3 3l3-3"></path>
                </svg>
              )}

              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-blue-600">Browse photo</span> or drop here
              </p>
              <p className="text-xs text-gray-500">
                A photo larger than 400 pixels work best. Max photo size 5 MB.
              </p>
            </div>
          </div>

          {/* Basic Info Form Fields */}
          <div className="space-y-6 md:col-span-1">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter First name"
              />
            </div>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Last name"
              />
            </div>
            <div>
              <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">Tittle/headline</label>
              <input
                type="text"
                id="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., Senior Product Designer"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <select
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
                >
                  <option>Select...</option>
                  <option>0-1 Years</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Educations</label>
                <select
                  id="education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
                >
                  <option>Select...</option>
                  <option>High School</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="personalWebsite" className="block text-sm font-medium text-gray-700 mb-1">Personal Website</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </span>
                <input
                  type="url"
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Website url..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-8 flex justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200" disabled={loading}>
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInformationFormOnly;