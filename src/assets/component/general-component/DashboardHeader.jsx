import { Link } from 'react-router-dom'
import briefcase from '../../images/briefcase.svg'
// import search from '../../images/search.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import DashProfileHeaderDropdown from './DashProfileHeaderDropdown'
import SideMenu from './SideMenu'

function DashboardHeader() {

  return (
  <>
    <div className="w-full bg-white px-4 md:px-12 py-1 flex items-center justify-between shadow-md rlative z-10 sticky top-0">
      {/* Logo and Search */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-10 h-10" src={briefcase} alt="Jobpilot Logo" />
          <div className="text-gray-900 font-semibold text-2xl font-['Inter-SemiBold',_sans-serif]">Jobpilot</div>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className='hidden lg:block'>
        <DashProfileHeaderDropdown />
      </div>

      {/* Hamburger for mobile */}
      <div className="lg:hidden flex items-center justify-start gap-3">
        <DashProfileHeaderDropdown />
        <SideMenu />
      </div>
    </div>
  </>
  )
}

export default DashboardHeader
