import React, { useState, useEffect } from "react";
import logoTesting from "/src/assets/paguyuban-sorban-logo.png";
import { BsArrowDownLeft } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-16 px-6 md:px-10 xl:px-[150px] bg-[#1e5044] text-white">
      <div className="flex justify-between text-white">
        <div className="flex gap-2 justify-center items-center">
          <img className="w-[50px]" src={logoTesting} alt="" />
          <div className="flex flex-col leading-none ">
            <span className="font-medium">PAGUYUBAN </span>
            <span className="font-medium">SORBAN</span>
          </div>
        </div>
        <BsArrowDownLeft size={40} />
      </div>
      <div className="mt-10 text-[12px]  font-medium pb-2 border-b border-b-[#fff]">
        <p>CONTACT DETAIL</p>
      </div>
      <div className="py-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 font-medium">
        <button className="px-6 py-2 border-[#fff] border rounded-3xl hover:bg-[#ffdb61] hover:text-[#222222] hover:border-[#000] duration-300 flex gap-2 items-center">
          <BiLogoGmail />
          paguyubansorban@gmail.com
        </button>
        <button className="px-6 py-2 border-[#fff] border rounded-3xl hover:bg-[#ffdb61] hover:text-[#222222] hover:border-[#000] duration-300 flex gap-2 items-center">
          <FaWhatsapp />
          +90 123 456 87 97
        </button>
      </div>
      <div className="mt-6 text-[12px]  font-medium pb-2 border-b border-b-[#fff]">
        <p>SOCIAL MEDIA</p>
      </div>
      <div className="py-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-medium">
        <button className="px-6 py-2 border-[#fff] border rounded-3xl hover:bg-[#ffdb61] hover:text-[#222222] hover:border-[#000] duration-300 flex gap-2 items-center">
          <BsInstagram />
          <p>Paguyuban_Sorban</p>
        </button>
        <button className="px-6 py-2 border-[#fff] border rounded-3xl hover:bg-[#ffdb61] hover:text-[#222222] hover:border-[#000] duration-300 flex gap-2 items-center">
          <SlSocialTwitter />
          <p>Paguyuban_Sorban</p>
        </button>
        <button className="px-6 py-2 border-[#fff] border rounded-3xl hover:bg-[#ffdb61] hover:text-[#222222] hover:border-[#000] duration-300 flex gap-2 items-center">
          <BsFacebook />
          <p>Paguyuban_Sorban</p>
        </button>
      </div>
      <div className="py-6 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-[12px]">VERSION</p>
          <p>2023 &#x24B8; Edition</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[12px]">LOCAL TIME</p>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[12px]">LOCATION</p>
          <a href="https://maps.app.goo.gl/AxVoG5UmTgbp3zcy8" target="_blank">
            <p>West Java</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
