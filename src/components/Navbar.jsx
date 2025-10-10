import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">
        Authentication
      </div>

      {/* Links */}
      <div className="space-x-6">
        <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-indigo-600 font-medium">
          Register
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
