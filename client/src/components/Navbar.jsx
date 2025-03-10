import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles} flex flex-col gap-y-3`}>
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
            isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-700 hover:bg-gray-200"
          }`
        }
      >
        <MdHomeWork className="text-xl" />
        <span>Home</span>
      </NavLink>

      {/* Listing */}
      <NavLink
        to="/listing"
        className={({ isActive }) =>
          `flex items-center gap-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
            isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-700 hover:bg-gray-200"
          }`
        }
      >
        <RiCheckboxMultipleBlankFill className="text-xl" />
        <span>Listing</span>
      </NavLink>

      {/* Contact (Use <a> for mailto) */}
      <a
        href="mailto:inquiries.amankhan797876@gmail.com"
        className="flex items-center gap-x-2 px-3 py-2 rounded-full text-gray-700 hover:bg-gray-200 transition-all duration-300"
      >
        <MdPermContactCalendar className="text-xl" />
        <span>Contact</span>
      </a>

      {/* Add Property */}
      <NavLink
        to="/add-property"
        className={({ isActive }) =>
          `flex items-center gap-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
            isActive ? "bg-green-100 text-green-800 font-semibold" : "text-gray-700 hover:bg-gray-200"
          }`
        }
      >
        <MdAddHome className="text-xl" />
        <span>Add Property</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;