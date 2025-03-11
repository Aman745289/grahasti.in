import React from 'react'
import aboutImg from '../assets/about.jpg'
import { RiDoubleQuotesL } from 'react-icons/ri'

const About = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-6 py-16 xl:py-28'>
        {/* container */}
        <div className='flex flex-col xl:flex-row gap-8 '>
            {/* left */}
            <div className='flex-1 relative'>
                <img src={aboutImg} alt ="" className='rounded-3xl rounded-tr-[155px] w-[488px]'/>
                <div className='bg-white absolute bottom-16 left-16 max-w-xs p-8 rounded-xl flex flex-col items-center justify-center'>
                    <span className='relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full'><RiDoubleQuotesL className='text-2xl'/></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, 
                    maiores illum!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About