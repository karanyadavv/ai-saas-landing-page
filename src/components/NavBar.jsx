import React from "react";
import logoImg from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center text-white space-x-52 mb-10 font-inter">
      <div>
        <img src={logoImg} alt="Logo" height={170} width={170} />
      </div>
      <div className="flex justify-center items-center space-x-4">
        <span>All pages</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>About Us</span>
      </div>
      <div>
        <button className="btn-outline">
          <p className="btn-outline-text text-[16px] px-6 py-4">
            Get the Template
          </p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
