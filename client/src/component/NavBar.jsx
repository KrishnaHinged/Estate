import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-4 bg-gray-800 p-4">
          <li>
            <a href="#" className="text-white hover:text-blue-400">Home</a>
          </li>
          <li>

            <a href="#" className="text-white hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400">Contact</a>
          </li>
        </ul> 
      </nav>
      
    </div>
  )
}

export default NavBar
