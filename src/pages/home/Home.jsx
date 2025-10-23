import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white px-6 md:px-20">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-yellow-300">Home Page</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
          This is a beautifully designed Home component using Tailwind CSS.
          It's clean, responsive, and ready to customize.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-yellow-300 text-white font-semibold rounded-full hover:bg-yellow-300 hover:text-blue-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7ed7d5caed1d780ccecf62c75b3c8f98.gif"
          alt="hero"
          className="w-80 md:w-[420px] rounded-2xl shadow-2xl border-4 border-white/30"
        />
      </div>
    </section>
  );
};

export default Home;
