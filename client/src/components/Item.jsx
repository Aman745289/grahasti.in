import React from 'react'
import HeartBtn from './HeartBtn'
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CgRuler } from 'react-icons/cg'

const Item = ({property}) => {
  return (
    <div className='rounded-2xl p-5 bg-white'>
        <div className='relative pb-2' >
            <img src={property.image} alt={property.title} className='rounded-xl'/>
            {/* like btn */}
            <div className='absolute top-4 right-6'>
                <HeartBtn/>
            </div>
            <h5 className='text-base font-bold text-blue-400 my-1'>{property.city}</h5>
            <h4 className='text-lg font-medium line-clamp-1'>{property.title}</h4>
            {/* info */}
            <div className='flex gap-x-2 py-2'>
                <div className='flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineBed/>{property.facilities.bedrooms}</div>
                <div className='flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineBathtub/>{property.facilities.bathrooms}</div>
                <div className='flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineGarage/>{property.facilities.parkings}</div>
                <div className='flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><CgRuler/>400</div>
            </div>
            <p className='pt-2 mb-4 line-clamp-2'>{property.description}</p>
            <div className='flex justify-between items-center'>
                <div className='text-xl font-bold '>${property.price}.00</div>
                <Link to={'/'}>
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl py-2 px-4 flex items-center justify-center hover:bg-gray-800 transition shadow-sm'>
                    View Details
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Item