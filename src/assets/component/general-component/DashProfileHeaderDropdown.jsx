import React, { useState, useRef, useEffect, useContext } from 'react';
import account from '../../images/account.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context-api/user/UserContext';

function DashProfileHeaderDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { logout, isEmployer, isCandidate, user } = useContext(UserContext);

    useEffect(() => {
    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        }
    }
    if (dropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [dropdownOpen]);

    const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    };

  return (
    <>
    <div className="flex gap-3 items-center">
        <div className="relative" ref={dropdownRef}>
            <button
            className="rounded border-gray-100 py-0 md:py-3 px-0 md:px-6 flex items-center gap-2 hover:bg-primary-50 transition focus:outline-none cursor-pointer"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            >
                <img
                className='w-[50px] h-[50px] rounded-full object-cover border border-gray-200'
                src={
                    isEmployer && user.logo
                    ? user.logo
                    : isCandidate && user.profileImage
                    ? user.profileImage
                    : account
                }
                alt="Account"
                />
                <div>
                {isEmployer && <div className='font-semibold'>{user.company}</div>}
                {isCandidate && <div className='font-semibold'>{user.firstName} {user.lastName}</div>}
            </div>
            </button>
            {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                {isEmployer && <Link to="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Post a Job</Link>}
                <Link to="/app/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                {isCandidate && <Link to="/app/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Favorite Jobs</Link>}
                {isCandidate && <Link to="/candidate/candidatesettings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>}
                {isEmployer && <Link to="/employer/employersettings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>}
                <button onClick={handleLogout}  className="w-full text-left text-red-600 px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</button>
            </div>
            )}
        </div>
        {isEmployer && <Link to="/app/postjob" className="hidden bg-[#0A65CC] rounded py-3 px-6 md:flex items-center hover:bg-primary-600 transition border">
            <div className="text-white font-medium">Post a Job</div>
        </Link>
        }
        {isCandidate && <Link to="/app/joblist" className="hidden bg-[#0A65CC] rounded py-3 px-6 md:flex items-center hover:bg-primary-600 transition border">
            <div className="text-white font-medium">Find Jobs</div>
        </Link>
        }
    </div>
    </>
  )
}

export default DashProfileHeaderDropdown