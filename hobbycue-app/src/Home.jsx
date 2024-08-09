import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Testimonials from "./components/Testimonials";
import Bottum from "./components/Bottum";
import Footer from "./components/Footer";
import { MdGroups } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdShoppingBasket } from "react-icons/md";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cardContainer  box-border md:grid md:grid-cols-2 xl:w-full xl:text-left xl: justify-self-start">
        <Cards
          icon={<MdGroups />}
          title="People"
          description="Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or colaborator."
          button="Connect"
        />
        <Cards
          icon={<FaLocationDot />}
          title="Place"
          description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
          button="Meet Up"
        />
        <Cards
          icon={<MdShoppingBasket />}
          title="Product"
          description="Find equipment or supplies required for your hobby. Buy rent or borrow from shops, online stores or from community members."
          button="Get it"
        />
        <Cards
          icon={<BsFillCalendar2CheckFill />}
          title="Program"
          description="Find events, meetups and workshops related to the hobby. Register or buy tickets online."
          button="Attend"
        />
      </div>
     <div className="anotherCard bg-blue-50">
     <Cards
          icon={<MdAddCircleOutline />}
          title="Add your own"
          description="Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page."
          button="Add new"
        />      
     </div>
     <Testimonials
     icon={<RiDoubleQuotesL/>}
     title="Testimonials"
     description="In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it." />
     <Bottum/>
     <Footer/>
    </>
  );
}

export default Home;
