import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg.png'

const Hero = () => {
  return (
   <section className='max-w-screen-xl mx-auto px-4 sm:px-8 pt-[99px]'>
   <div className="max-w-screen-xl mx-auto px-4 sm:px-8 bg-cover bg-center bg-no-repeat"
   style={{ backgroundImage: `url(${bgImage})` }}>
        <div>
            <span>Welcome to Grahasti.in </span>
            <h1>Discover Exceptional Homes with Casacentral</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum dolorum cumque magni rem illo quia, 
            autem porro excepturi, quidem commodi ad perferendis culpa.
            </p>
            {/* button */}
            <div>
                <div>
                    <h5>10% off</h5>
                    <p>On All Properties</p>
                </div>
                <Link to={'/listing'}> Shop now</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero