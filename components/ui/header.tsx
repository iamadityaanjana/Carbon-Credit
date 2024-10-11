import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md">
      {/* Left Section: Logo and Company Name */}
      <div className="flex items-center space-x-10">
        {/* Logo (Replace 'logo.png' with the actual logo path) */}
        <img src="/logozap.png" alt="Company Logo" className="h-10 w-10" />
        
        {/* Company Name */}
        <h1 className="text-xl text-green-500 dark:text-blue-500 font-bold text-black ">EcoZap</h1>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </header>
  );
};

// export default Header;
