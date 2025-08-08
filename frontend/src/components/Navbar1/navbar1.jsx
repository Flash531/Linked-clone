import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to={'/'} className="flex-justify-between">
          <div className="flex gap-1 items-center cursor-pointer">
            <h3 className="text-[#0A66C2] font-bold text-3xl">Linked</h3>
            <img
              src={
                "https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"} alt="LinkedInLogo" className="w-7 h-7"/>
          </div>
        </Link>
        <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
          <Link to={'/signup'} className="font-semibold md:px-4 md:py-2 box-border text-black rounded-3xl  hover:bg-gray-200 cursor-pointer">Join now</Link>
          <Link to={'/login'} className="font-semibold px-4 py-2 box-border border-1 text-[#0A66C2] border-[#0A66C2]  rounded-3xl  hover:bg-blue-100 cursor-pointer">Sign in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
