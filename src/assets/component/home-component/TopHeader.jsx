import { Link } from "react-router-dom"
import phonecall from '../../images/phonecall.svg'
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function TopHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 px-4 md:px-12 flex items-center justify-between border-b shadow-sm relative z-30">
      {/* Hamburger for mobile */}
      <div className="flex items-center lg:hidden">
        <button
          className="text-gray-700 focus:outline-none p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 h-full w-[60%] pl-6 lg:pl-0 max-w-xs lg:max-w-full bg-white shadow-lg z-40 transform transition-transform duration-300 lg:static lg:shadow-none lg:bg-transparent lg:w-auto lg:h-auto lg:flex lg:items-center lg:gap-6 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`} style={{ minHeight: menuOpen ? '100vh' : undefined }}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 w-full lg:w-auto pt-16 lg:pt-0">
          <Link to="/" className="py-3.5 flex items-center md:text-primary-500 text-gray-700 font-semibold hover:text-primary-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/joblist" className="py-3.5 flex items-center text-gray-600 hover:text-primary-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Find Job
          </Link>
          <Link to="/findemployers" className="py-3.5 flex items-center text-gray-600 hover:text-primary-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Employers
          </Link>
          <Link to="/pricingplan" className="py-3.5 flex items-center text-gray-600 hover:text-primary-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Pricing Plans
          </Link>
          <Link to="/customersupport" className="py-3.5 flex items-center text-gray-600 hover:text-primary-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Customer Supports
          </Link>
        </div>
        {/* Close button for mobile menu */}
        <button
          className="absolute top-4 right-4 lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
      </nav>

      {/* Phone number and Language */}
      <div className="hidden md:flex flex-row gap-6 items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-6 h-6">
            <img
              className="w-full h-full object-contain"
              src={phonecall}
              alt="Phone"
            />
          </div>
          <div className="text-gray-900 font-medium">+1-202-555-0178</div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-4 object-cover"
            src="image-10.png"
            alt="Language"
          />
          <select className="border-none bg-transparent text-gray-600 font-medium focus:outline-none">
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default TopHeader