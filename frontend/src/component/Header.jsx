import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="bg-sky-500/50 py-1">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
            <img src="/images/Hp.webp" alt="Logo" 
            className="w-10 rounded-full object-cover flex-shrink-0 border-0 border-gray-200"
            />
            <span className="whitespace-nowrap">HamroPasal</span>
            </a>
          </div>
          <div className="flex justify-between items-center gap-2 ">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder='Search' className= "w-[180px] sm:w-[200px] group-hover:w-[250px] tranistion-all duration-300 rounded-full border-gray-300 px-4 py-1.5 focus:outline-none focus:border-1 focus:border-teal-400"/>
              <IoMdSearch
              className="text-gray-500 group-hover:text-teal-600 absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
          </div>

        <button
          onClick={() => alert("Ordering not availabe yet")}
          className="bg-gradient-to-r from-teal-600 to-sky-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group hover:shadow-lg"> 
          <span className="group-hover:block hidden transition-all duration-200">Order</span>
          <FaCartShopping 
          className="text-xl text-white drop-shadow-sm cursor cursor-pointer"
          />
        </button>
        <div>
          <DarkMode/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header