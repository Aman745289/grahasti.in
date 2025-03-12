import React from 'react'
import { BLOGS } from '../constants/data'

const Blogs = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-6 py-16'>
      <div className='max-w-screen-xl mx-auto bg-gray-100 py-16 xl:py-28 
      rounded-3xl shadow-lg px-6'>
       <span className='text-lg font-medium text-black-800'>Stay Updated with the Latest News!</span>
       <h2 className='text-3xl font-bold text-black-900 mt-2'>Our Expert Blogs</h2>
       {/* container */}
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4 mt-24'>
        {BLOGS.map((blog)=>(
          <div key = {blog.title} className='rounded-3xl border-[11px] overflow-hidden shadow-md border-white  relative'>
            <img src={blog.image} alt={blog.title}/>
            {/*overlay*/}
            <div className='absolute left-0 top-0 h-full w-full bg-black/25 '></div>
            {/* info */}
            <div className='absolute bottom-4 left-4 text-white text-[15px] '>
            <h3 className='font-[600] text-[18px] pr-5'>{blog.title}</h3>
            <h4 className='text-base font-[400] '>{blog.category}</h4>
            <button className='bg-white text-black rounded-xl font-semibold px-3 py-1 border
             border-gray-300 shadow-sm hover:bg-gray-100 transition-all'>continue reading</button>
            </div>
          </div>

        ))}
       </div>
      </div>
    </section>
  )
}

export default Blogs