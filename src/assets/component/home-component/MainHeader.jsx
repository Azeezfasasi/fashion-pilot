import { Link } from 'react-router-dom'
import briefcase from '../../images/briefcase.svg'
import search from '../../images/search.svg'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import { FaBars, FaTimes } from 'react-icons/fa'
import { useContext } from 'react';
import { UserContext } from '../../context-api/user/UserContext';
import account from '../../images/account.png';

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
  <>
    <div className="w-full bg-white px-4 md:px-12 py-2 flex items-center justify-between shadow-md relative z-30">
      {/* Logo and Search */}
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

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button className="text-gray-700 p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <nav className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ minHeight: menuOpen ? '100vh' : undefined }}>
        <button className="absolute top-4 right-4 text-gray-700" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col gap-6 pt-20 px-6">
          {/* <Link to="/login" className="rounded border border-primary-100 py-3 px-6 flex items-center text-primary-500 font-medium" onClick={() => setMenuOpen(false)}>
            Sign in
          </Link> */}

          {!user ? (
            <Link to="/login" className="rounded border border-primary-100 py-3 px-6 flex items-center hover:bg-primary-50 transition">
              <div className="text-primary-500 font-medium">Sign in</div>
            </Link>
          ) : (
            <Link to="/app/profile" className="flex items-center gap-2">
              <img
                src={user.profileImage || '/default-avatar.png'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <span className="text-gray-800 font-medium hidden md:inline">{user.firstName || user.company}</span>
            </Link>
          )}

          <Link to="/postjob" className="bg-primary-500 rounded py-3 px-6 flex items-center text-white font-medium" onClick={() => setMenuOpen(false)}>
            Post a Job
          </Link>
          <div className="bg-gray-white rounded-[5px] border border-gray-100 w-full h-[44px]">
            <div className="flex items-center gap-3 h-full px-3">
              <img className="w-6 h-6" src={search} alt="Search" />
              <input type="search" placeholder='Job title, keyword, company' className="text-gray-400 bg-transparent w-full outline-none p-2.5" />
            </div>
          </div>
        </div>
      </nav>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}
    </div>
  </>
  )
}

export default MainHeader
