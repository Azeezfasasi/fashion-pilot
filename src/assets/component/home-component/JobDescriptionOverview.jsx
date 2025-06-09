import calendar from '../../images/calendar.svg';
import time from '../../images/time.svg';
import stack from '../../images/stack.svg';
import wallet from '../../images/wallet.svg';
import bluebriefcase from '../../images/bluebriefcase.svg';

function JobDescriptionOverview() {
  return (
    <div className="bg-white border border-[#e7f0fa] rounded-lg pt-8 pb-8 flex flex-col gap-6 items-center justify-start w-full max-w-3xl mx-auto px-2 sm:px-6 relative">
      <div className="flex flex-col gap-5 items-start justify-center w-full">
        <div className="text-gray-900 text-left font-semibold text-lg sm:text-xl w-full">Job Overview</div>
      </div>
      <div className="flex flex-wrap gap-4 items-stretch justify-start w-full">
        {/* Box 1 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 items-start justify-start bg-gray-50 rounded-md p-4">
          <div className="w-8 h-8">
            <img className="w-full h-full object-contain" src={calendar} alt="Calendar" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="text-gray-500 text-xs uppercase">Job Posted:</div>
            <div className="text-gray-900 text-sm font-medium">14 Jun, 2021</div>
          </div>
        </div>
        {/* Box 2 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 items-start justify-start bg-gray-50 rounded-md p-4">
          <div className="w-8 h-8">
            <img className="w-full h-full object-contain" src={time} alt="Time" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="text-gray-500 text-xs uppercase">Job Type:</div>
            <div className="text-gray-900 text-sm font-medium">Full Time</div>
          </div>
        </div>
        {/* Box 3 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 items-start justify-start bg-gray-50 rounded-md p-4">
          <div className="w-8 h-8">
            <img className="w-full h-full object-contain" src={stack} alt="Stack" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="text-gray-500 text-xs uppercase">Experience:</div>
            <div className="text-gray-900 text-sm font-medium">3+ Years</div>
          </div>
        </div>
        {/* Box 4 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 items-start justify-start bg-gray-50 rounded-md p-4">
          <div className="w-8 h-8">
            <img className="w-full h-full object-contain" src={wallet} alt="Wallet" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="text-gray-500 text-xs uppercase">Salary:</div>
            <div className="text-gray-900 text-sm font-medium">$100k - $120k</div>
          </div>
        </div>
        {/* Box 5 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 items-start justify-start bg-gray-50 rounded-md p-4">
          <div className="w-8 h-8">
            <img className="w-full h-full object-contain" src={bluebriefcase} alt="Briefcase" />
          </div>
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="text-gray-500 text-xs uppercase">Position:</div>
            <div className="text-gray-900 text-sm font-medium">Senior UX Designer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescriptionOverview;