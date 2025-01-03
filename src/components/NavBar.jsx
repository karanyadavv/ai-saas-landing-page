import React from "react";
import logoImg from "../assets/logo.png";
import { motion } from "motion/react";

const NavBar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0, filter: "blur(12px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="flex justify-center items-center text-white space-x-52 font-inter -mt-4 mb-12 md:mb-20"
    >
      <div className="flex items-center justify-between space-x-32">
        <img src={logoImg} alt="Logo" height={170} width={170} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-10 md:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-4">
        <span>All pages</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>About Us</span>
      </div>
      <div className="hidden md:block">
        <button className="btn-outline">
          <p className="btn-outline-text text-[16px] px-6 py-4">
            Get the Template
          </p>
        </button>
      </div>
    </motion.div>
  );
};

export default NavBar;
