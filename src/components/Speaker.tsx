import React from "react";
import eke from "../assets/speakers/EKE.png";
import greencoins from "../assets/greencoins.svg";
import { HiChevronRight } from "react-icons/hi";

function SpeakerCard() {
  return (
    <div>
      <div className="bg-primary2 h-80 lg:h-56 shadow-speaker dark:shadow-none">
        <img
          src={eke}
          alt=""
          className="w-full object-cover object-top bg-primary2 h-full pt-6"
        />
      </div>
      <div className="px-6 bg-white dark:bg-speakercardtext h-32 flex items-center justify-between lg:flex-col lg:py-4 ">
        <p className="font-bold font-dm-sans text-xl dark:text-darktext">
          Eke <span className="italic font-normal">Urum</span>
        </p>
        <HiChevronRight className="hover:cursor box-content rounded-full bg-darktextHD dark:bg-profile p-3 text-xl dark:text-white" />
      </div>
    </div>
  );
}

function Speaker() {
  return (
    <div className="bg-speaker dark:bg-featdark lg:py-20">
      <section className="container mx-auto p-4 lg:py-16 grid-cols-6 lg:grid">
        <div className="lg:col-span-2">
          <p
            className="text-center font-tomato font-semibold text-4xl
    lg:text-6xl my-8 mt-8 dark:text-darktextHD lg:text-left col-span-2 lg:w-3/4"
          >
            Featured Speakers
          </p>
          <img src={greencoins} alt="" className="hidden lg:inline" />
        </div>
        <div className="col-span-4 lg:flex lg:space-x-5 lg:space-y-0 space-y-7">
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </div>
      </section>
      <img src={greencoins} alt="" className="lg:hidden" />
    </div>
  );
}

export default Speaker;
