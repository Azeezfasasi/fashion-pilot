import briefcase from '../../images/briefcase.svg'
import company from '../../images/company.svg'
import candidates from '../../images/candidates.svg'

function ButtomHero() {
  return (
    <div className="w-[95%] mx-auto border border-solid border-gray-200 bg-[#ffffff] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-10 py-4">
      {/* Card 1 */}
      <div className="rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="bg-primary-50 rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={briefcase} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">1,75,324</div>
          <div className="text-gray-500 text-base">Live Job</div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-white rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="bg-[#0a65cc] rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={company} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">1,75,324</div>
          <div className="text-gray-500 text-base">Company</div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-white rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={candidates} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">1,75,324</div>
          <div className="text-gray-500 text-base">Company</div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-gray-white rounded-lg p-5 flex flex-row gap-5 items-center bg-white shadow-sm border border-solid border-gray-200 w-full sm:w-auto max-w-xs sm:max-w-none justify-center sm:justify-start">
        <div className="rounded p-4 flex items-center justify-center">
          <img className="w-10 h-10" src={briefcase} />
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="text-gray-900 font-semibold text-xl sm:text-2xl w-auto">1,75,324</div>
          <div className="text-gray-500 text-base">New Job</div>
        </div>
      </div>
    </div>
  )
}

export default ButtomHero