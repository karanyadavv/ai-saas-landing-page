import React from "react";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mb-24">
      <button className="btn-outline">
        <p className="btn-outline-text">Beta 1.5 available now</p>
      </button>
      <p className="text-[40px] md:text-[58px] text-white font-medium font-archivo leading-tight md:tracking-normal tracking-tight text-wrap">
        Accelerating sales & growth with our AI solutions.
      </p>
      <p className="font-inter text-[#aaaaaa] font-[28px] text-wrap mt-4 leading-relaxed text-center">
        Our AI-powered tools are designed to analyze vast amounts of data,
        uncover hidden patterns, and provide actionable insights that drive
        smarter decision.
      </p>
      <button className="btn-primary mt-6">Get Start 14 days free trial</button>
    </div>
  );
};

export default IntroSection;
