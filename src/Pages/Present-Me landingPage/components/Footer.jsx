import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../../assets/image.png";

const Footer = ({ scrollToSection }) => {
  const socialIcons = [Linkedin, Twitter, Facebook];

  const quickLinks = [
    ["Features", "features"],
    ["How it Works", "how-it-works"],
    ["For Users", "users"],
    ["Download", "download"],
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-8 sm:py-10 px-4"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                <img
                  src={logo}
                  alt="Present-Me Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-lg sm:text-xl font-bold">
                <span className="text-[#0BCCEB]">PRESENT</span>
                <span className="text-gray-300">-ME</span>
              </span>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm mb-4 max-w-md">
              Revolutionizing education management with smart attendance
              tracking, real-time analytics.
            </p>

            <div className="flex items-center gap-3">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-300 hover:text-white text-xs sm:text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Contact Us
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0BCCEB]" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  support@presentme.in
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0BCCEB]" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  +91 7007458210
                </span>
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0BCCEB]" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  Gorakhpur, UP, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-gray-400 text-xs">
              © 2025 Present-Me. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link to="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>

              <Link to="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </Link>

              <Link
                to="/delete_account"
                className="text-gray-400 hover:text-white"
              >
                Delete Account
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;