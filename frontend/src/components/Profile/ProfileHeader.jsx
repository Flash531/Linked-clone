import React from 'react';

const ProfileHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const profileImage = user?.profilePicture || "https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_80x80_v1.png";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-3xl mx-auto mt-6">
      <div className="h-32 bg-blue-600 relative">
        {/* Dummy background cover image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Cover"
          className="object-cover w-full h-full"
        />
        {/* Profile picture */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white absolute left-6 bottom-[-40px]"
        />
      </div>
      <div className="pt-12 pb-4 px-6">
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-gray-600">Software Engineer | MERN Stack Developer</p>
      </div>
    </div>
  );
};

export default ProfileHeader;