import DashboardHeader from "../assets/component/general-component/DashboardHeader"
import EmployerSettingsMain from "../assets/component/general-component/EmployerSettingsMain"
import SideMenu from "../assets/component/general-component/SideMenu"

function EmployerSettings() {
  return (
    <>
    <DashboardHeader />
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full hidden lg:block lg:w-[20%] mb-4 lg:mb-0">
        <SideMenu />
      </div>
      <div className="w-full lg:w-[80%]">
        <EmployerSettingsMain />
      </div>

    </div>
    </>
  )
}

export default EmployerSettings