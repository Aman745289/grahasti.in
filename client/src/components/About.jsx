import React from 'react'
import aboutImg from '../assets/about.jpg'
import { RiDoubleQuotesL } from 'react-icons/ri'
import Countup from 'react-countup'
import { useEffect, useState } from 'react'

const About = () => {

  const statistics = [
    {label:"Happy clients",value:12},
    {label:"Different cities",value:3},
    {label:"Projects completed",value:45},

  ]

  const [ isVisible, setIsVisible ] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if(aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight-100;
        setIsVisible(isVisible)

      }
    };
    window.addEventListener('scroll',handleScroll);
    //cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[])


  return (
    <section id = 'about' className='max-w-screen-xl mx-auto px-6 py-16 xl:py-28'>
        {/* container */}
        <div className='flex flex-col xl:flex-row gap-8 '>
            {/* left */}
            <div className='flex-1 relative'>
                <img src={aboutImg} alt ="" className='rounded-3xl rounded-tr-[155px] w-[488px]'/>
                <div className='bg-white absolute bottom-16 left-16 max-w-xs p-8 rounded-xl flex flex-col items-center justify-center'>
                    <span className='absolute bottom-27 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full'><RiDoubleQuotesL className='text-2xl'/></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, 
                    maiores illum!</p>
                </div>
            </div>
            {/* right */}
            <div className='flex-1 flex flex-col justify-center'>
              <span className='text-lg font-medium'>Unveiling Our Journey</span>
              <h2 className='text-3xl font-bold leading-snug'>Our Commitment Crafting Extraordinary Real Estate Experiences</h2>
              <p className='py-5 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Nobis dolore expedita delectus in a eligendi explicabo laborum eveniet? 
                 Ratione modi et earum assumenda est vitae neque laborum fugiat unde 
                 expedita perferendis amet rem illum quis facere voluptatum culpa repudiandae
                  natus provident porro, nihil fuga.</p>
              {/* statistics container */}  
              <div className='flex flex-wrap gap-4'>
                {statistics.map((statistic,index)=>(
                  <div key={index} className='bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 hover:from-pink-600 hover:to-indigo-600 transition-all duration-500 ease-in-out p-4 rounded-lg text-white shadow-lg hover:shadow-xl'>
                    <div className='flex items-center gap-1'>
                    <Countup start={isVisible ? 0 : null} end={statistic.value} duration={10} delay={3}>
                     {({countUpRef})=>(
                      <h3 ref={countUpRef} className='text-2xl font-semibold'></h3>
                     )}
                    </Countup>
                    <h4>k+</h4>
                  </div>
                  <p>{statistic.label}</p>
                </div>
                ))}
              </div>
            </div>
        </div>
    </section>
  )
}

export default About