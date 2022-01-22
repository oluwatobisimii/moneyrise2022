import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Speaker from "../components/Speaker";
import Venue from "../components/Venue";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Speaker />
      <Venue />
      <Footer />
    </>
  );
}

export default Home;
