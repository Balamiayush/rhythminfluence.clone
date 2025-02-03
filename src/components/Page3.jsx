import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
    const { scrollTrigger } = useGSAP();
    useGSAP(()=>{
        gsap.to(".box10",{
            scrollTrigger:{
                trigger:".main",
                start:"top top",
                end:"bottom bottom",
                scrub:3,
                pin:true,
                markers:true,
            },
            xPercent:-500,
        })

    },[])
  return (
        <div className='w-[200%]   main flex gap-3   h-screen items-center justify-center mt-10 '>
        <div className='w-[60%] box10  h-[70svh]  '>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/Mariah-Short_Full.mp4" className='w-full h-full object-cover'></video>
        </div>
        <div className='w-[60%] box10  h-[70svh]    '>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/Kalen-Allen-Oleato.mp4" className='w-full h-full   object-cover'></video>
        </div>
        <div className='w-[60%] box10  h-[60vh] '>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/HappyKelli.mp4" className='w-full h-full object-cover'></video>
        </div>
        <div className='w-[60%] box10  h-[70svh] '>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/Kat_Final.mp4" className='w-full h-full object-cover'></video>
        </div>
        <div className='w-[60%] box10  h-[70svh] '>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/NBA_Go-Biggie_1.mp4" className='w-full h-full object-cover'></video>
        </div>       
        <div className='w-[60%] box10  h-[70svh] '>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/David-Q-IV-Pennington.mp4" className='w-full h-full object-cover'></video>
        </div>
        <div className='w-[60%] box10  h-[70svh] '>   
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/David-Q-IV-Pennington.mp4" className='w-full h-full object-cover'></video>
        </div>
        <div className='w-[60%] box10  h-[70svh] '>   
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/David-Q-IV-Pennington.mp4" className='w-full h-full object-cover'></video>
        </div>
    </div>
  )
}

export default Page3