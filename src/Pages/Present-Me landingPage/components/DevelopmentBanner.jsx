import React from "react";

const DevelopmentBanner = () => {
  return (
    <div className="fixed top-16 right-2 sm:top-20 sm:right-6 z-[101]">
      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white font-semibold text-xs sm:text-base shadow-xl rounded-lg sm:rounded-xl border border-red-300">
        <svg
          className="w-3 h-3 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>

        <span className="hidden sm:inline">
          Website is under development.
        </span>

        <span className="sm:hidden">Dev Mode</span>
      </div>
    </div>
  );
};

export default DevelopmentBanner;