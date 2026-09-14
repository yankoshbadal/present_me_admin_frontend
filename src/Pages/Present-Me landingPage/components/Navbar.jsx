import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../../../assets/image.png";

const Navbar = ({ scrollToSection, navigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    "features",
    "how-it-works",
    "users",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={logo}
                alt="Present-Me Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-lg sm:text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] bg-clip-text text-transparent">
                PRESENT-ME
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-[#0A80F5] transition-all relative group text-sm lg:text-base"
              >
                {section === "how-it-works"
                  ? "How it Works"
                  : section === "users"
                  ? "For Users"
                  : section.charAt(0).toUpperCase() + section.slice(1)}

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button
              onClick={() => navigate("/signin")}
              className="text-gray-700 hover:text-[#0A80F5] font-medium"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] text-white rounded-xl font-semibold"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-gray-700 py-2 text-sm"
                >
                  {section === "how-it-works"
                    ? "How it Works"
                    : section === "users"
                    ? "For Users"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <button
                onClick={() => navigate("/signin")}
                className="text-left text-gray-700 py-2 font-medium text-sm"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2.5 bg-gradient-to-r from-[#0BCCEB] to-[#0A80F5] text-white rounded-xl font-semibold text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;