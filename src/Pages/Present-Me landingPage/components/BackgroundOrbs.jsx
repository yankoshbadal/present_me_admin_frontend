import React from "react";

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50 sm:opacity-100">
      <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#0BCCEB]/20 to-[#0A80F5]/20 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundOrbs;