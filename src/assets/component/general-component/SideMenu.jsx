import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import { FaBars } from 'react-icons/fa';
import CloseIcon from '@rsuite/icons/Close';
import { UserContext } from '../../context-api/user/UserContext';

const navItems = [
  { key: '/app/dashboard', label: 'Overview', icon: <DashboardIcon />, roles: ['candidate', 'employer'] },
  { key: '/candidate/appliedjobs', label: 'Applied Jobs', icon: <GroupIcon />, roles: ['candidate'] },
  { key: '/candidate/favoritejobs', label: 'Favorite Jobs', icon: <GroupIcon />, roles: ['candidate'] },
  { key: '/app/dashboard', label: 'Profile', icon: <GroupIcon />, roles: ['candidate', 'employer'] },
  { key: '/candidate/candidatesettings', label: 'Candidate Settings', icon: <GroupIcon />, roles: ['candidate'] },
  { key: '/employer/employersettings', label: 'Employer Settings', icon: <GroupIcon />, roles: ['employer'] },
  { key: '/post-job', label: 'Post a Job', icon: <GroupIcon />, roles: ['employer'] },
  { key: '/plans-billings', label: 'Plans & Billings', icon: <GroupIcon />, roles: ['employer'] },
  // { key: '/logout', label: 'Logout', icon: <GroupIcon />, roles: ['candidate', 'employer'] },
];

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);
  const userRole = user?.role?.toLowerCase();

  const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

  return (
    <>
      <button className="lg:hidden z-50 bg-white p-2 rounded shadow" onClick={() => setOpen(true)} aria-label="Open menu">
        <FaBars size={24} />
      </button>
      
      <div className={`fixed top-0 left-0 h-full z-50 bg-white shadow-lg transition-transform duration-300 md:static md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} md:block`} style={{ width: 270 }}>
        <Sidenav style={{ height: '100%' }}>
          {/* Mobile close icon */}
          <button className="block lg:hidden bg-red-600 text-white pt-1 pb-2 px-2 rounded shadow absolute top-1 right-2 font-bold" onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon size={20} />
          </button>
          <Sidenav.Body>
            <div className='font-bold text-gray-400 text-[20px] mt-3 text-left lg:text-left pl-2'>Candidate Dashboard</div>
            <Nav
              activeKey={location.pathname}
              onSelect={key => {
                setOpen(false);
                navigate(key);
              }}
              appearance="subtle"
            >
              {filteredNavItems.map(item => (
                <Nav.Item eventKey={item.key} icon={item.icon} key={item.key}>
                  {item.label}
                </Nav.Item>
              ))}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
};

export default SideMenu;