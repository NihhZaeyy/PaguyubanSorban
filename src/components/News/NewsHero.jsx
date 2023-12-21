import React from "react";
import "./news.css";

const NewsHero = () => {
  return (
    <div className="background-news w-screen h-screen flex justify-center items-center px-6 md:px-10 xl:px-20">
      <div className="text-center text-white flex flex-col gap-2">
        <h1 className="text-[46px] lg:text-[60px] xl:text-[80px] leading-none font-bold">
          BERITA KAMI
        </h1>
        <p className="text-xl lg:text-2xl">
          Website Resmi Paguyuban Silaturrami Orang Banten
        </p>
      </div>
    </div>
  );
};

export default NewsHero;
