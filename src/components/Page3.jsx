import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
    const { scrollTrigger } = useGSAP();
    useGSAP(()=>{
        gsap.from(".box10",{
            scrollTrigger:{
                trigger:".main",
                start:"top top",
                end:"bottom bottom",
                scrub:true,
                markers:true,
                pin:true,
                pinSpacing:false,
            },
            x:2000,
            opacity:0.5,
            ease:"power1.inOut"
        })

    },[])
  return (
    <div className='w-[200%] overflow-y-hidden main flex flex-row h-[200vh] bg-red-500'>
        <div className='w-[50%] box10  h-[50vh] bg-blue-500'>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/Mariah-Short_Full.mp4" className='w-[100%] h-[100%]'></video>
        </div>
        <div className='w-[50%] box10  h-[50vh] bg-green-500'>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/Kalen-Allen-Oleato.mp4" className='w-[100%] h-[100%]'></video>
        </div>
        <div className='w-[50%] box10  h-[50vh] bg-yellow-500'>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/HappyKelli.mp4" className='w-[100%] h-[100%]'></video>
        </div>
        <div className='w-[50%] box10  h-[50vh] bg-purple-500'>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/Kat_Final.mp4" className='w-[100%] h-[100%]'></video>
        </div>
        <div className='w-[50%] box10  h-[50vh] bg-pink-500'>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/NBA_Go-Biggie_1.mp4" className='w-[100%] h-[100%]'></video>
        </div>       
        <div className='w-[50%] box10  h-[50vh] bg-pink-500'>
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/David-Q-IV-Pennington.mp4" className='w-[100%] h-[100%]'></video>
        </div>
        <div className='w-[50%] box10  h-[50vh] bg-pink-500'>   
            <video src="https://servd-rhythm-influence.b-cdn.net/staging/David-Q-IV-Pennington.mp4" className='w-[100%] h-[100%]'></video>
        </div>
    </div>
  )
}

export default Page3