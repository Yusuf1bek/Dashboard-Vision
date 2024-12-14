import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const CardPerson = () => {
  return (
    <div className='w-[500px] p-[20px] bg-person rounded-lg'>
      <div className='w-[185px]'>
        <p className='mb-[10px] text-[#A0AEC0]'>Welcome back,</p>
        <h2 className='font-[700] text-[25px] leading-[28px] text-white mb-[18px]'>Mark Johnson</h2>
        <p className='font-[400] text-[16px] leading-[24px] mb-[138px] text-[#A0AEC0]'>Glad to see you again!
        Ask me anything.</p>
        <Link className={"flex items-center gap-1 text-white"}>
          <p>Tap to record</p>
          <GoArrowRight/>
        </Link>
      </div>
    </div>
  )
}

export default CardPerson