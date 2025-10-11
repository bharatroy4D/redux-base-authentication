import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 tracking-wide cursor-pointer">
          Auth<span className="text-gray-800">Portal</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-semibold transition-all duration-300 
                ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
            >
              {link.name}
              {/* Active underline */}
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-600 rounded-full transition-all duration-300"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-indigo-600 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`relative font-medium transition-all duration-300 
                  ${
                    location.pathname === link.path
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
