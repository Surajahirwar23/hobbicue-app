import React from "react";
import { IoMdLock } from "react-icons/io";
import googleLogo from "./assets/google.png";
import facebookLogo from "./assets/facebook.png";
import home1 from "./assets/homepng1.png"
import home2 from "./assets/homepng2.png"

const Hero = () => {
  return (
    <section className="bg-[#F7F5F9] h-full p-2">
      <div className="heroItems py-2 px-2 md:flex md:gap-4 md:p-12">
        <div className="left md:w-1/2  md:p-8">
          <h1 className="text-xl font-semibold py-3 md:py-6 md:text-2xl">
            Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
            <span className="text-[#8064A2]">passion</span>
          </h1>
          <p className="">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
            <span className="hidden md:block">
              Your hobby may be about visual or performing arts, sports, games,
              gardening, model making, cooking, indoor or outdoor activities…{" "}
              <br /><br />
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </span>
          </p>
          <div className="bottumImgs  flex mt-20 ">
              <img src={home1} alt="" 
              className="w-1/2 hidden md:block "/>
              <img src={home2} alt="" 
              className="w-1/2 hidden md:block "/>
            </div>
        </div>

        <div className="right md:w-1/2 md:p-6">
          <div className="rightItems mt-4 md:mt-1">
            <div className="signBtn flex items-center justify-center gap-12 py-6 ">
              <h1 className="font-semibold text-xl text-[#8064A2] ">Sign In</h1>
              <h1 className="font-semibold text-xl">Join In</h1>
            </div>
            <div className="inputsItems">
              <div className="inputs flex flex-col gap-6">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full py-1 px-2 rounded-md border-gray-100 border-2"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name=""
                  id=""
                  className="w-full py-1 px-2 rounded-md border-gray-100 border-2"
                  placeholder="Password"
                />

                <div className="conditions flex items-center justify-between mt-[-0.8rem]">
                  <div className="checkbox flex items-center gap-3">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="border-purple-400 border-2"
                    />
                    <p>Remember me</p>
                  </div>
                  <p className="flex items-center gap-1 ">
                    <IoMdLock className="opacity-50" />
                    Forgot password?
                  </p>
                </div>
                <button className="w-full bg-[#8064A2] text-white py-1 font-semibold rounded-lg mb-6 mt-2">
                  Continue
                </button>
              </div>
            </div>
            <div className="breack flex items-center justify-between gap-1 mb-6">
              <div className="w-[5.5rem] h-[2px] bg-slate-400"></div>
              <h1 className="font-bold mb-[3px]">Or connect with</h1>
              <div className="w-[5.5rem] h-[2px] bg-slate-400"></div>
            </div>
          </div>
          <div className="emailBtn  mt-4 ">
            <div className="googleBtn my-4">
              <h1 className=" flex items-center gap-12 border border-[#8064A2] p-2 font-semibold rounded-lg">
                {" "}
                <img src={googleLogo} alt="" className="md:ml-4" />
                <span className="  ml-4 lg:ml-20"> Continue with Google </span>
               
              </h1>
            </div>
            <div className="FacebookBtn my-4">
              <h1 className=" flex items-center gap-12 border border-[#8064A2] p-2 font-semibold rounded-lg">
                {" "}
                <img src={facebookLogo} alt=""  className="md:ml-4"/>
                <span className=" ml-4 lg:ml-20">  Continue with Facebook </span>
              
              </h1>
            </div>
            <div className="bottumImgs flex mt-20 md:hidden">
              <img src={home1} alt="" 
              className="w-1/2"/>
              <img src={home2} alt="" 
              className="w-1/2"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
