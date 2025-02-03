import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="char opacity-0">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const Page2 = () => {
  useGSAP(() => {
    // Animate each character separately
    gsap.to(".char", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 1, // Each character animates with a small delay
      scrollTrigger: {
        trigger: ".maindiv",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
        scroller: document.body, // Sync with Lenis
      },
    });

    // Animate the boxes (expand effect)
    gsap.to(".box", {
      width: "20vh",
      duration: 0.8,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".maindiv",
        start: "top 90%",
        end: "bottom",
        scrub: true,
        scroller: document.body,
      },
    });

    // Refresh ScrollTrigger to align with Lenis
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full  text-center flex flex-col leading-none text-4xl text-[5.813rem] items-center mt-10">
      <div className="flex items-center maindiv font-bold justify-center capitalize">
        <span>{splitText("From")}</span>
        <div className="w-0 h-20 box bg-red-500"></div>
        <span>{splitText("Athletes +")}</span>
      </div>
      <div className="flex items-center justify-center">
        <span>{splitText("Celebrities")}</span>
        <div className="w-0 h-20 box bg-red-500"></div>
        <span>{splitText("to")}</span>
      </div>
      <div className="flex items-center justify-center">
        <span>{splitText("social")}</span>
        <div className="w-0 h-20 box bg-red-500"></div>
        <span>{splitText("media")}</span>
      </div>
      <div className="flex items-center justify-center">
        <span>{splitText("and")}</span>
        <div className="w-0 h-20 box bg-red-500"></div>
        <span>{splitText("influencers")}</span>
      </div>
      <div className="flex items-center justify-center">
        <span>{splitText("Stars, we select")}</span>
      </div>
      <div className="flex items-center maindiv font-bold justify-center">
        <span>{splitText("The")}</span>
        <div className="w-0 h-20 box bg-red-500"></div>
        <span>{splitText("Most")}</span>
      </div>
      <div className="flex items-center justify-center">
        <span>{splitText("to partner with")}</span>
      </div>
      <div className="flex items-center justify-center">
        <span>{splitText("your")}</span>
        <div className="w-0 h-20 box bg-red-500"></div>
        <span>{splitText("brand")}</span>
      </div>
    </div>
  );
};

export default Page2;
