import React from "react";
import { FaUser, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/feature/auth/authSlice"; // logout action import

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔹 Logout Function
  const handleLogout = () => {
    dispatch(logout()); // Redux state clear
    navigate("/login"); // Login page e redirect
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 text-2xl font-bold text-indigo-600 border-b border-gray-200">
          MyDashboard
        </div>
        <nav className="flex-1 mt-6">
          <ul>
            <li className="px-6 py-3 hover:bg-indigo-100 rounded-lg cursor-pointer flex items-center gap-3">
              <FaUser /> Profile
            </li>
            <li className="px-6 py-3 hover:bg-indigo-100 rounded-lg cursor-pointer flex items-center gap-3">
              <FaChartLine /> Analytics
            </li>
            <li className="px-6 py-3 hover:bg-indigo-100 rounded-lg cursor-pointer flex items-center gap-3">
              <FaCog /> Settings
            </li>

            {/* 🔹 Logout Button (Design same as before, just added onClick) */}
            <li
              onClick={handleLogout}
              className="px-6 py-3 mt-auto mb-6 hover:bg-red-100 rounded-lg cursor-pointer flex items-center gap-3 text-red-600"
            >
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">Hello, John Doe</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl shadow flex flex-col">
            <span className="text-gray-500">Total Users</span>
            <span className="text-2xl font-bold text-indigo-600 mt-2">1,245</span>
          </div>
          <div className="p-6 bg-white rounded-xl shadow flex flex-col">
            <span className="text-gray-500">Revenue</span>
            <span className="text-2xl font-bold text-green-600 mt-2">$12,340</span>
          </div>
          <div className="p-6 bg-white rounded-xl shadow flex flex-col">
            <span className="text-gray-500">Orders</span>
            <span className="text-2xl font-bold text-purple-600 mt-2">342</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>User John Doe signed up</span>
              <span className="text-gray-400 text-sm">2 mins ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Order #1234 placed</span>
              <span className="text-gray-400 text-sm">15 mins ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>User Jane Doe updated profile</span>
              <span className="text-gray-400 text-sm">30 mins ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
