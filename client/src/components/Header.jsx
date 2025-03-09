import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Header = () => {
  return (
    <header className='max-padd-container fixed top-1 w-full left-5 right-5 z-50'>
        {/* container */}
        <div className='max-padd-container bg-white transition all duration-200 rounded-full px-5 ring-1 ring-slate-900/5'>
            <div className='flex justify-between py-3'>
                {/* logo */}
                <Link to={"/"}>
                <span className='font-[900] text-[24px]'>Grahasti<span className='font-[600] medium-20'>.in</span></span>
                
                </Link>
                {/* navbar */}
                <div className='flex items-center gap-x-4'>
                    {/* Desktop */}
                    <Navbar/>
                    {/* Mobile */}
                    {/* navbar */}
                </div>
                {/* buttons */}
                <div>
                    buttons & icons
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header