import CandidateSettingsMain from "../assets/component/general-component/CandidateSettingsMain"
import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import SideMenu from "../assets/component/general-component/SideMenu"
import TopHeader from "../assets/component/home-component/TopHeader"

function CandidateSettings() {
  return (
    <>
    <TopHeader />
    <DashboardHeader />
    <div className="w-full flex flex-row">
      <div className="w-[20%]">
        <SideMenu />
      </div>
      <div className="w-[80%]">
        <CandidateSettingsMain />
      </div>

    </div>
    </>
  )
}

export default CandidateSettings