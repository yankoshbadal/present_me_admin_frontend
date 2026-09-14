import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { benefits } from "../data/landingData";
import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-[#0BCCEB]/10 via-[#0A80F5]/10 to-[#0BCCEB]/5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 px-4 py-2 bg-white/80 rounded-full shadow-lg">
            <span className="text-[#0A80F5] font-semibold text-xs sm:text-sm flex items-center gap-2">
              <Award className="w-4 h-4" />
              Premium Quality
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why Choose Present-Me?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            The most comprehensive attendance and classroom management
            solution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-100">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0BCCEB] to-[#0A80F5] rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;