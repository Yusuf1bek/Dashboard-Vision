import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { IoCardSharp, IoBuild  } from "react-icons/io5";
const MainDashboard = () => {
  return (
    <div className='flex'>
        <div id='dashboard-sidebar' className='w-[290px] h-screen bg-slate-900 p-5 sticky top-0 left-0 overflow-auto text-white'>
          <p className='text-center text-2xl font-bold mb-[31px]'>VISION UI FREE</p>
          <hr className='w-[200px] mb-[20px] ml-[23px]' />
          <ul>
            <li>
              <NavLink className={`p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px]`} to={"dashboard"}>
                <FaHome className='text-20px text-blue-600  rounded-sm'/>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className={`p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px]`} to={"table"}>
                <IoIosStats className='text-20px text-blue-600  rounded-sm'/>
                Table
              </NavLink>
            </li>
            <li>
              <NavLink className={`p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px]`} to={"biling"}>
                <IoCardSharp className='text-20px text-blue-600  rounded-sm'/>
                Biling
              </NavLink>
            </li>
            <li>
              <NavLink className={`p-3 mb-2 rounded-md font-[400] flex items-center gap-2 text-[20px] leading-[14px]`} to={"rtl"}>
                <IoBuild className='text-20px text-blue-600  rounded-sm'/>
                RTL
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex-1 p-5'>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainDashboard