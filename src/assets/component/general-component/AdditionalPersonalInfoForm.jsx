import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context-api/user/UserContext';

const AdditionalPersonalInfoForm = ({ onNext }) => {
  const { user, updateProfile, loading, error } = useContext(UserContext);
  const [nationality, setNationality] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [biography, setBiography] = useState('');

  useEffect(() => {
    if (user) {
      setNationality(user.nationality || null);
      setDateOfBirth(user.dateOfBirth || '');
      setGender(user.gender || '');
      setMaritalStatus(user.maritalStatus || '');
      setEducation(user.education || '');
      setExperience(user.experience || '');
      setBiography(user.biography || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
     const success = await updateProfile({
      nationality,
      dateOfBirth,
      gender,
      maritalStatus,
      experience,
      education,
      biography,
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
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Additional Personal Information</h2> {/* Added a title for clarity */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
            <select
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
            >
              <option value="">Select...</option>
              <option value="nigerian">Nigerian</option>
              <option value="american">American</option>
              <option value="british">British</option>
              {/* Add more nationalities as needed */}
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <div className="relative mt-1">
              <input
                type="date" // Using text to allow dd/mm/yyyy format, could use "date" type for native picker
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="dd/mm/yyyy"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Marital Status */}
          <div>
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
            <select
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
            >
              <option value="">Select...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          {/* Education */}
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Education</label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
            >
              <option value="">Select...</option>
              <option>High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white pr-8"
            >
              <option value="">Select...</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
        </div>

        {/* Biography Section */}
        <div className="mt-8">
          <label htmlFor="biography" className="block text-sm font-medium text-gray-700 mb-1">Biography</label>
          <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden focus-within:ring-blue-500 focus-within:border-blue-500">
            <textarea
              id="biography"
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              className="block w-full px-3 pt-2 pb-20 text-sm text-gray-900 placeholder-gray-400 focus:outline-none resize-y"
              placeholder="Write down your biography here. Let the employers know who you are..."
            ></textarea>            
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-8 flex justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200" disabled={loading}>
            Save & Cotinute
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalPersonalInfoForm;