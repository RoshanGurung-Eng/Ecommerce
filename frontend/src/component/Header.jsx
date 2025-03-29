import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-sky-700/40 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text_3xl flex gap-2">
            <img src="/images/Hp.webp" alt="Logo" 
            className='w-10'
            />
            HamroPasal
            </a>
          </div>
          <div>
            <div className="relative group hidden sm:block">
              <input type="text" placeholder='search' className= "w-[200px] sm:w-[200px] group-hover:w-[300px] tranistion-all-duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-teal-400"/>
              <IoMdSearch
              className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
              </div>
          </div>
        </div>
        <button>
          onClick= {alert("Ordering not availabe yet")}
          <span>Order</span>
        </button>
      </div>
    </div>
  )
}

export default Header