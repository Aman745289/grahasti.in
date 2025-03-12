import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants/data'

const Footer = () => {
  return (
    <footer className='max-w-screen-xl mx-auto mb-4'>
      <div className='max-w-screen-xl mx-auto bg-gray-100 rounded-tr-3xl pt-12 xl:pt-20 pb-8 px-6'>
        <h3 className='text-2xl font-bold'>Explore real estate opportunities with us?</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ducimus iste?</p>
        <hr className='my-8 bg-slate-900/30 h=[2px]'/>
        {/* container*/}
        <div className='flex flex-wrap justify-between gap-x-2 gap-y-8'>
          <div className='max-w-sm'>
            <Link to={'/'} className='flex items-center gap-x-2'>
            <span className="font-extrabold text-2xl">
              Grahasti<span className="font-semibold text-lg">.in</span>
            </span>
            </Link>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae 
              voluptatibus excepturi nostrum cum delectus repellat?
            </p>
            <div className='flex items-center justify-between pl-6 h-14 bg-white w-full max-w-[366px] rounded-full ring-state-500/5'>
              <input type="email" placeholder='Enter your email' className='bg-transparent border-none outline-none'/>
              <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-7 py-3  text-[16px] font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all'>Subscribe</button>
            </div>
          </div>
          <div className='flex justify-between flex-wrap gap-8'>
            {FOOTER_LINKS.map((col)=>(
              <FooterColumn key={col.title} title={col.title}>
                <ul className='flex flex-col gap-4 text-gray-500 text-sm'>
                  {col.links.map((link)=>(
                    <Link to={'/'} key={link}>{link}</Link>
                  ))

                  }

                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=>(
                  <Link to={'/'} key={link.label} className='flex gap-4 md:flex-col lg:flex-row  text-gray-500 text-sm'>
                    <p>{link.label}</p>:<p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className='flex'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex gap-4'>
                  {SOCIALS.links.map((link)=>(
                    <Link to={'/'} key={link.id} className='text-xl'>
                      {link.icon}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        
      </div>
      {/* copy right */}
      <p className='text-white bg-black text-sm py-2 px-8 rounded-b-3xl flex justify-between items-center'><span>2024 Grahasti.in</span> All rights reserved</p>
    </footer>
  )
}

export default Footer

const FooterColumn = ({title, children}) => { 
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-lg font-bold  whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}