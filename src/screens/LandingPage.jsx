import React from "react";
import FAQ from "../components/LandingPage/FAQ";
import Disclaimer from "../components/LandingPage/Disclaimer";
import Vslider from "../components/LandingPage/Vslider";
import Footer from "../components/LandingPage/Footer";
import About from "../components/LandingPage/About";
import Founder from "../components/LandingPage/Founder";
import Tokenmic from "../components/LandingPage/Tokenmic";
import Features from "../components/LandingPage/Features";
import Header from "../components/Header";
import Hero from "../components/LandingPage/Hero";

const LandingPage = () => {
  return (
    <div className="bTag">
      <div className="  mainContent">
        <div className="pageCon">
          <Header />
          <Hero />

          <Vslider />
          <Features />
          <About />
          <Founder />
          <Disclaimer />
          <FAQ />
          <Tokenmic />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
