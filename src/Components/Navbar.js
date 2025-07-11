import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoOne from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="w-full fixed top-0 z-50">
      <div
        className={`mx-auto px-2 py-1 flex justify-between items-center transition-all duration-300 ${isDark
            ? "bg-[#0f172a] text-white"
            : "bg-white text-gray-800 shadow-lg "
          }`}
      >
        {/* Logo */}
        <div className="relative flex flex-row items-center md:pl-12">
          <img
            src={LogoOne}
            alt="Doctor team working"
            className="w-20 h-20 rounded-xl object-cover"
          />
          <Link to="/" className="text-3xl font-semibold tracking-wide">
            OneApp
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/about" className="hover:text-blue-500">About Us</Link>
          <Link to="/solutions" className="hover:text-blue-500">Solutions</Link>
          <Link to="/token" className="hover:text-blue-500">Token</Link>
          <Link to="/roadmap" className="hover:text-blue-500">Roadmap</Link>
          <Link to="/resources" className="hover:text-blue-500">Resources</Link>

          {/* Contact Us Button */}
          <Link
            to="/login"
            className={`px-4 py-2 rounded-full transition-all text-sm font-semibold ${isDark
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
          >
            Login
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-2 text-xl"
            title="Toggle Dark Mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-xl"
            title="Toggle Dark Mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          } ${isDark ? "bg-[#0f172a] text-white" : "bg-white text-gray-800"} px-6 pt-2 pb-4 space-y-2`}
      >
        <Link to="/about" onClick={() => setIsOpen(false)} className="block">About Us</Link>
        <Link to="/solutions" onClick={() => setIsOpen(false)} className="block">Solutions</Link>
        <Link to="/token" onClick={() => setIsOpen(false)} className="block">Token</Link>
        <Link to="/roadmap" onClick={() => setIsOpen(false)} className="block">Roadmap</Link>
        <Link to="/resources" onClick={() => setIsOpen(false)} className="block">Resources</Link>
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${isDark
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
