import React from "react";
import { RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";

import logowhite from "../assets/logowhite.svg";
import rise from "../assets/rise.svg";
import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.svg";

function Footer() {
  return (
    <div className="bg-black lg:py-14 p-4 py-7">
      <footer className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center md:my-9">
        <div className="mt-9 space-y-6 lg:mt-0 lg:space-y-12 md:mt-0">
          <div className="flex space-x-7
          md:items-center lg:items-start lg:flex-col lg:space-x-0 lg:space-y-6">
            <div className="flex space-x-4">
              <RiInstagramLine className="box-content rounded-full bg-profile p-3 text-xl text-white" />
              <RiTwitterLine className="box-content rounded-full bg-profile p-3 text-xl text-white" />
            </div>
            <img src={rise} alt="" className="w-1/2"/>
          </div>
          <div
            className="flex space-x-4
        "
          >
            <a
              href="https://apps.apple.com/ng/app/rise-vest/id1486295645"
              target="_blank"
              rel="noreferrer"
            >
              <img src={appstore} alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.rise.mobile"
              target="_blank"
              rel="noreferrer"
            >
              <img src={playstore} alt="" />
            </a>
          </div>
          <p className="text-allright font-bold">
            All right reserved 2022 <span>&#169;</span>
          </p>
        </div>

        <div
          className="rounded-md p-6 space-y-4 border-2
        border-darkstroke w-fit
      text-darktext lg:w-fit lg:items-stretch"
        >
          <div>
            <img src={logowhite} alt="" />
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
      </footer>
    </div>
  );
}

export default Footer;
