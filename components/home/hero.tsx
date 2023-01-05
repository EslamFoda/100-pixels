import React from "react";
import Image from "next/image";
import Nav from "../layout/nav";
function Hero() {
  return (
    <div className="p-3 relative rounded-lg overflow-hidden after:rounded-lg after:overflow-hidden  after:bg-black/70 after:absolute after:top-0 after:right-0 after:w-full after:h-full ">
      <Nav />
      <video
        src="/vid-hero2.mp4"
        autoPlay
        loop
        muted
        className="absolute   object-center object-cover  w-full h-full top-0 right-0"
      />
      <div className="relative pt-20 flex flex-col gap-y-60 h-full justify-between z-10 ">
        <div>
          <div className="text-white flex flex-col justify-center items-center">
            <div>
              <Image
                src="/small-logo.svg"
                className="lg:ml-6 md:ml-4 sm:ml-3 ml-2 mb-2 h-[27px] w-[27px] lg:w-[60px] lg:h-[60px] md:h-[40px]  md:w-[40px] sm:w-[35px] sm:h-[35px]"
                alt="logo"
                width={40}
                height={40}
              />
              <div className="flex ml-3 items-center">
                <span className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl">
                  GRAPHICS
                </span>
                <Image
                  src="arrow_right-down.svg"
                  alt="right down arrow"
                  className="rotate-90 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] w-[22px] h-[22px] translate-x-2 inline"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="self-start">
              <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl">
                {" "}
                MOTION DESIGN
              </h1>
            </div>
          </div>
        </div>
        <div className="text-white ">
          <div className="text-white flex pr-4 flex-col justify-center items-center">
            <div className="self-end">
              <div className="flex items-center">
                <span className="lg:text-4xl md:text-2xl sm:text-xl text-sm">
                  <span className="font-black">100 pixels</span> is a creative studio specialised on visual
                </span>
              </div>
            </div>
            <div className="self-start">
              <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-sm">
                communication, social media and commercial video projects. We
                work with brands and agencies using systematic approach and
                effective creative solutions.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
