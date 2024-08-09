import React from 'react'
import group from './assets/Group 99.png'

const Bottum = () => {
  return (
    <>
    <div className="bottumContainer bg-sky-50 p-4 mt-16">
    <h1 className="text-xl font-semibold py-3 md:py-6 md:text-2xl">
           <span className="text-[#0096C8]">Your Hobby,</span> {" "}
            <span className="text-[#8064A2]"> Your Community... </span>
          </h1>
          <button className='py-1 px-3 bg-[#8064A2] text-white text-xl font font-semibold rounded-md my-4'>Get started</button>
          <img src={group} alt=""
          className='w-full mt-10' />
    </div>
      
    </>
  )
}

export default Bottum
