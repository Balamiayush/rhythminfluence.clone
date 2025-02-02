import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  useGSAP(() => {
    gsap.to(".box", {
      width: "20vh", 
      duration: 0.8,
      stagger: 0.3, // Stagger effect
      display: "block",
      scrollTrigger: {
        trigger: ".maindiv",
        start: "top 90%",
        end: "bottom",
        scrub: true,
        markers: true,
        scroller: document.body, // Connects GSAP to Lenis scrolling
      },
    });

    // Refresh ScrollTrigger when Lenis scrolls
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full h-[200vh] text-center flex flex-col leading-none  text-4xl text-[5.813rem] items-center mt-10">
      <div className="flex items-center maindiv font-bold justify-center  capitalize">
        <span>From&nbsp; </span>
        <div className="w-0 h-20 box bg-red-500 none"></div>
        <span>Athletes +</span>
      </div>
      <div className="flex items-center  justify-center ">
        <span>Celebrities</span>
        <div className="w-0  h-20 box 
        none bg-red-500"></div>
        <span>to</span>
      </div>
      <div className="flex items-center justify-center ">
        <span>social</span>
        <div className="w-0 h-20 box bg-red-500 none"></div>
        <span>media</span>
      </div>
      <div className="flex items-center justify-center ">
        <span>and</span>
        <div className="w-0 h-20 box bg-red-500 none"></div>
        <span>influencers</span>  
      </div>
      <div className="flex items-center justify-center ">
        <span>Stars, we select</span>
      </div>
      <div className="flex items-center maindiv font-bold justify-center ">
        <span>The</span>
        <div className="w-0 h-20 box bg-red-500 none"></div>
        <span>Most</span>
      </div>
      <div className="flex items-center justify-center ">
      to partner with
      </div>
      <div className="flex items-center justify-center ">
        <span>
        your
        </span>
        <div className="w-0 h-20 box bg-red-500 none"></div>
        <span>brand</span>
      </div>
    </div>
  );
};

export default Page2;
