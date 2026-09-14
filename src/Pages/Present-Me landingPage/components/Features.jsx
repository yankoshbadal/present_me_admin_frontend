import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "../data/landingData";
import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white/50 to-[#0BCCEB]/5"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-[#0BCCEB]/20 to-[#0A80F5]/20 rounded-full">
            <span className="text-[#0A80F5] font-semibold text-xs sm:text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Complete Solution
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Powerful Features
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your educational institution
            efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;