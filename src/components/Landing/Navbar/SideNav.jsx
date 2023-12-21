import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import "./Navbar.css";

const SideNav = ({ isClose }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" flex flex-col px-6 sm:px-10  py-10 sm:py-16 text-white ">
      <div className="pb-2 text-white text-[12px] border-b-white border-b-2 flex flex-col gap-2">
        <div className="flex justify-end">
          <GrClose
            onClick={isClose}
            className="rounded-full p-1 border border-white"
            size={30}
          />
        </div>
        <p>NAVIGATION</p>
      </div>
      <ul className="flex flex-col gap-3 text-lg font-medium text-white mt-6">
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/member">
          <li>Member</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className="mt-6 text-[12px] pb-2 border-b border-b-[#fff]">
        <p>SOCIAL MEDIA</p>
      </div>
      <div className="flex flex-col gap-2 mt-4 text-[12px] sm:text-base">
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
      <div className="hidden sm:block">
        <div className="py-6 flex justify-between items-center text-base">
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
    </div>
  );
};

export default SideNav;
