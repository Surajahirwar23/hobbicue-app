import React from "react";
import "../App.css";
import Logo from "./assets/Logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCompass } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineStars } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav
        className=" nav 
    flex items-center justify-between  p-2 xl:px-20 sm:px-8 h-[80px]"
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" className="w-44 lg:w-80 xl:w-full" />
        </div>

        {/* Search  */}
       <div className="navItems flex items-center sm:justify-between gap-[4vw] lg:gap-6 xl:gap-14    ">

       <div className="search_item flex items-center text-3xl font-bold  rounded overflow-hidden sm:bg-[#8064A2] xl:ml-4">
          <input type="text" className=" hidden sm:w-[30vw]  lg:w-48
          sm:block sm:text-xl sm:font-light sm:border-[1px] sm:border-slate-200 outline-none px-4 py-[6px] sm:overflow-hidden xl:pr-16 xl:py-2 xl:w-[20vw] "  
          placeholder="Search here.."/>
          <IoSearchSharp className="sm:text-white sm:p-1 w-10 text-[#8064A2] xl:w-12 cursor-pointer" />
        </div>
        {/* Explore and hobby */}
       <div className="hidden lg:block">
       <div className="item2 flex items-center gap-3 xl:gap-6 text-xl font-semibold">

          <div className="item2.1  flex items-center gap-1 xl:gap-3 cursor-pointer">
            <IoMdCompass  className="text-[#8064A2]"/>
            <h1>Explore</h1>
            <IoChevronDownOutline className="mt-1 text-[#939CA3]  "/>
          </div>
          <div className="item2.2 flex items-center gap-1 xl:gap-3 
          cursor-pointer">
            <MdOutlineStars className="text-[#8064A2]" />
            <h1>Hobby</h1>
            <IoChevronDownOutline className="mt-1 text-[#939CA3]"/>
          </div>
        </div>
       </div>

        {/* 3Icons */}
        <div className="item3 flex items-center gap-4 lg:gap-[8px] text-[#8064A2] text-3xl xl:gap-7">
          <IoBookmark className="hidden md:block cursor-pointer " />
          <FaBell className="cursor-pointer" />
          <IoCart className="hidden md:block text-4xl cursor-pointer " />
        </div>
        <FiMenu className=" lg:hidden text-[#8064A2] text-3xl" />
        <button className="hidden w-24 lg:block font-semibold border-gray-400 border-[1px] px-4 py-2 rounded-md">Sign In</button>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
