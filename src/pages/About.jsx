import React from "react";
import Navbar from "../components/Landing/Navbar/Navbar";
import AboutHero from "../components/About/AboutHero";
import AboutSection from "../components/About/AboutSection";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div className="h-fit w-screen relative">
      <Navbar />
      <AboutHero />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
