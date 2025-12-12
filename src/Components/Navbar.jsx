import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "Projects", "Experience", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#00eaff] tracking-wide">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-white transition duration-300 hover:text-[#00eaff]"
                activeClass="text-[#00eaff]"
                spy={true}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white py-6 px-6 space-y-5 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="block text-lg font-medium hover:text-[#00eaff]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
