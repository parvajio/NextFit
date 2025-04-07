import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full mx-auto lg:h-screen">
      {/* Navigation bar would go here */}

      {/* Main grid layout */}
      <div className="flex justify-center items-center mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 w-full">
          {/* Main content area - takes up 2/3 of the width on large screens */}
          <div className="lg:col-span-2  bg-slate-800 min-h-[500px] hero-main">
            <div className="relative w-full transition-all duration-300 h-full group">
              <Image
                loading="lazy"
                src="/images/Gym1.jpg"
                alt="Next Fit"
                fill
                className="hero-img"
              />
              <div className="hero-bg">
                <h2 className="text-[min(10vw,80px)]">NextFit</h2>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-200 uppercase font-semibold px-8">
                Shop Now
              </Button>
              </div>
            </div>
          </div>

          {/* Sidebar - takes up 1/3 of the width on large screens */}
          <div className="lg:col-span-1 grid grid-rows-2 gap-1">
            {/* Top sidebar section */}
            <div className="relative bg-slate-800 min-h-[240px] group transition-all duration-300 rounded-md overflow-hidden">
              <Image
                loading="lazy"
                src="/images/gym2.jpg"
                alt="Oysters"
                fill
                className="hero-img"
              />
              <div className="hero-bg">
                <h2 className="text-[min(10vw,30px)]">100 % Authentic</h2>
                <p className="mb-4">Embrace authenticity with NextFit.</p>
              </div>
            </div>

            {/* Bottom sidebar section */}
            <div className="relative bg-slate-700 min-h-[240px] group transition-all duration-300 rounded-md overflow-hidden">
              <Image
                loading="lazy"
                src="/images/gym.jpg"
                alt="Rewards"
                fill
                className="hero-img"
              />
              <div className="hero-bg">
                <h2 className="text-[min(10vw,25px)]">Extensive Warranty</h2>
                <p className="mb-4 w-[80%] text-center">
                  Elevate your fitness journey with confidence – choose NextFit
                  for lasting quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
