import React from "react";
import Navbar from "../components/Landing/Navbar/Navbar";
import Hero from "../components/Landing/Hero/Hero";
import Mission from "../components/Landing/Mission/Mission";
import Partner from "../components/Landing/Partner/Partner";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

const Home = () => {
  return (
    <div className="h-fit w-screen relative">
      <Navbar />
      <Hero />
      <News />
      <Mission />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
