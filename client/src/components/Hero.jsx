import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg.png'

const Hero = () => {
  return (
   <section className='max-w-screen-xl mx-auto px-4 sm:px-8 pt-[99px]'>
   <div className="max-w-screen-xl mx-auto px-4 sm:px-8 bg-cover bg-center bg-no-repeat h-[655px] w-full rounded-3xl"
   style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='relative top-32 xs:top-52'>
            <span className='text-lg font-medium'>Welcome to Grahasti.in </span>
            <h1 className='text-4xl font-bold capitalize max-w-[40rem]'>Discover Exceptional Homes with Casacentral</h1>
            <p className='my-10 max-w-[33rem] py-5 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum dolorum cumque magni rem illo quia, 
            autem porro excepturi, quidem commodi ad perferendis culpa.
            </p>
            {/* button */}
            <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl '>
                <div className='text-center text-base font-normal leading-tight pl-5'>
                    <h5 className='uppercase font-bold'>10% off</h5>
                    <p className='text-base font-normal'>On All Properties</p>
                </div>
                <Link to={'/listing'} className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl py-5 px-6 flex items-center justify-center hover:bg-gray-800 transition'>Shop now</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero