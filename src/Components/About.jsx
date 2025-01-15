import React from 'react'
import aboutimage from '../images/about.png'
function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutimage} alt="about image" />
        </div>
        <div className='about-text'>
            <h2>We Are The Best <br /> Real Estate Company</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis minima praesentium
                 nisi tenetur ipsam quasi fugit, voluptas quidem temporibus
                 odio quia architecto dolorem repellendus libero eius veritatis nam quas suscipit.</p>
                 <button>View More details</button>
        </div>
      </div>
  )
}

export default About
