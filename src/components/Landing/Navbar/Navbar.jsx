import React from "react";
import paguyubanSorban from "../../../assets/paguyuban-sorban-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="w-screen h-[100px] p-6 flex justify-between items-center md:px-10 fixed z-30 top-0 left-0 bg-white drop-shadow-lg">
      <Link to="/">
        <div className="flex gap-2 justify-center items-center">
          <img className="w-[50px]" src={paguyubanSorban} alt="" />
          <div className="flex flex-col leading-none">
            <span className="font-medium">PAGUYUBAN </span>
            <span className="font-medium">SORBAN</span>
          </div>
        </div>
      </Link>
      <div className="lg:hidden">
        <GiHamburgerMenu size={30} />
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-10 text-lg font-medium">
          <Link to="/news">
            <li className="underlined_text">News</li>
          </Link>
          <Link to="/about">
            <li className="underlined_text">About Us</li>
          </Link>
          <Link to="/gallery">
            <li className="underlined_text">Gallery</li>
          </Link>
          <Link to="/member">
            <li className="underlined_text">Member</li>
          </Link>
          <Link to="/contact">
            <li className="underlined_text">Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-2">
          <button className="px-2 py-2 hover:bg-[#2a7734] rounded-lg hover:text-white">
            <IoSearch size={23} />
          </button>
          <button className="px-2 py-2 hover:bg-[#2a7734] rounded-lg hover:text-white">
            <FaRegHeart size={23} />
          </button>
          <button className="px-2 py-2 hover:bg-[#2a7734] rounded-lg hover:text-white">
            <FaRegUser size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
