import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import search from '../../images/search.svg'
import locationblue from '../../images/locationblue.svg'

function SearchFilter() {
  const locationObj = useLocation();
  const navigate = useNavigate();

  // Read params from URL
  const params = new URLSearchParams(locationObj.search);
  const initialKeyword = params.get('keyword') || '';
  const initialLocation = params.get('location') || '';

  const [keyword, setKeyword] = useState(initialKeyword);
  const [location, setLocation] = useState(initialLocation);

  // Keep state in sync with URL (when navigating back/forward)
  useEffect(() => {
    setKeyword(initialKeyword);
    setLocation(initialLocation);
    // eslint-disable-next-line
  }, [locationObj.search]);

  const handleFilter = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.append('keyword', keyword);
    if (location) params.append('location', location);
    navigate(`/app/joblist?${params.toString()}`);
  };

  return (
    <>
      <form onSubmit={handleFilter}
        className="bg-white rounded-lg border-solid border-gray-100 border px-3 py-1 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-start relative mt-[20px]"
        style={{ boxShadow: "0px 8px 24px 0px rgba(0, 44, 109, 0.04)" }}
      >
        {/* Keyword search */}
        <div className="bg-[#ffffff] flex flex-row justify-start items-center gap-1 border border-solid border-gray-300 rounded-[5px] px-2.5 flex-1 h-12 relative min-w-0">
          <img className="w-6 h-6" src={search} />
          <input
            type="search"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Search by: Job tittle, Position, Keyword..."
            className="text-gray-400 text-left font-body-medium-400-font-family text-[16px] leading-[24px] font-[400] w-full h-full p-2.5 outline-none bg-transparent min-w-0"
          />
        </div>

        {/* Location search */}
        <div className="bg-[#ffffff] flex flex-row justify-start items-center gap-1 border border-solid border-gray-300 rounded-[5px] px-2.5 flex-1 h-12 relative min-w-0">
          <img className="w-6 h-6" src={locationblue} />
          <input
            type="search"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="City, state or zip code"
            className="text-gray-400 text-left font-body-medium-400-font-family text-[16px] leading-[24px] font-[400] w-full h-full p-2.5 outline-none bg-transparent min-w-0"
          />
        </div>

        {/* Filter */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch sm:items-start justify-start shrink-0 relative w-full sm:w-auto">
          <button type='submit' className="bg-[#0a65cc] rounded-[3px] pt-3 pr-6 pb-3 pl-6 flex flex-row gap-3 items-center justify-center shrink-0 relative w-full sm:w-auto mt-2 sm:mt-0">
            <div className="text-white text-left font-button-button-font-family text-[16px] leading-[24px] font-[600] relative">
              Find Job
            </div>
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchFilter;