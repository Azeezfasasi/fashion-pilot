import { Link } from 'react-router-dom'
import whitebriefcase from '../../images/whitebriefcase.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import youtube from '../../images/youtube.svg'
import twitter from '../../images/twitter.svg'
function Footer() {
  return (
    <>
    <div className="bg-black h-fit border flex flex-col gap-0 items-center justify-start shrink-0 relative">
        {/* Footer top */}
        <div className="w-full relative px-4 sm:px-8 md:px-12 lg:px-[30px] py-8 md:py-[30px] flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 items-start justify-center">
            {/* col 1 */}
            <div className="flex flex-col gap-6 items-start justify-start w-full md:w-auto max-w-xs">
                <div className="flex flex-row gap-2 items-center justify-start">
                    <img className="w-10 h-10" src={whitebriefcase} />
                    <div className="text-white font-semibold text-2xl font-['Inter-SemiBold',_sans-serif]">Jobpilot</div>
                </div>
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex flex-row gap-1 items-center">
                        <div className="text-gray-600 text-[18px]">Call now:</div>
                        <div className="text-white text-[18px]">(+234) 555-0115</div>
                    </div>
                    <div className="text-gray-500 text-[14px] w-full max-w-xs">
                        6391 Elgin St. Celina, Delaware 10299, New York, United States of America
                    </div>
                </div>
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-4 items-start w-full md:w-auto max-w-xs">
                <div className="text-white text-[20px] font-[500]">Quick Link</div>
                <div className="pt-1.5 pb-1.5 flex flex-col gap-3 w-full">
                    <Link to="" className="text-[#9199a3] text-[16px]">About</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Contact</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Pricing</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Blog</Link>
                </div>
            </div>
            {/* col 3 */}
            <div className="flex flex-col gap-4 items-start w-full md:w-auto max-w-xs">
                <div className="text-white text-[20px] font-[500]">Candidate</div>
                <div className="pt-1.5 pb-1.5 flex flex-col gap-3 w-full">
                    <Link to="" className="text-[#9199a3] text-[16px]">Browse Jobs</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Browse Employers</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Candidate Dashboard</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Saved Jobs</Link>
                </div>
            </div>
            {/* col 4 */}
            <div className="flex flex-col gap-4 items-start w-full md:w-auto max-w-xs">
                <div className="text-white text-[20px] font-[500]">Employer</div>
                <div className="pt-1.5 pb-1.5 flex flex-col gap-3 w-full">
                    <Link to="" className="text-[#9199a3] text-[16px]">Post a Job</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Browse Candidates</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Employers Dashboard</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Applications</Link>
                </div>
            </div>
            {/* col 5 */}
            <div className="flex flex-col gap-4 items-start w-full md:w-auto max-w-xs">
                <div className="text-white text-[20px] font-[500]">Support</div>
                <div className="pt-1.5 pb-1.5 flex flex-col gap-3 w-full">
                    <Link to="" className="text-[#9199a3] text-[16px]">FAQs</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Privacy Policy</Link>
                    <Link to="" className="text-[#9199a3] text-[16px]">Terms & Conditions</Link>
                </div>
            </div>
        </div>
        {/* Footer bottom */}
        <div className="bg-black w-full pt-6 px-4 md:px-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800">
            <div className="text-gray-500 text-[14px]">@ 2021 Jobpilot - Job Portal. All rights Reserved</div>
            <div className="flex flex-row gap-5 items-center">
                <Link to=""><img className="w-5 h-5" src={facebook} /></Link>
                <Link to=""><img className="w-5 h-5" src={instagram} /></Link>
                <Link to=""><img className="w-5 h-5" src={youtube} /></Link>
                <Link to=""><img className="w-5 h-5" src={twitter} /></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer