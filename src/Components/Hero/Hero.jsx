import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className='container'>
        <div className="hero__box">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div></div>
          {/*  */}
          <div className="globe">
            <div className="globe__map"></div>
            <div className="globe__map"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
