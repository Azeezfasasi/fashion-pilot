import { Link } from 'react-router-dom'
import briefcase from '../../images/briefcase.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useContext } from 'react';
import { UserContext } from '../../context-api/user/UserContext';
import account from '../../images/account.png';

function MainHeader() {
  const { user } = useContext(UserContext);

  return (
  <>
    <div className="w-full bg-white px-4 md:px-12 py-2 flex items-center justify-between shadow-md relative z-10">
      {/* Logo */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-10 h-10" src={briefcase} alt="Jobpilot Logo" />
          <div className="text-gray-900 font-semibold text-2xl font-['Inter-SemiBold',_sans-serif]">Jobpilot</div>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-3 items-center">
        {!user ? (
            <Link to="/login" className="rounded border border-primary-100 py-3 px-6 flex items-center hover:bg-primary-50 transition">
              <div className="text-primary-500 font-medium">Sign in</div>
            </Link>
          ) : (
            <Link to="/app/dashboard" className="flex items-center gap-2">
              <img
                src={user.profileImage || account}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <span className="text-gray-800 font-medium hidden md:inline">{user.firstName || user.company}</span>
            </Link>
          )}
        <Link to="/postjob" className="bg-[#0A65CC] rounded py-3 px-6 flex items-center hover:bg-primary-600 transition border">
          <div className="text-white font-medium">Post a Job</div>
        </Link>
      </div>

      <div className="md:hidden flex gap-3 items-center">
        {!user ? (
            <Link to="/login" className="rounded border border-primary-100 py-3 px-6 flex items-center hover:bg-primary-50 transition">
              <div className="text-primary-500 font-medium">Sign in</div>
            </Link>
          ) : (
            <Link to="/app/dashboard" className="flex items-center gap-2">
              <img
                src={user.profileImage || account}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <span className="text-gray-800 font-medium hidden md:inline">{user.firstName || user.company}</span>
            </Link>
          )}
      </div>
    </div>
  </>
  )
}

export default MainHeader
