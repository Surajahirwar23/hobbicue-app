import React from "react";
import poster from "./assets/Ellipse 12.png";
import { IoPlay } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";

const Testimonials = (props) => {
  return (
    <>
      <div className="testimonialsContaners p-8 bg-[#f8f0ff] mt-24 ">
        <div className="testimonialsContaner border h-fit border-slate-300 rounded-lg p-8 text-center xl:text-left ">
          <div className="header flex items-center justify-center text-2xl font-bold gap-3 xl:justify-start ">
            <div className="text-[#8064A2]"> {props.icon}</div>
            <h1 className="text-center"> {props.title}</h1>
          </div>
          <p className="py-4">{props.description}</p>
          <div className="poster flex justify-center gap-8 mt-6 ">
            <img src={poster} alt="" />
            <div className="postName">
              <h2 className="text-[#8064A2]"> Shubh Nagarajan</h2>
              <h5 className="text-[#0096C8]">Classical Dancer</h5>
            </div>
          </div>
          <div className="playCard lg:w-1/2 lg:items-center lg:m-auto lg:mt-12 flex justify-between items-center text-white px-4 py-3 my-4 mt-8    rounded-xl bg-[#6d538d]">
            <div className="playIcon bg-white text-[#8064A2] rounded-full flex items-center justify-center p-1 cursor-pointer ">
              <IoPlay />
            </div>
            <div className="playTimer flex items-center gap-6">
              <p>0:00</p>
              <div className="playPoster flex items-center justify-center">
                <IoMicOutline className=" mr-[-14px] z-10 text-xl mb-[-8px]" />
                <img src={poster} alt="" className="w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
