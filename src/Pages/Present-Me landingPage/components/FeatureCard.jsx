import { motion } from "framer-motion";
import React from "react";
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-gray-100">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4`}
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
          {feature.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;