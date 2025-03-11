import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import userIcon from "../assets/user.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if scrolling up, hide if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
      setActive(currentScrollY > 40);

      // Close menu if scrolling
      if (menuOpened) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpened]);

  return (
    <header
      className={`fixed top-1 left-4 right-4 z-50 max-w-screen transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Container */}
      <div
        className={`${
          active ? "py-0" : "py-1"
        } max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5`}
      >
        <div className="flex justify-between py-3">
          {/* Logo */}
          <Link to={"/"}>
            <span className="font-[900] text-[24px]">
              Grahasti<span className="font-[600] medium-20">.in</span>
            </span>
          </Link>

          {/* Navbar */}
          <div className="flex items-center gap-x-4">
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
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
