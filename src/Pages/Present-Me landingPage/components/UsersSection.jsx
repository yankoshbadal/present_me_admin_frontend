import { motion } from "framer-motion";
import { CheckCircle2, Users } from "lucide-react";
import { userTypes } from "../data/landingData";
import React from "react";

const UsersSection = ({ navigate }) => {
  return (
    <section id="users" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-[#0BCCEB]/20 to-[#0A80F5]/20 rounded-full">
            <span className="text-[#0A80F5] font-semibold text-xs sm:text-sm flex items-center gap-2">
              <Users className="w-4 h-4" />
              For Everyone
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Built for All Users
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Tailored experiences for students, teachers, and administrators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {userTypes.map((user, index) => {
            const Icon = user.icon;

            return (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-white via-white to-indigo-50/30 rounded-xl p-5 sm:p-6 shadow-md border border-gray-100">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0BCCEB] to-[#0A80F5] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {user.title}
                  </h3>

                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {user.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0A80F5] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      navigate(index === 2 ? "/signin" : "/signup")
                    }
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] text-white rounded-lg font-semibold text-sm"
                  >
                    {index === 2
                      ? "Login to Dashboard"
                      : "Download App"}
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default UsersSection;
