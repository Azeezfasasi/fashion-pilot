import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from '../../images/search.svg';
import locationimg from '../../images/location.svg';

function HeroSearch() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to joblist with query params
    const params = new URLSearchParams();
    if (keyword) params.append('keyword', keyword);
    if (location) params.append('location', location);
    navigate(`/app/joblist?${params.toString()}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Job keyword search */}
        <div className="flex flex-row items-center bg-gray-scale-white rounded-[5px] p-2.5 w-full sm:w-[230px] h-12 sm:h-14 border border-gray-200">
          <img className="w-6 h-6" src={search} />
          <input
            type="search"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            className="w-full h-full bg-transparent outline-none pl-2 sm:pl-10 pr-2.5"
            placeholder="Job title, Keyword..."
          />
        </div>
        {/* Location search */}
        <div className="flex flex-row items-center bg-gray-scale-white rounded-[5px] p-2.5 w-full sm:w-[230px] h-12 sm:h-14 border border-gray-200">
          <img className="w-6 h-6" src={locationimg} />
          <input
            type="search"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full h-full bg-transparent outline-none pl-2 sm:pl-10 pr-2.5"
            placeholder="Location"
          />
        </div>
        <button
          type='submit'
          className="bg-[#0a65cc] rounded py-2 lg:p-0 px-6 flex flex-row gap-3 items-center justify-center w-full sm:w-[25%] mt-2 sm:mt-0 cursor-pointer"
        >
          <div className="text-white text-left font-button-button-font-family text-[16px] leading-[24px] font-[600] relative">
            Find Job
          </div>
        </button>
      </form>
    </>
  );
}

export default HeroSearch;