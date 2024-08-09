import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="links  md:justify-around md:flex md:flex-wrap gap-8 p-6 mt-12">
        <ul>
          <li>
            <h3 className="font-bold mb-4">Hobbycue</h3>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Our services</a>
          </li>
          <li>
            <a href="">Work with Us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className="font-bold mb-4">How Do I</h3>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Add a Listing</a>
          </li>
          <li>
            <a href="">Claim Listing</a>
          </li>
          <li>
            <a href="">Post a Query</a>
          </li>
          <li>
            <a href=""> Add a Blog Post</a>
          </li>
          <li>
            <a href="">Other Queries</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className="font-bold mb-4"> Quick Links</h3>
          </li>
          <li>
            <a href="">Listings</a>
          </li>
          <li>
            <a href="">Blog Posts</a>
          </li>
          <li>
            <a href="">Shop / Store</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </ul>
        <ul className=" flex flex-col gap-8">
          <h3 className="font-bold ">Social Media</h3>
          <li className="flex items-center gap-6">
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700 ">
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <FaPinterest />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <IoLogoGoogleplus />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <FaYoutube />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <BiLogoTelegram />
              </a>
            </li>
            <li className="bg-slate-200 rounded-full p-1 opacity-75 text-gray-700">
              <a href="">
                <MdEmail />
              </a>
            </li>
          </li>

          <div className="inpubox w-full">
            <h3 className="font-bold mb-4"> Invite Friends</h3>
            <div className="inputElement  ">
              <input
                type="text"
                className="
          font-light border-[1px] border-purple-500 rounded-l outline-none pr-12 pl-4 py-[6px]  "
                placeholder="Search here.."
              />
              <button className="text-white w-[20px]! bg-[#8064A2]  px-4 py-[7px]  rounded-r-md font-semibold cursor-pointer">
                Invite
              </button>
            </div>
          </div>
        </ul>
      </div>
      <div className="devName bg-slate-100 p-4 my-2">
        <h1 className=" font-semibold text-2xl text-center">@ Purple Cues Private Limited</h1>
      </div>
    </>
  );
};

export default Footer;
