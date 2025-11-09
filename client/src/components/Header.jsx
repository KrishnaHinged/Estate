import React from 'react'
import Logo from '../assets/Logo.png';   
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className='w-screen h-20 flex justify-between items-center  shadow-md'>
    <div className='flex justify-center items-center p-2 rounded-e-full shadow-md m-2 bg-gradient-to-l from-blue-200 '>  
        <h1 className='text-3xl font-bold  text-gray-900 '>EstateEase</h1>
    </div>
 <div>
    <nav>
        <ul className="flex space-x-4 text-xl p-4">
          <li>
            <a href="/" className="text-white hover:text-blue-400">Home</a>
          </li>
          <li>

            <a href="/about" className="text-white hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="/signin" className="text-white hover:text-blue-400">SignIn</a>
          </li>
          <li>
            <a href="/signup" className="text-white hover:text-blue-400">SignUp</a>
          </li>
        </ul> 
      </nav>
      
    </div>
     <div>
        <form className='bg-slate-100  border border-slate-200 flex p-3 text-gray-800 rounded-2xl items-center m-2'>
            <input type="text" name="search" id="" placeholder='Search..' className='pr-10 focus:outline-none bg-transparent'/>
            <FaSearch />
        </form>
    </div>
    </div>
  )
}

export default Header


