import { ArrowRight, Download, Shield, Smartphone, Sparkles } from "lucide-react";
import React from "react";
const CTASection = ({ navigate }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-br from-[#0BCCEB] to-[#0A80F5] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center text-white shadow-xl max-w-4xl mx-auto">

          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 rounded-full border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold text-xs sm:text-sm">
                Join 10,000+ Happy Users
              </span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
            Join thousands of institutions already using Present-Me
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-xl font-semibold border border-white/20"
          >
            <span className="flex items-center gap-2 justify-center">
              <Smartphone className="w-4 h-4" />
              Download App
              <Download className="w-3 h-3" />
            </span>
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <span className="font-semibold text-sm sm:text-base">
              Admin Access:
            </span>

            <button
              onClick={() => navigate("/signin")}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#0A80F5] rounded-xl font-bold shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                HOD/Dean Login
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;