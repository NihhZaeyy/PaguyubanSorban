import React from "react";
import Navbar from "../components/Landing/Navbar/Navbar";
import ContactHero from "../components/Contact/ContactHero";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="h-fit w-screen relative">
      <Navbar />
      <ContactHero />
      <Footer />
    </div>
  );
};

export default Contact;
