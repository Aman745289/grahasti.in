import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { PROPERTIES } from '../constants/data'
import Item from './Item'

const Properties = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-6 py-16'>
      <div className='max-w-screen-xl mx-auto bg-gray-100 py-16 xl:py-28 rounded-3xl shadow-lg px-6'>
        <span className='text-lg font-medium text-gray-800'>Your Future Home Awaits!</span>
        <h2 className='text-3xl md:text-4xl font-bold text-black-900'>Find Your Dream Here</h2>
        
        <div className='flex items-center justify-between mt-8 mb-6'>
          <h5><span className='font-bold'>Showing 1-9 </span>out of 3k properties</h5>
          <Link to={'/'} className="flex items-center justify-center bg-white text-gray-700 text-2xl rounded-md h-10 w-10 p-2 border border-gray-300 
           shadow-md hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out">
            <VscSettings />
          </Link>
        </div>

        {/* Swiper Container */}
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1124: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className='h=[488px] md:h-[533px] xl:h-[422px] mt-5'
        >
        {
          PROPERTIES.map((property)=>(
              <SwiperSlide key={property.title}>
                <Item property={property}/>
              </SwiperSlide>
          ))
        }
        </Swiper>

      </div>
    </section>
  )
}

export default Properties
