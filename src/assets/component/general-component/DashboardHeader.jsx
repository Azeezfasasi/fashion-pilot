import { Link } from 'react-router-dom'
import briefcase from '../../images/briefcase.svg'
import search from '../../images/search.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import DashProfileHeaderDropdown from './DashProfileHeaderDropdown'
import SideMenu from './SideMenu'

function DashboardHeader() {

  return (
  <>
    <div className="w-full bg-white px-4 md:px-12 py-2 flex items-center justify-between shadow-md relative z-30">
      {/* Logo and Search */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={briefcase} alt="Jobpilot Logo" />
          <div className="text-gray-900 font-semibold text-2xl font-['Inter-SemiBold',_sans-serif]">Jobpilot</div>
        </div>
        <div className="hidden md:block bg-gray-white rounded-[5px] border border-gray-100 w-[350px] lg:w-[500px] xl:w-[668px] h-[44px]">
          <div className="flex items-center gap-3 h-full px-3">
            <img className="w-6 h-6" src={search} alt="Search" />
            <input type="search" placeholder='Job title, keyword, company' className="text-gray-400 bg-transparent w-full outline-none p-2.5" />
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:block'>
        <DashProfileHeaderDropdown />
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center justify-start gap-3">
        <DashProfileHeaderDropdown />
        <SideMenu />
      </div>
    </div>
  </>
  )
}

export default DashboardHeader
