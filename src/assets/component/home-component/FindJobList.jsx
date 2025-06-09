import { Link } from "react-router-dom";
import employeelogo from '../../images/employeelogo.svg'
import location from '../../images/location.svg'
import bookmark from '../../images/bookmark.svg'

function FindJobsList() {
  return (
    <>
    <div className="bg-white pt-[40px] pr-[30px] pb-[40px] pl-[30px] flex flex-col gap-[50px] items-start justify-start shrink-0 relative" style={{ boxShadow: "inset 0px -1px 0px 0px rgba(228, 229, 232, 1)" }}>

        {/* Featured Jobs */}
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center relative mx-auto">
            {/* box 1 */}
            <Link to="/jobdetails" className="rounded-lg border-solid border-gray-100 border shadow-md p-6 flex flex-col gap-5 items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-[#18191c] text-left font-body-large-500-font-family text-[18px]leading-[28px] font-[500] relative self-stretch">
                    Techical Support Specialist
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <div className="bg-[#e7f6ea] rounded-[3px] pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                            <div className="text-[#0ba02c] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-3 font-semibold uppercase relative">
                            Part-time
                            </div>
                        </div>
                        <div className="text-[#767f8c] text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative">
                            Salary: $20,000 - $25,000
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative">
                    <div className="bg-[#edeff5] rounded p-3 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={employeelogo}
                    />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                    <div className="text-[#18191c] text-left font-body-medium-500-font-family text-[16px] leading-[24px] font-[500] relative self-stretch">
                        Google Inc.
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start self-stretch relative">
                        <div className="w-[18px] h-[18px] relative">
                            <img
                                className="w-[100%] h-[100%]"
                                src={location}
                            />
                        </div>
                        <div className="text-gray-500 text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative flex-1">
                        Dhaka, Bangladesh
                        </div>
                    </div>
                    </div>
                    <div className="shrink-0 w-6 h-6 relative">
                        <img
                            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src={bookmark}
                        />
                    </div>
                </div>
            </Link>

            {/* box 2 */}
            <Link to="/jobdetails" className="rounded-lg border-solid border-gray-100 border shadow-md p-6 flex flex-col gap-5 items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-[#18191c] text-left font-body-large-500-font-family text-[18px]leading-[28px] font-[500] relative self-stretch">
                    Techical Support Specialist
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <div className="bg-[#e7f6ea] rounded-[3px] pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                            <div className="text-[#0ba02c] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-3 font-semibold uppercase relative">
                            Part-time
                            </div>
                        </div>
                        <div className="text-[#767f8c] text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative">
                            Salary: $20,000 - $25,000
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative">
                    <div className="bg-[#edeff5] rounded p-3 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={employeelogo}
                    />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                    <div className="text-[#18191c] text-left font-body-medium-500-font-family text-[16px] leading-[24px] font-[500] relative self-stretch">
                        Google Inc.
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start self-stretch relative">
                        <div className="w-[18px] h-[18px] relative">
                            <img
                                className="w-[100%] h-[100%]"
                                src={location}
                            />
                        </div>
                        <div className="text-gray-500 text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative flex-1">
                        Dhaka, Bangladesh
                        </div>
                    </div>
                    </div>
                    <div className="shrink-0 w-6 h-6 relative">
                        <img
                            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src={bookmark}
                        />
                    </div>
                </div>
            </Link>

            {/* box 3 */}
            <Link to="/jobdetails" className="rounded-lg border-solid border-gray-100 border shadow-md p-6 flex flex-col gap-5 items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-[#18191c] text-left font-body-large-500-font-family text-[18px]leading-[28px] font-[500] relative self-stretch">
                    Techical Support Specialist
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <div className="bg-[#e7f6ea] rounded-[3px] pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                            <div className="text-[#0ba02c] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-3 font-semibold uppercase relative">
                            Part-time
                            </div>
                        </div>
                        <div className="text-[#767f8c] text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative">
                            Salary: $20,000 - $25,000
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative">
                    <div className="bg-[#edeff5] rounded p-3 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={employeelogo}
                    />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                    <div className="text-[#18191c] text-left font-body-medium-500-font-family text-[16px] leading-[24px] font-[500] relative self-stretch">
                        Google Inc.
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start self-stretch relative">
                        <div className="w-[18px] h-[18px] relative">
                            <img
                                className="w-[100%] h-[100%]"
                                src={location}
                            />
                        </div>
                        <div className="text-gray-500 text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative flex-1">
                        Dhaka, Bangladesh
                        </div>
                    </div>
                    </div>
                    <div className="shrink-0 w-6 h-6 relative">
                        <img
                            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src={bookmark}
                        />
                    </div>
                </div>
            </Link>

            {/* Box 4 */}
            <Link to="/jobdetails" className="rounded-lg border-solid border-gray-100 border shadow-md p-6 flex flex-col gap-5 items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-[#18191c] text-left font-body-large-500-font-family text-[18px]leading-[28px] font-[500] relative self-stretch">
                    Techical Support Specialist
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <div className="bg-[#e7f6ea] rounded-[3px] pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                            <div className="text-[#0ba02c] text-left font-['Inter-SemiBold',_sans-serif] text-xs leading-3 font-semibold uppercase relative">
                            Part-time
                            </div>
                        </div>
                        <div className="text-[#767f8c] text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative">
                            Salary: $20,000 - $25,000
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative">
                    <div className="bg-[#edeff5] rounded p-3 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                    <img
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={employeelogo}
                    />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                    <div className="text-[#18191c] text-left font-body-medium-500-font-family text-[16px] leading-[24px] font-[500] relative self-stretch">
                        Google Inc.
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start self-stretch relative">
                        <div className="w-[18px] h-[18px] relative">
                            <img
                                className="w-[100%] h-[100%]"
                                src={location}
                            />
                        </div>
                        <div className="text-gray-500 text-left font-body-small-400-font-family text-[14px] leading-[20px] font-[400] relative flex-1">
                        Dhaka, Bangladesh
                        </div>
                    </div>
                    </div>
                    <div className="shrink-0 w-6 h-6 relative">
                        <img
                            className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src={bookmark}
                        />
                    </div>
                </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default FindJobsList