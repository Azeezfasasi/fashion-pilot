import search from '../../images/search.svg'
import locationblue from '../../images/locationblue.svg'
import filter from '../../images/filter.svg'

function SearchFilter() {
  return (
    <>
      <div
        className="bg-white rounded-lg border-solid border-gray-100 border px-3 py-1 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-start relative mt-[20px]"
        style={{ boxShadow: "0px 8px 24px 0px rgba(0, 44, 109, 0.04)" }}
      >
        {/* Keyword search */}
        <div className="bg-[#ffffff] flex flex-row justify-start items-center gap-1 border border-solid border-gray-300 rounded-[5px] px-2.5 flex-1 h-12 relative min-w-0">
          <img className="w-6 h-6" src={search} />
          <input
            type="search"
            placeholder="Search by: Job tittle, Position, Keyword..."
            className="text-gray-400 text-left font-body-medium-400-font-family text-[16px] leading-[24px] font-[400] w-full h-full p-2.5 outline-none bg-transparent min-w-0"
          />
        </div>

        {/* Location search */}
        <div className="bg-[#ffffff] flex flex-row justify-start items-center gap-1 border border-solid border-gray-300 rounded-[5px] px-2.5 flex-1 h-12 relative min-w-0">
          <img className="w-6 h-6" src={locationblue} />
          <input
            type="search"
            placeholder="City, state or zip code"
            className="text-gray-400 text-left font-body-medium-400-font-family text-[16px] leading-[24px] font-[400] w-full h-full p-2.5 outline-none bg-transparent min-w-0"
          />
        </div>

        {/* Filter */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch sm:items-start justify-start shrink-0 relative w-full sm:w-auto">
          <div className="bg-[#f1f2f4] rounded pt-3 pr-6 pb-3 pl-6 flex flex-row gap-3 items-center justify-center shrink-0 relative w-full sm:w-auto">
            <div className="shrink-0 w-6 h-6 relative">
              <img
                className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                src={filter}
                alt="Filter Icon"
              />
            </div>
            <div className="text-gray-900 text-left font-button-button-font-family text-[16px] leading-[24px] font-[600] relative">
              Filters
            </div>
          </div>
          <button className="bg-[#0a65cc] rounded-[3px] pt-3 pr-6 pb-3 pl-6 flex flex-row gap-3 items-center justify-center shrink-0 relative w-full sm:w-auto mt-2 sm:mt-0">
            <div className="text-white text-left font-button-button-font-family text-[16px] leading-[24px] font-[600] relative">
              Find Job
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchFilter