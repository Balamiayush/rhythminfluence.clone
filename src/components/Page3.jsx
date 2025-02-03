import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
    useGSAP(() => {
        gsap.from(".video", {
            xPercent: -200, // Adjusted for better animation
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".main",
                start: "top 50%",
                end: "bottom top",
                scrub: 1,
            }
        });
    }, []);

    return (
        <div className='w-[200%] main flex gap-3 h-screen items-center justify-center relative'>
            {[...Array(11)].map((_, index) => (
                <div key={index} className="video w-[10%] h-[50svh] bg-red-500"></div>
            ))}
        </div>
    );
};

export default Page3;
