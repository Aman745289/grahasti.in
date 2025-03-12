import React from 'react'
import Searchbar from '../components/Searchbar'
import Item from '../components/Item'
import { PROPERTIES } from '../constants/data'  

const Listing = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6 my-[99px]">
      <div className='max-w-screen-xl mx-auto px-6 py-[10px] xl:py-[22px] bg-primary rounded-3xl bg-gray-200' >
        <div>
          <Searchbar/>
          {/* container */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 mt-10'>
            {
              
              PROPERTIES.map((property)=>(
             
              <Item key={property.title} property={property} />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listing