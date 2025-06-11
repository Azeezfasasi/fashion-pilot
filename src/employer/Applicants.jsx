import ApplicantsMain from "../assets/component/general-component/ApplicantsMain"
import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import EmployerSettingsMain from "../assets/component/general-component/EmployerSettingsMain"
import SideMenu from "../assets/component/general-component/SideMenu"
import TopHeader from "../assets/component/home-component/TopHeader"

function Applicants() {
  return (
    <>
    <TopHeader />
    <DashboardHeader />
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[20%] mb-4 lg:mb-0">
        <SideMenu />
      </div>
      <div className="w-full lg:w-[80%]">
        <ApplicantsMain />
      </div>

    </div>
    </>
  )
}

export default Applicants;