'use client';

import { useEffect, useRef } from "react";
export default function HomePage() {

  const sliderRef = useRef(null);
  useEffect(()=>{
    const slider = sliderRef.current;
    let animation;

  const animate = ()=> {
    slider.scrollleft += 1;
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
    animation = requestAnimationFrame(animate);
  }
  animation = requestAnimationFrame(animate);
  return () => {
    cancelAnimationFrame(animation);
  };

  },[])
  const texts = [ "Welcome to Web3", "Your Assets Your Control"];
  
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      

      <main className="max-w-6xl mx-auto p-4">
        
        <div className="h-48 mb-8 bg-gray-800 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
          <div className="overflow-hidden white-space-nowrap py-4 mt-4">
            {/* <h2 className="text-5xl text-center ">Welcome to Web3</h2> */}

            <div className="flex w-max animate-scroll gap-16 text-4xl lg:text-8xl font-semibold text-gray-900 dark:text-white" ref={sliderRef}>
              {[...texts, ...texts].map((text, index) => (
                <span key={index} className="px-4">{text}</span>
              ))}
            </div>
            
          </div>
        </div>
        </main>

        
</div>
        );
}