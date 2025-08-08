import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaUserCircle } from 'react-icons/fa';
import { UserContext } from '../../Context/StoreContext';

const Navbar2 = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { setUser } = useContext(UserContext);

  let hideTimeout;

  useEffect(() => {
    return () => clearTimeout(hideTimeout);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-md py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center gap-y-3">
      {/* Left: Logo and Search */}
      <div className="flex items-center gap-4 sm:gap-10 flex-wrap sm:flex-nowrap w-full sm:w-auto">
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => navigate('/feed')}
        >
          <h3 className="text-[#0A66C2] font-bold text-3xl">Linked</h3>
          <img
            src={
              "https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"
            }
            alt="LinkedInLogo"
            className="w-7 h-7"
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 min-w-[180px] px-4 py-2 border rounded-full text-sm bg-gray-100 focus:outline-none"
        />
      </div>

      {/* Right: Nav Icons */}
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 text-gray-600 w-full sm:w-auto">
        <div
          className="flex flex-col items-center cursor-pointer hover:text-black"
          onClick={() => navigate('/feed')}
        >
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </div>
        {/* <div
          className="flex flex-col items-center cursor-pointer hover:text-black"
          onClick={() => navigate('/network')}
        >
          <FaUserFriends size={20} />
          <span className="text-xs">My Network</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer hover:text-black"
          onClick={() => navigate('/jobs')}
        >
          <FaBriefcase size={20} />
          <span className="text-xs">Jobs</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer hover:text-black"
          onClick={() => navigate('/messages')}
        >
          <FaCommentDots size={20} />
          <span className="text-xs">Messaging</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer hover:text-black"
          onClick={() => navigate('/notifications')}
        >
          <FaBell size={20} />
          <span className="text-xs">Notifications</span>
        </div> */}
        <div
          className="relative"
          onMouseLeave={() => {
            hideTimeout = setTimeout(() => setShowDropdown(false), 1000);
          }}
          onMouseEnter={() => clearTimeout(hideTimeout)}
        >
          <div
            className="flex flex-col items-center cursor-pointer hover:text-black"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaUserCircle size={20} />
            <span className="text-xs">Me</span>
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-md w-32 z-10">
              <div
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/profile')}
              >
                View Profile
              </div>
              <div
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar2;