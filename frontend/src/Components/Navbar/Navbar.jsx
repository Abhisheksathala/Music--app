import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { assets } from "./../../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img onClick={()=>{navigate(-1)}} src={assets.arrow_left} alt="Left Arrow" className="w-5 cursor-pointer" />
          <img onClick={()=>{navigate(1)}} src={assets.arrow_right} alt="Right Arrow" className="w-5 cursor-pointer" />
          <div className="text-xl font-bold">
            <Link to="/">MusicApp</Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow items-center gap-4 ml-8">
          <Link to="/" className="hover:text-gray-400 transition duration-200">
            ALL
          </Link>
          <Link to="/music" className="hover:text-gray-400 transition duration-200">
            Music
          </Link>
          <Link to="/podcast" className="hover:text-gray-400 transition duration-200">
            Podcast
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-grow items-center gap-4 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          />
        </div>

        {/* User Profile and Auth Links */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/upgrade" className="hover:text-gray-400 transition duration-200">
            Explore Premium
          </Link>
          <Link to="/" className="hover:text-gray-400 transition duration-200">
            Install App
          </Link>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://via.placeholder.com/30"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span>D</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="p-4">
            <Link to="/" className="block px-2 py-1 hover:bg-gray-700">
              ALL
            </Link>
            <Link to="/music" className="block px-2 py-1 hover:bg-gray-700">
              Music
            </Link>
            <Link to="/podcast" className="block px-2 py-1 hover:bg-gray-700">
              Podcast
            </Link>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
            />
            <Link to="/upgrade" className="block px-2 py-1 hover:bg-gray-700">
              Upgrade
            </Link>
            <div className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-gray-700 mt-2">
              <img
                src="https://via.placeholder.com/30"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span>Profile</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
