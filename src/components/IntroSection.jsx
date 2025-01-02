import React from "react";
import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mb-24">
      <button className="btn-outline">
        <p className="btn-outline-text">Beta 1.5 available now</p>
      </button>

      <motion.p
        initial={{ y: 10, opacity: 0.5, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[40px] md:text-[58px] text-white font-medium font-archivo leading-tight md:tracking-normal tracking-tight text-wrap"
      >
        Accelerating sales & growth with our AI solutions.
      </motion.p>

      <motion.p
        initial={{ y: 105, opacity: 0, filter: "blur(12px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="font-inter text-[#aaaaaa] font-[28px] text-wrap mt-4 leading-relaxed text-center"
      >
        Our AI-powered tools are designed to analyze vast amounts of data,
        uncover hidden patterns, and provide actionable insights that drive
        smarter decision.
      </motion.p>
      <button className="btn-primary mt-6">Get Start 14 days free trial</button>
    </div>
  );
};

export default IntroSection;
