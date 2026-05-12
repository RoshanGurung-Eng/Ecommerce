import * as React from 'react'
import { IoMdSearch } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa"
import DarkMode from './DarkMode'

const Navbar = () => {
  // State for mobile menu and user menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState('home')

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-50">
      <div className="bg-sky-500/50 py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and mobile menu button */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FiMenu />
            </button>
            
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img 
                src="/images/Hp.webp" 
                alt="Logo" 
                className="w-10 rounded-full object-cover flex-shrink-0 border-0 border-gray-200"
              />
              <span className="whitespace-nowrap">HamroPasal</span>
            </a>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="/" 
              className={`hover:text-teal-600 transition-all ${currentPage === 'home' ? 'text-teal-600 font-medium' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </a>
            <a 
              href="/products" 
              className={`hover:text-teal-600 transition-all ${currentPage === 'products' ? 'text-teal-600 font-medium' : ''}`}
              onClick={() => setCurrentPage('products')}
            >
              Products
            </a>
            <a 
              href="/about" 
              className={`hover:text-teal-600 transition-all ${currentPage === 'about' ? 'text-teal-600 font-medium' : ''}`}
              onClick={() => setCurrentPage('about')}
            >
              About
            </a>
            <a 
              href="/contact" 
              className={`hover:text-teal-600 transition-all ${currentPage === 'contact' ? 'text-teal-600 font-medium' : ''}`}
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </a>
          </div>
          
          {/* Icons and actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder='Search' 
                className="w-0 sm:w-[180px] group-hover:w-[250px] sm:group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1.5 focus:outline-none focus:border-1 focus:border-teal-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-teal-600 absolute top-1/2 -translate-y-1/2 right-3 dark:text-gray-300 sm:hidden" />
            </div>

            {/* Wishlist */}
            <a href="/wishlist" className="hidden sm:block">
              <FaHeart className="text-xl cursor-pointer hover:text-red-500" />
            </a>

            {/* Cart with badge */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-teal-600 to-sky-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group hover:shadow-lg"
            > 
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <div className="relative">
                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </button>
            
            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaUser className="text-lg" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Login</a>
                  <a href="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Register</a>
                  <a href="/account" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">My Account</a>
                </div>
              )}
            </div>
            
            
            
            {/* Dark Mode Toggle */}
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-2 px-4">
          <a href="/" className="block py-2 hover:text-teal-600">Home</a>
          <a href="/products" className="block py-2 hover:text-teal-600">Products</a>
          <a href="/about" className="block py-2 hover:text-teal-600">About</a>
          <a href="/contact" className="block py-2 hover:text-teal-600">Contact</a>
          <a href="/wishlist" className="block py-2 hover:text-teal-600">Wishlist</a>
        </div>
      )}
    </div>
  )
}

export default Navbar