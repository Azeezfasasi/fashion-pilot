import CandidateSettingsMain from "../assets/component/general-component/CandidateSettingsMain"
import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import SideMenu from "../assets/component/general-component/SideMenu"
import TopHeader from "../assets/component/home-component/TopHeader"

function CandidateSettings() {
  return (
    <>
    <TopHeader />
    <DashboardHeader />
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full hidden lg:block lg:w-[20%] mb-4 lg:mb-0">
        <SideMenu />
      </div>
      <div className="w-full lg:w-[80%]">
        <CandidateSettingsMain />
      </div>

    </div>
    </>
  )
}

export default CandidateSettings