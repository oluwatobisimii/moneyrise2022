import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import logowhite from "../assets/logowhite.svg";
import { HiArrowRight } from "react-icons/hi";

import { create } from "@lottiefiles/lottie-interactivity";
import "@lottiefiles/lottie-player";

function About() {
  const container4Ref: any = useRef<HTMLDivElement>(null);
  const container5Ref: any = useRef<HTMLDivElement>(null);
  const container6Ref: any = useRef<HTMLDivElement>(null);
  const container7Ref: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container4Ref.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // 4. configure the interactivity library
        create({
          mode: "scroll",
          container: "#aboutContainer",
          player: "#thirdLottie",
          actions: [
            {
              visibility: [0, 0.5],
              type: "seek",
              frames: [0, 30],
            },
          ],
        });
      }
    );
    container5Ref.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // 4. configure the interactivity library
        create({
          mode: "scroll",
          player: "#fourthLottie",
          actions: [
            {
              visibility: [0, 0.5],
              type: "seek",
              frames: [0, 30],
            },
          ],
        });
      }
    );
    container6Ref.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // 4. configure the interactivity library
        create({
          mode: "scroll",
          player: "#lottie5",
          actions: [
            {
              visibility: [0.1, 0.5],
              type: "seek",
              frames: [0, 30],
            },
          ],
        });
      }
    );
    container7Ref.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // 4. configure the interactivity library
        create({
          mode: "scroll",
          player: "#lottie6",
          actions: [
            {
              visibility: [0.1, 0.5],
              type: "seek",
              frames: [0, 30],
            },
          ],
        });
      }
    );

    return () => {};
  }, []);

  return (
    <div className="bg-aboutgrey font-dm-sans p-5 dark:bg-darker">
      <section
        className="container mx-auto lg:grid lg:grid-cols-6 lg:py-16"
        id="aboutContainer"
      >
        <div className="lg:col-span-2">
          <p
            className="text-center font-tomato font-semibold text-4xl 
            lg:text-6xl my-8 mt-8 dark:text-darktextHD lg:text-left p-4
            lg:mt-0 lg:mb-0 lg:p-0"
          >
            About the Conference
          </p>
          <div className="hidden lg:inline">
            <div className="dark:hidden">
              <lottie-player
                ref={container4Ref}
                id="thirdLottie"
                mode="normal"
                src="https://assets8.lottiefiles.com/packages/lf20_bvya7txw.json"
              ></lottie-player>
            </div>

            <div className="hidden dark:inline">
              <lottie-player
                ref={container5Ref}
                id="fourthLottie"
                mode="normal"
                src="https://assets10.lottiefiles.com/packages/lf20_tniyeuqv.json"
              ></lottie-player>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:px-4">
          <div
            className=" space-y-7 mt-7 md:flex md:flex-wrap md:space-y-0 md:gap-5">
            <div className="rounded-md p-6 space-y-4 border-2 dark:border-darkstroke dark:text-darktext md:w-45% md:items-stretch">
              <p className="font-bold text-lg">Answer to your questions</p>
              <p className="text-base">
                If you have questions about investing well, avoiding scams,
                growing your money and achieving your financial goals in 2022,
                this is the event for you.
              </p>
            </div>
            <div
              className="rounded-md p-6 space-y-4 border-2 dark:border-darkstroke dark:text-darktext md:w-45% md:items-stretch">
              <p className="font-bold text-lg">
                Invest safely and successfully
              </p>
              <p className="text-base">
                The Moneyrise conference is an investment and wealth management
                event designed to help you understand how to invest safely and
                successfully in 2022.{" "}
              </p>
            </div>
            <div
              className="rounded-md p-6 space-y-4 border-2
        dark:border-darkstroke
        dark:text-darktext md:w-45% md:items-stretch"
            >
              <p className="font-bold text-lg">Powered by Risevest</p>
              <p className="text-base">
                If This is an event you do not want to miss, powered by
                Risevest, one of the leading wealth-tech companies in the
                country.{" "}
              </p>
            </div>
            <div
              className="rounded-md p-6 space-y-4 border-2
        dark:border-darkstroke
        dark:text-darktext md:w-45% md:items-stretch"
            >
              <div>
                <img src={logo} alt="" className=" dark:hidden " />
                <img src={logowhite} alt="" className="hidden dark:inline" />
              </div>
              <a
                href="https://tix.africa/rise22"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 bg-primary2 font-bold text-base text-white inline-block rounded-md hover:bg-btnhover group"
              >
                Register Now{" "}
                <HiArrowRight className="pl-2 inline text-xl font-bold group-hover:animate-btnbounce" />
              </a>
            </div>
          </div>


          {/* What are we here for */}
          <p className="font-bold text-2xl py-6 pt-10 dark:text-darktext">Why you should attend</p>

          <div className="text-xl leading-8 md:text-2xl border-y-2 border-y-stroke grey py-7 dark:border-y-darkstroke dark:text-darktext flex flex-col space-y-6">
            <div className="flex space-x-4 md:items-center justify-between">
              <div className="bg-primary2 border-8 rounded-full w-4 h-4 box-content animate-pulse border-white"></div>
              <p className="w-10/12">
                Gain practical insights on how to invest from seasoned
                investors. The Moneyrise conference prioritizes value.
              </p>
            </div>

            <div className="flex space-x-4 md:items-center justify-between">
              <div className="bg-primary2 border-8 rounded-full w-4 h-4 box-content animate-pulse border-white"></div>
              <p className="w-10/12">
                Great networking opportunities. It is a melting pot of seasoned
                professionals, high-level stakeholders in wealth management.
              </p>
            </div>

            <div className="flex space-x-4 md:items-center justify-between">
              <div className="bg-primary2 border-8 rounded-full w-4 h-4 box-content animate-pulse border-white"></div>
              <p className="w-10/12">
                Learn about key trends in the wealth management space and what
                people should start paying attention to in the new year.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:hidden w-3/4 mx-auto -mb-5 border-0">
          <div className="dark:hidden">
            <lottie-player
              ref={container6Ref}
              id="lottie5"
              mode="normal"
              src="https://assets8.lottiefiles.com/packages/lf20_bvya7txw.json"
            ></lottie-player>
          </div>

          <div className="hidden dark:block">
            <lottie-player
              ref={container7Ref}
              id="lottie6"
              mode="normal"
              src="https://assets10.lottiefiles.com/packages/lf20_tniyeuqv.json"
            ></lottie-player>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
