import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/" className="text-2xl md:text-3xl font-extrabold text-indigo-600">
          Auth<span className="text-gray-800">Portal</span>
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 font-medium hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
