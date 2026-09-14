import { motion } from "framer-motion";
import React from "react";
const AttendanceMethodCard = ({ method, index }) => {
  const Icon = method.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div
        className={`bg-gradient-to-br ${method.lightColor} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100`}
      >
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 shadow-lg`}
        >
          <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">
          {method.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {method.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AttendanceMethodCard;