import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import logowhite from "../assets/logowhite.svg";
import { HiArrowRight } from "react-icons/hi";

type countdownDate = {
  day: number;
  hour: number;
  minutes: number;
  seconds: number;
};

type CountdownDate = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function Countdown(props: countdownDate) {
  return (
    <div
      className="order-3 col-span-3 text-primary2
    lg:col-span-1 lg:order-none self-end pt-7 md:pt-10 justify-self-center lg:pt-0 lg:self-center
    "
    >
      <p className="md:space-x-4 md:text-xl">
        <span className="text-black dark:text-primary2 md:pr-4">Commences on</span> 
        {/* <br className=" sm:hidden"/> */}
        <span className="inline-block p-2 mx-2 bg-white dark:bg-bodycopy dark:text-white text-black font-medium rounded-lg shadow-inner md:w-12 md:inline-flex md:justify-center">
          0{props.day}
        </span>
        <span>d</span>
        <span className="inline-block p-2 mx-2 bg-white text-black font-medium rounded-lg shadow-inner dark:bg-bodycopy dark:text-white md:w-12 md:inline-flex md:justify-center">
          {props.hour < 10 ? "0" : ""}
          {props.hour}
        </span>
        <span>h</span>
        <span className="inline-block p-2 mx-2 bg-white text-black font-medium rounded-lg shadow-inner dark:bg-bodycopy dark:text-white md:w-12 md:inline-flex md:justify-center">
          {props.minutes < 10 ? "0" : ""}
          {props.minutes}
        </span>
        <span>m</span>
        <span className="inline-block p-2 mx-2 bg-white text-black font-medium rounded-lg shadow-inner dark:bg-bodycopy dark:text-white md:w-12 md:inline-flex md:justify-center">
          {props.seconds < 10 ? "0" : ""}
          {props.seconds}
        </span>
        <span>s</span>
      </p>
    </div>
  );
}

function Navbar() {
  const [date, setDate] = useState<CountdownDate>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      const deadline = "January 29, 2022 10:00:00 GMT+0100";
      // console.log(Date.parse(deadline))
      // console.log(Date.parse(new Date()))
      let time = Date.parse(deadline) - Date.parse(new Date().toString());
      if (time < 0) {
        setDate({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        setDate({ days, hours, minutes, seconds });
      }
    }, 1000);
  }, [date]);

  return (
    <nav className="bg-teal4 dark:bg-black">
      <div className="p-4 py-6 grid grid-cols-3  font-dm-sans  container mx-auto lg:flex lg:justify-between lg:items-center">
        <div>
          <img src={logo} alt="" className=" dark:hidden " />
          <img src={logowhite} alt="" className="hidden dark:inline" />
        </div>
        <Countdown
          day={date.days}
          hour={date.hours}
          minutes={date.minutes}
          seconds={date.seconds}
        />
        <div className="col-span-2 justify-self-end lg:col-span-1">
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
    </nav>
  );
}

export default Navbar;
