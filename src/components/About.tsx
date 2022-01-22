import React from "react";
import orangecoin from "../assets/orangecoins.svg";
import logo from "../assets/logo.svg";
import logowhite from "../assets/logowhite.svg";
import { HiArrowRight } from "react-icons/hi";


function About() {
  return (
    <div
      className="bg-aboutgrey font-dm-sans p-5 dark:bg-darker
       
      "
    >
      <section className="container mx-auto lg:grid lg:grid-cols-6 lg:py-16">
        <div className="lg:col-span-2">
          <p
            className="text-center font-tomato font-semibold text-4xl
    lg:text-6xl
    my-8 mt-8
        dark:text-darktextHD
        lg:text-left
    "
          >
            About the Conference
          </p>
          <div className="hidden lg:block">
            <img src={orangecoin} alt="" />
          </div>
        </div>
        <div className="col-span-4">
          <p
            className="text-xl leading-8 md:text-2xl border-y-2 border-y-stroke grey py-7
    dark:border-y-darkstroke
    dark:text-darktext
    "
          >
            Gain practical insights on how to invest from seasoned investors.
            The Moneyrise conference prioritizes value. Great networking
            opportunities. It is a melting pot of seasoned professionals,
            high-level stakeholders in wealth management. Learn about key trends
            in the wealth management space and what people should start paying
            attention to in the new year.
          </p>

          <div
            className=" space-y-7 mt-7
          lg:flex lg:flex-wrap lg:space-y-0 lg:gap-5
          "
          >
            <div
              className="rounded-md p-6 space-y-4 border-2
        dark:border-darkstroke dark:text-darktext lg:w-2/5 lg:items-stretch">
              <p className="font-bold text-lg">Answer to your questions</p>
              <p className="text-base">
                If you have questions about investing well, avoiding scams,
                growing your money and achieving your financial goals in 2022,
                this is the event for you.
              </p>
            </div>
            <div
              className="rounded-md p-6 space-y-4 border-2
        dark:border-darkstroke
        dark:text-darktext lg:w-2/5 lg:items-stretch"
            >
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
        dark:text-darktext lg:w-2/5 lg:items-stretch"
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
        dark:text-darktext lg:w-2/5 lg:items-stretch"
            >
              <div>
                <img src={logo} alt="" className=" dark:hidden " />
                <img src={logowhite} alt="" className="hidden dark:inline" />
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
        </div>
        <div className=" lg:hidden w-3/4 mx-auto -mb-5">
          <img src={orangecoin} alt="" />
        </div>
      </section>
    </div>
  );
}

export default About;
