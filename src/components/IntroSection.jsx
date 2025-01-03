import React from "react";
import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mb-24">
      <button className="btn-outline">
        <p className="btn-outline-text">Beta 1.5 available now</p>
      </button>

      <motion.div
        initial={{ y: 10, opacity: 0.5, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[40px] md:text-[70px] text-white font-medium font-archivo leading-tight md:tracking-normal tracking-tight text-wrap md:w-[900px]"
      >
        Accelerating sales & growth with our AI solutions.
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="font-inter text-[#aaaaaa] font-[28px] text-wrap mt-4 leading-relaxed text-center md:w-[700px] "
      >
        Our AI-powered tools are designed to analyze vast amounts of data,
        uncover hidden patterns, and provide actionable insights that drive
        smarter decision.
      </motion.div>
      <div>
        <button className="btn-primary mt-6">
          Get Start 14 days free trial
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
