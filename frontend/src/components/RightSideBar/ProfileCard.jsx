import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const profileImage = user?.profilePicture || "https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_80x80_v1.png";

  return (
    <div className="bg-white shadow-sm rounded-md p-4 w-full">
      <div className="flex flex-col items-center text-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <h2 className="font-semibold text-base">{user?.name}</h2>
        <p className="text-sm text-gray-500">{user?.title || "Aspiring Developer"}</p>
        <Link to="/profile" className="mt-4 text-sm text-blue-600 hover:underline">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
