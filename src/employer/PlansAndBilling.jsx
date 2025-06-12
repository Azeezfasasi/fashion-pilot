import ComingSoon from "../assets/component/general-component/ComingSoon"
import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import DashboardSummary from "../assets/component/general-component/DashboardSummary"
import RecentApplied from "../assets/component/general-component/RecentApplied"
import SideMenu from "../assets/component/general-component/SideMenu"

function PlansandBilling() {
  return (
    <>
    {/* <TopHeader /> */}
    <DashboardHeader />
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full hidden lg:block lg:w-[20%] mb-4 lg:mb-0">
        <SideMenu />
      </div>
      <div className="w-full lg:w-[80%]">
        <ComingSoon />
      </div>

    </div>
    </>
  )
}

export default PlansandBilling