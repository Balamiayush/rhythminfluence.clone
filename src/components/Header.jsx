import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  useEffect(() => {
    const divs = document.querySelectorAll(".wrapper > div");
    let currentIndex = 0;
    function animate() {
      divs.forEach((div) => div.classList.remove("active"));
      divs[currentIndex].classList.add("active");
      currentIndex = (currentIndex + 1) % divs.length;
    }
    const interval = setInterval(animate, 9000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const Variants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Time between each child animation
        duration: 1,
      },
    },
  };
  const anim1 = {
    initial: {
      width: "0px",
    },
    animate: {
      width: "20vw",
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <div className="w-full h-screen relative ">
      <Navbar />
      <motion.div
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          staggerChildren: 0.5,
          duration: 1,
        }}
        className="wrapper relative w-full top-20 "
      >
        <div className="color-box" style={{ "--i": 1, "--color": "red" }}></div>
        <div
          className="color-box"
          style={{ "--i": 2, "--color": "blue" }}
        ></div>
        <div
          className="color-box"
          style={{ "--i": 3, "--color": "green" }}
        ></div>
        <div
          className="color-box"
          style={{ "--i": 4, "--color": "pink" }}
        ></div>
      </motion.div>
      <div className=" absolute top-[12vw] leading-[.82]     text-center   inset-0  z-10 text-[14vw] font-bold">
        <h1 className=" font-[var(--font-bold)] flex items-center justify-center ">
          <span className="right-[-100px]">We </span>
          <motion.div
            variants={Variants}
            {...anim1}
            className="   "
          ></motion.div>
          <span>Are</span>
        </h1>
        <h1 className=" font-[var(--font-bold)] flex items-center justify-center">
          <span className="left-[-100px]">Match </span>
          <motion.div
            className="  "
            variants={Variants}
            {...anim1}
          ></motion.div>
          <span>Makers</span>
        </h1>
      </div>
      <p className=" text-center relative top-[-10vw] text-white">
        The #1 most trusted partner in influencer marketing, <br /> connecting
        the world’s leading brands with the <br /> best-suited top talent.
      </p>
    </div>
  );
};

export default Header;
