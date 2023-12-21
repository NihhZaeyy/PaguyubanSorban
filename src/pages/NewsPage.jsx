import React from "react";
import Navbar from "../components/Landing/Navbar/Navbar";
import NewsHero from "../components/News/NewsHero";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";
import NewsSection from "../components/News/NewsSection";

const NewsPage = () => {
  return (
    <div className="h-fit w-screen relative">
      <Navbar />
      <NewsHero />
      <News />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default NewsPage;
