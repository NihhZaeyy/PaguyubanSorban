import React from "react";
import Navbar from "../components/Landing/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import GalleryHero from "../components/Gallery/GalleryHero";
import GallerySection from "../components/Gallery/GallerySection";

const Gallery = () => {
  return (
    <div className="h-fit w-screen relative">
      <Navbar />
      <GalleryHero />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;
