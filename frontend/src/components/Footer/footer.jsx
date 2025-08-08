import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-3 text-xs text-gray-500">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Accessibility</li>
          <li className="hover:underline cursor-pointer">Help Center</li>
          <li className="hover:underline cursor-pointer">Privacy & Terms</li>
          <li className="hover:underline cursor-pointer">Ad Choices</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business Services</li>
          <li className="hover:underline cursor-pointer">Get the LinkedIn app</li>
        </ul>

        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="flex items-center gap-1 cursor-pointer">
            <h3 className="text-[#0A66C2] font-bold text-sm">Linked</h3>
            <img
              src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"
              alt="LinkedIn Logo"
              className="w-4 h-4"
            />
          </span>
          <span>© 2025 Farhan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
