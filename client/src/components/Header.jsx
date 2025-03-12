import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import userIcon from "../assets/user.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      setActive(currentScrollY > 40);
      lastScrollY.current = currentScrollY;

      // Close menu if scrolling
      if (menuOpened) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpened]);

  return (
    <header
      className={`fixed top-1 left-4 right-4 z-50 max-w-screen transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Container */}
      <div
        className={`bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5 ${
          active ? "py-0" : "py-1"
        }`}
      >
        <div className="flex justify-between py-3">
          {/* Logo */}
          <Link to="/">
            <span className="font-extrabold text-2xl">
              Grahasti<span className="font-semibold text-lg">.in</span>
            </span>
          </Link>

          {/* Navbar */}
          <div className="flex items-center gap-x-4">
            <Navbar
              containerStyles={`fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 ${
                menuOpened ? "right-8 z-50" : "-right-[100%]"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center gap-x-3 sm:gap-x-5 font-bold text-lg">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="cursor-pointer text-3xl hover:text-secondary"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="cursor-pointer text-3xl hover:text-secondary"
              />
            )}
            <button
              className="flex items-center justify-center gap-x-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
                   text-white text-lg font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-purple-700 
                   transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={userIcon}
                alt="User Icon"
                className="h-6 w-6 rounded-full shadow-sm"
              />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
