import React from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(Flip,TextPlugin);
const Navbar = () => {
    useGSAP(() => {
        const btn1 = document.querySelector(".btn1");
        btn1.addEventListener("mouseenter",()=>{
            gsap.to(".a2",{
                duration:1,
                y:20,
         
            })
        })
        btn1.addEventListener("mouseleave",()=>{
            gsap.to(".a2",{
                y:0,
            })
        })
  }, []);

  return (
    <nav className="flex justify-between items-center w-full h-[10vh] px-10">
      <div className="logo">
        <img
          src="https://rhythm-influence.files.svdcdn.com/staging/nav_logo.svg?dm=1728475195"
          alt=""
        />
      </div>
      <div className="flex gap-10 items-center justify-center">
        <div className="flex btn1 flex-col bg-red-500  overflow-hidden  items-center relative   ">
          <a href="#" className=" a1">Our Work</a>
          <a href="#" className=" absolute text-green-600  a2 ">Our Work</a>
        </div>
            <div className="flex btn2 flex-col bg-red-500 overflow-hidden w-20 h-5 items-center relative  ">
          <a href="#" className="">Company</a>
          <a href="#" className=" absolute text-green-600 ">Company</a>
        </div>
        <div className="flex btn3 flex-col bg-red-500 overflow-hidden w-20 h-5 items-center relative  ">
          <a href="#" className="">Services</a>
          <a href="#" className=" absolute text-green-600 ">Services</a>
        </div>
      </div>
      <div className="flex gap-2 items-center cursor-pointer">
        <div className="circle w-5 h-5  rounded-full bg-[#BB70AD]"></div>
        <h2 className="text-sm ">get in touch</h2>
      </div>
    </nav>
  );
};

export default Navbar;
