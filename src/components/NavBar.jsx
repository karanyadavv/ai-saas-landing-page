import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { motion } from "motion/react";
import { HeaderList } from "../constants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <motion.div
        initial={{ y: -100, opacity: 0, filter: "blur(12px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between md:px-[260px] text-white space-x-52 font-inter -mt-4 mb-12 md:mb-20 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between space-x-44">
          <img
            src={logoImg}
            alt="Logo"
            height={170}
            width={170}
            className="w-[140px] md:w-[170px] cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 9h16.5m-16.5 6.75h16.5"
              }
            />
          </svg>
        </div>
        <ul className="hidden md:flex justify-center items-center space-x-10 cursor-pointer ">
          {HeaderList.map((item) => {
            return (
              <li
                key={item}
                className="hover:text-[#0158C2] transition-all duration-300"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <button className="btn-outline">
            <p className="btn-outline-text text-[16px] px-6 py-4">
              Get the Template
            </p>
          </button>
        </div>
      </motion.div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-14 py-6 rounded-lg z-20 left-0 w-full bg-black backdrop-blur-sm md:hidden overflow-hidden"
      >
        <ul className="flex flex-col items-center space-y-4 font-inter">
          {HeaderList.map((item) => (
            <li
              key={item}
              className="text-white hover:text-[#0158C2] transition-all duration-300 cursor-pointer font-semibol"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
