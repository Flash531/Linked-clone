import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../GoogleLogin/googleLoginComp";

const Signup = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-start bg-[#F3F2EF] px-4 py-12">
      <h2 className="text-2xl md:text-3xl text-center text-[#191919] font-light mb-6">
        Make the most of your professional life
      </h2>
      <div className="w-full max-w-[352px] shadow-md rounded-md bg-white px-6 py-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="w-full text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0A66C2]"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0A66C2]"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="f_name">Full Name</label>
          <input
            type="text"
            className="w-full text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0A66C2]"
            placeholder="Full Name"
          />
        </div>
        <div className="font-light mb-4 text-xs mt-6">
  By clicking Agree & Join or Continue, you agree to LinkedIn’s
  <span className="font-semibold text-[#0A66C2] cursor-pointer hover:underline"> User Agreement</span>,
  <span className="font-semibold text-[#0A66C2] cursor-pointer hover:underline"> Privacy Policy</span>, and
  <span className="font-semibold text-[#0A66C2] cursor-pointer hover:underline"> Cookie Policy</span>.
</div>
        <div className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white py-3 px-4 rounded-full text-center text-sm font-medium cursor-pointer my-2">
          Agree & Join
        </div>

        <div className="relative flex items-center text-gray-500 text-xs mb-4">
          <div className="border-b border-gray-300 w-full"></div>
          <span className="mx-2 bg-white px-2">or</span>
          <div className="border-b border-gray-300 w-full"></div>
        </div>

        <div className="mb-4"><GoogleLoginComp /></div>
      </div>

      <p className="mt-6 text-sm text-center">
        Already on LinkedIn?{" "}
        <Link to={"/login"} className="font-semibold text-[#0A66C2] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
