import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/testimonals", label: "Testimonials" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left - Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          Dastak <span className="text-red-500">Media</span>
        </div>

        {/* Center - Slogan (hidden on small screens) */}
        <div className="hidden md:block text-lg italic text-gray-300">
          Fast. Fresh. Fearless.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={scrollToTop}
              className={({ isActive }) =>
                isActive
                  ? "text-red-400 border-b-2 border-red-400"
                  : "hover:text-red-400 transition-colors duration-200"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-400 font-semibold border-l-4 border-red-400 pl-2"
                    : "hover:text-red-400 pl-2 transition-colors duration-200"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
