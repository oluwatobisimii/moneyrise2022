import React from "react";

import { HiLocationMarker } from "react-icons/hi";
import civicLight from "../assets/civicLight.svg";
import civicDark from "../assets/civicDark.svg";

function Venue() {
  return (
    <div className=" bg-white dark:bg-dark4 relative overflow-y-hidden lg:py-32">
      <section className="mx-auto container px-4 py-7">
        <div className="font-dm-sans item-stretch space-y-4 lg:space-y-6 w-2/3 lg:w-1/5">
          <HiLocationMarker className="text-6xl text-primary2" />
          <p className="font-bold text-lg lg:text-2xl dark:text-darktextHD">The Civic centre</p>
          <p className="font-normal text-lg lg:text-2xl dark:text-darktextHD">
            Ozumba Mbadiwe road Victoria Island, Lagos.
          </p>
          <a
            href="https://www.google.com/maps/place/The+Civic+Centre/@6.4366069,3.4150108,19z/data=!4m5!3m4!1s0x103b8bf8651d78d1:0x33cf456abeeb2398!8m2!3d6.436355!4d3.415499"
            target="_blank"
            rel="noreferrer"
            className="text-base dark:text-darktextHD inline-block"
          >
            view on map
          </a>
        </div>
      </section>
      <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-3/5">
        <img src={civicLight} alt="" className="dark:hidden w-full" />
        <img src={civicDark} alt="" className="hidden dark:block w-full" />
      </div>
    </div>
  );
}

export default Venue;
