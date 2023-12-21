import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Landing/Navbar/Navbar";
import MemberHero from "../components/Member/MemberHero";

const Member = () => {
  return (
    <div className="h-fit w-screen relative">
      <Navbar />
      <MemberHero />
      <Footer />
    </div>
  );
};

export default Member;
