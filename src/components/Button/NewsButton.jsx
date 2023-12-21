import React from "react";
import { useNavigate } from "react-router-dom";

const NewsButton = () => {
  const navigateToNews = useNavigate();
  return (
    <>
      <button
        onClick={() => navigateToNews("/news")}
        className="px-6 py-2 border-[#fff] border rounded-3xl hover:bg-[#ffdb61] hover:text-[#222222] hover:border-[#000] duration-300 sm:w-1/2 lg:w-[60%] mt-2"
      >
        Baca Selengkapnya
      </button>
    </>
  );
};

export default NewsButton;
