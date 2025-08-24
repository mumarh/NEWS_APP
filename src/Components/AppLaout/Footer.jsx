import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(
      "🎉 Congratulations! You have successfully subscribed to our News Channel. Stay tuned for the latest updates!"
    );
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-10">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">Dastak Media</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Fast. Fresh. Fearless. Bringing you reliable news updates from
              across Pakistan and the world. Stay informed with truth-driven
              journalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/"
                  className="hover:text-blue-400"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/about"
                  className="hover:text-blue-400"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/contact"
                  className="hover:text-blue-400"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={scrollToTop}
                  to="/testimonals"
                  className="hover:text-blue-400"
                >
                  Testimonials
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Popular Topics
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-blue-400 cursor-pointer">
                  Politics
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 cursor-pointer">
                  Business
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 cursor-pointer">
                  Technology
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 cursor-pointer">
                  Sports
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-sm mb-3">
              Subscribe to get the latest headlines delivered to your inbox.
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Your Email"
                value={email} // <-- bind input value to state
                onChange={(e) => setEmail(e.target.value)} // <-- update state when typing
                className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left space-y-1">
            <p>📍 123 News Avenue, Islamabad, Pakistan</p>
            <p>📞 +92 300 1234567</p>
            <p>✉️ info@dastakmedia.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Dastak Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
