import { Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { attendanceMethods } from "../data/landingData";
import AttendanceMethodCard from "./AttendanceMethodCard";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-[#0BCCEB]/20 to-[#0A80F5]/20 rounded-full">
            <span className="text-[#0A80F5] font-semibold text-xs sm:text-sm flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Three Ways to Mark Attendance
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            How It Works
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Choose the method that works best for your institution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {attendanceMethods.map((method, index) => (
            <AttendanceMethodCard
              key={method.title}
              method={method}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;