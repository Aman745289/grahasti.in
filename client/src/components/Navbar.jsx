import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav>
        <NavLink to={"/"} className={({isActive}) => isActive ? " active-link flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800" : 
        "flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800"}>
        <MdHomeWork/>
        <div>Home</div>
        </NavLink>
        <NavLink to={"/listing"} className={({isActive}) => isActive ? " active-link flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800" : 
        "flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800"}>
        <MdHomeWork/>
        <div>Listing</div>
        </NavLink>
        <NavLink to={"/"} className={({isActive}) => isActive ? " active-link flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800" : 
        "flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800"}>
        <MdHomeWork/>
        <div>Home</div>
        </NavLink>
        <NavLink to={"/"} className={({isActive}) => isActive ? " active-link flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800" : 
        "flex items-center gap-x-1 rounded-full px-2 py-1 bg-green-100 text-green-800"}>
        <MdHomeWork/>
        <div>Home</div>
        </NavLink>

    </nav>
  )
}

export default Navbar