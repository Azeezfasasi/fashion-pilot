import { Link } from "react-router-dom";
import arrowright from '../../images/arrowright.svg'

function JobCategoryComponent() {
  return (
    <>
    <div className="bg-white pt-[40px] pr-[30px] pb-[40px] pl-[30px] flex flex-col gap-[50px] items-start justify-start shrink-0 relative" style={{ boxShadow: "inset 0px -1px 0px 0px rgba(228, 229, 232, 1)" }}>
        {/* Title */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between shrink-0 w-full relative">
            <div className="text-[#18191c] text-justified font-heading-01-font-family text-[30px] md:text-[40px] leading-[48px] font-[500] relative">
                Popular category
            </div>
            <Link to="" className="rounded-[3px] border-solid border-primary-50 border pt-3 pr-6 pb-3 pl-6 flex flex-row gap-3 items-center justify-center shrink-0 relative">
                <div className="text-[#0a65cc] text-left font-button-button-font-family text-[14px] md:text-[16px] leading-[24px] font-[600] relative">
                View All
                </div>
                <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src={arrowright}
                />
            </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative mx-auto">
          <div className="flex flex-row flex-wrap gap-6 items-start justify-start w-full relative">
            <Link to="" className="bg-gray-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-center justify-start flex-1 relative border border-solid border-gray-200">
              <div className="bg-primary-50 rounded-lg p-[18px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  src="pen-nib-duotone-10.svg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-gray-900 text-left font-body-large-500-font-family text-body-large-500-font-size leading-body-large-500-line-height font-body-large-500-font-weight relative w-[180px]">
                  Graphics &amp; Design
                </div>
                <div className="text-gray-600 text-left font-body-small-400-font-family text-body-small-400-font-size leading-body-small-400-line-height font-body-small-400-font-weight relative w-[180px]">
                  357 Open position
                </div>
              </div>
            </Link>
            <Link to="" className="bg-gray-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-center justify-start flex-1 relative border border-solid border-gray-200">
              <div className="bg-primary-50 rounded-lg p-[18px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  src="pen-nib-duotone-10.svg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-gray-900 text-left font-body-large-500-font-family text-body-large-500-font-size leading-body-large-500-line-height font-body-large-500-font-weight relative w-[180px]">
                  Graphics &amp; Design
                </div>
                <div className="text-gray-600 text-left font-body-small-400-font-family text-body-small-400-font-size leading-body-small-400-line-height font-body-small-400-font-weight relative w-[180px]">
                  357 Open position
                </div>
              </div>
            </Link>
            <Link to="" className="bg-gray-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-center justify-start flex-1 relative border border-solid border-gray-200">
              <div className="bg-primary-50 rounded-lg p-[18px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  src="pen-nib-duotone-10.svg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-gray-900 text-left font-body-large-500-font-family text-body-large-500-font-size leading-body-large-500-line-height font-body-large-500-font-weight relative w-[180px]">
                  Graphics &amp; Design
                </div>
                <div className="text-gray-600 text-left font-body-small-400-font-family text-body-small-400-font-size leading-body-small-400-line-height font-body-small-400-font-weight relative w-[180px]">
                  357 Open position
                </div>
              </div>
            </Link>
            <Link to="" className="bg-gray-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-center justify-start flex-1 relative border border-solid border-gray-200">
              <div className="bg-primary-50 rounded-lg p-[18px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  src="pen-nib-duotone-10.svg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-gray-900 text-left font-body-large-500-font-family text-body-large-500-font-size leading-body-large-500-line-height font-body-large-500-font-weight relative w-[180px]">
                  Graphics &amp; Design
                </div>
                <div className="text-gray-600 text-left font-body-small-400-font-family text-body-small-400-font-size leading-body-small-400-line-height font-body-small-400-font-weight relative w-[180px]">
                  357 Open position
                </div>
              </div>
            </Link>
            <Link to="" className="bg-gray-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-center justify-start flex-1 relative border border-solid border-gray-200">
              <div className="bg-primary-50 rounded-lg p-[18px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  src="pen-nib-duotone-10.svg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-gray-900 text-left font-body-large-500-font-family text-body-large-500-font-size leading-body-large-500-line-height font-body-large-500-font-weight relative w-[180px]">
                  Graphics &amp; Design
                </div>
                <div className="text-gray-600 text-left font-body-small-400-font-family text-body-small-400-font-size leading-body-small-400-line-height font-body-small-400-font-weight relative w-[180px]">
                  357 Open position
                </div>
              </div>
            </Link>
            <Link to="" className="bg-gray-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-center justify-start flex-1 relative border border-solid border-gray-200">
              <div className="bg-primary-50 rounded-lg p-[18px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  src="pen-nib-duotone-10.svg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-gray-900 text-left font-body-large-500-font-family text-body-large-500-font-size leading-body-large-500-line-height font-body-large-500-font-weight relative w-[180px]">
                  Graphics &amp; Design
                </div>
                <div className="text-gray-600 text-left font-body-small-400-font-family text-body-small-400-font-size leading-body-small-400-line-height font-body-small-400-font-weight relative w-[180px]">
                  357 Open position
                </div>
              </div>
            </Link>


          </div>
        </div>
    </div>

    </>
  )
}

export default JobCategoryComponent