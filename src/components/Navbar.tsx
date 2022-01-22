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
    md:col-span-1 md:order-none self-end pt-7 lg:pt-0 lg:self-center
    "
    >
      <p>
        <span className="text-black dark:text-primary2">Commences on</span> 
        {/* <br className=" sm:hidden"/> */}
        <span className="inline-block p-2 mx-2 bg-white dark:bg-bodycopy dark:text-white text-black font-medium rounded-lg shadow-inner">
          0{props.day}
        </span>
        <span>d</span>
        <span className="inline-block p-2 mx-2 bg-white text-black font-medium rounded-lg shadow-inner dark:bg-bodycopy dark:text-white">
          {props.hour < 10 ? "0" : ""}
          {props.hour}
        </span>
        <span>h</span>
        <span className="inline-block p-2 mx-2 bg-white text-black font-medium rounded-lg shadow-inner dark:bg-bodycopy dark:text-white">
          {props.minutes < 10 ? "0" : ""}
          {props.minutes}
        </span>
        <span>m</span>
        <span className="inline-block p-2 mx-2 bg-white text-black font-medium rounded-lg shadow-inner dark:bg-bodycopy dark:text-white">
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
      const deadline = "January 29, 2022";
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
      <div className="p-4 py-6 grid grid-cols-3  font-dm-sans  container mx-auto">
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
        <div className="col-span-2 justify-self-end md:col-span-1">
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
    </nav>
  );
}

export default Navbar;
