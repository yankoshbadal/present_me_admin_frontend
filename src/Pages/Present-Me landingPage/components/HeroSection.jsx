import { motion } from "framer-motion";
import React from "react";
import {
  ArrowRight,
  Download,
  GraduationCap,
  Play,
  Sparkles,
} from "lucide-react";

import { stats } from "../data/landingData";

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 px-3 sm:px-6 py-1.5 sm:py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-[#0BCCEB]/30">
              <GraduationCap className="w-4 h-4 text-[#0A80F5]" />

              <span className="text-xs sm:text-sm text-[#0A80F5] font-semibold">
                Revolutionizing Education
              </span>

              <Sparkles className="w-3 h-3 text-[#0BCCEB]" />
            </div>
          </div>

          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] bg-clip-text text-transparent">
              Smart Attendance,
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#0A80F5] to-[#0BCCEB] bg-clip-text text-transparent">
              Smarter Learning
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Present-Me is the complete classroom management solution with{" "}
            <span className="font-semibold text-[#0A80F5]">
              AI-powered attendance tracking
            </span>
            , real-time analytics, and seamless communication.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] text-white rounded-xl font-bold">
              <span className="flex items-center gap-2 justify-center">
                <Download className="w-4 h-4" />
                Download App
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/80 text-gray-700 rounded-xl font-bold border border-gray-200">
              <span className="flex items-center gap-2 justify-center">
                <Play className="w-4 h-4" />
                Watch Demo
              </span>
            </button>

          </div>

          {/* Stats */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/90 backdrop-blur-2xl rounded-xl shadow-xl p-4 sm:p-6 max-w-3xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="text-center px-3">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] bg-clip-text text-transparent">
                    {stat.value}
                  </div>

                  <div className="text-gray-600 font-semibold text-xs sm:text-sm flex items-center gap-1 justify-center">
                    <Icon className="w-3 h-3" />
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;