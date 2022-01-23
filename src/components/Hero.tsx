import React, { useEffect, useRef } from "react";
import greencoinshero from "../assets/greencoinshero.svg";

import celeb from "../assets/celeb.svg";
import {
  HiArrowRight,
  HiCalendar,
  HiClock,
  HiLocationMarker,
} from "react-icons/hi";
import { create } from "@lottiefiles/lottie-interactivity";

import "@lottiefiles/lottie-player";

function Hero() {
  const containerRef: any = useRef<HTMLDivElement>(null);
  const container2Ref: any = useRef<HTMLDivElement>(null);
  const container3Ref: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLInputElement>) => {

        // Hide Initial Image Display
        container3Ref.current.style.display = "none";

        // 4. configure the interactivity library
        create({
          mode: "scroll",
          player: "#firstLottie",
          actions: [
            {
              visibility: [0, 1],
              type: "loop",
              frames: [0, 450],
            },
          ],
        });
      }
    );
    container2Ref.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLInputElement>) => {
         // Hide Initial Image Display
         container3Ref.current.style.display = "none";
        
        // 4. configure the interactivity library
        create({
          mode: "scroll",
          player: "#secondLottie",
          actions: [
            {
              visibility: [0, 1],
              type: "loop",
              frames: [0, 450],
            },
          ],
        });
      }
    );

    return () => {};
  }, [container2Ref, containerRef,  container3Ref]);

  return (
    <div className="dark:bg-black">
      <section
        className="container mx-auto px-5 pt-9 md:pt-12 lg:flex"
      >
        <div
          className="font-dm-sans py-4 lg:w-1/2 lg:self-center">
          <div
            className="text-center space-y-6 
          lg:text-left md:space-y-10 lg:space-y-7
        "
          >
            <p
              className="font-medium text-18
          dark:text-darktextHD
          "
            >
              The money event of{" "}
              <span className="text-primary2 font-bold">2022 </span>{" "}
              <span>
                <img src={celeb} alt="" className="inline" />
              </span>
            </p>
            <h1
              className="font-tomato text-4xl font-semibold md:text-7xl
          lg:text-7xl
          dark:text-darktextHD
          "
            >
              How to invest safely and successfully in 2022.
            </h1>
            <p className="font-medium text-18 dark:text-darktextHD">
              Where money meets direction.
            </p>
            <div className="bg-grey flex space-x-2 text-base items-center shadow-inset  justify-center md:space-x-7 p-4 rounded-lg w-fit 
            md:px-8 md:py-6
            dark:bg-bodycopy dark:text-white mx-auto lg:mx-0 lg:w-fit md:text-lg">
              <div className="flex items-center space-x-1 md:space-x-3">
                <HiCalendar className="text-primary2" />
                <p>Jan 29</p>
              </div>
              <div className="flex items-center space-x-1 md:space-x-3">
                <HiClock className="text-primary2" />
                <p>10:00am</p>
              </div>
              <div className="flex items-center space-x-1 md:space-x-3">
                <HiLocationMarker className="text-primary2" />
                <p>Civic Center, Lagos</p>
              </div>
            </div>
            <a
              href="https://tix.africa/rise22"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 bg-primary2 font-bold text-base text-white inline-block rounded-md"
            >
              Register Now{" "}
              <HiArrowRight className="pl-2 inline text-xl font-bold" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={greencoinshero} alt="" ref={container3Ref} className="dark:hidden"/>
          <div className="dark:hidden">
            <lottie-player
              ref={containerRef}
              id="firstLottie"
              mode="normal"
              src="https://assets10.lottiefiles.com/packages/lf20_amzjyz79.json"
            ></lottie-player>
          </div>

          <div className="hidden dark:block">
            <lottie-player
              ref={container2Ref}
              id="secondLottie"
              mode="normal"
              src="https://assets5.lottiefiles.com/packages/lf20_ronxlob3.json"
            ></lottie-player>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
