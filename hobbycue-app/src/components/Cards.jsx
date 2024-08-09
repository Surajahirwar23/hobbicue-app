import React from "react";
const Cards = (props) => {
  return (
    <>
      <div className="cards p-8 ">
        <div className="card border h-fit border-slate-300 rounded-lg p-8 text-center xl:text-left ">
          <div className="header flex items-center justify-center text-2xl font-bold gap-3 xl:justify-start ">
            <div className="text-[#8064A2]" > {props.icon}</div>
            <h1 className="text-center"> {props.title}</h1>
          </div>
          <p className="py-4">
            {props.description}
          </p>
          <button className=" w-full sm:w-fit border border-[#8064A2] text-[#8064A2] py-2 px-8 rounded font-semibold my-4">{props.button}</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
