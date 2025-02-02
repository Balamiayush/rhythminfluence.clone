import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Page2 from './components/Page2';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef(null); // Store Lenis instance

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis; 

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable GSAP's lag smoothing to ensure smooth scrolling
    gsap.ticker.lagSmoothing(0);

    // Start Lenis loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis on unmount
      gsap.ticker.remove(() => lenis.raf(time * 1000)); // Remove GSAP ticker reference
    };
  }, []);

  return (
    <div className='w-full bg-[#000000] text-white'>
      <Header />
      <Page2 />
    </div>
  );
};

export default App;
