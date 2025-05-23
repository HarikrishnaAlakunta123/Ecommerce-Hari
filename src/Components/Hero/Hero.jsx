import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_imag from '../../assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
<h2>New Arrivals Only</h2>
<div className="hero-hand-icon">
<h2>new</h2>
<img src={hand_icon} alt="" />
</div>
<p>Collections</p>
<p>for everyone</p>
<div className="hero-latest-btn">
        <div className="latest">
            Latest Collection Arrived
        </div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
      
      <div className="hero-right">
<img src={hero_imag} alt="" />
      </div>
    </div>
  )
}

export default Hero
