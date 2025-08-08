import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../GoogleLogin/googleLoginComp";

const Login = () => {
  return (
    
    <div className=" w-full flex flex-col items-center justify-start bg-[#F3F2EF] px-4 py-12">
         <div className="text-2xl md:text-3xl text-center text-[#191919] font-light mb-6">Stay updated on your professional life</div>
      <div className="w-full max-w-[352px] shadow-md rounded-md bg-white px-6 py-8">
        <div className="font-semibold text-3xl text-[#191919] mt-1 ">Sign in</div>
        <div className="my-5"> <GoogleLoginComp /> </div>

        <div className="flex items-center justify-between my-6 w-full">
          <div className="border-b border-gray-400 w-[45%]"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="border-b border-gray-400 w-[45%]"></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="w-full text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0A66C2]"
            placeholder="Email or Phone"
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
       

        <div className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white py-3 px-4 rounded-full text-center text-sm font-medium cursor-pointer mt-6">
          Sign in
        </div>

      </div>
      <div className="mt-8 mb-10 text-sm">
        New to LinkedIn? <Link to={'/signUp'} className="font-semibold text-[#0A66C2] hover:underline">Join now</Link>
      </div>
    </div>
  );
};

export default Login;
