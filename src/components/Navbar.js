import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo/logo-no-background.png"
import { Search , FavoriteBorder, ShoppingCart, PersonOutlineOutlined} from "@mui/icons-material"

const Navbar = () => {
 
  return (
    <header className='flex items-center px-20 py-5 md:space-x-8 shadow-3xl max-w-full z-10 sticky inset-x-0 top-0 bg-white'>
      <img src={Logo} alt="shopin-logo" className='w-40' />
      <nav className='w-full'>
        <ul className='list-none flex flex-col md:flex-row justify-around '>
          <li>
            <NavLink to="#" className="text-sm text-gray-500 font-medium hover:text-violet-400">Men</NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-sm text-gray-500 font-medium hover:text-violet-400">Women</NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-sm text-gray-500 font-medium hover:text-violet-400">Kids</NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-sm text-gray-500 font-medium hover:text-violet-400">Home & Living</NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-sm text-gray-500 font-medium hover:text-violet-400">Beauty</NavLink>
          </li>
        </ul>
      </nav>
      <div className="relative hidden md:block w-88">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className='text-gray-500' />
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-88 p-2 pl-10 text-sm text-gray-900 border-2 border-neutral-100 rounded-md bg-neutral-100 outline-none focus:bg-white focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder='Search for products, brands and more' />
      </div>
      <PersonOutlineOutlined className='text-gray-500 hover:text-violet-400 cursor-pointer' />
      <FavoriteBorder className='text-gray-500 hover:text-violet-400 cursor-pointer' />
      <ShoppingCart className='text-gray-500 hover:text-violet-400 cursor-pointer' />
    </header>
  )
}

export default Navbar