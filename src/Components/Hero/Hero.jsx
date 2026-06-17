import React from 'react'
import { useState, useRef } from 'react';
import music from "../../assets/music.mp3"
import logo from "../../images/Group.png"
import logo1 from "../../images/Group1.png"
import logo2 from "../../images/Group2.png"
import logo3 from "../../images/Group3.png"
import logo4 from "../../images/Group4.png"

import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
Aos.init();

import "./Hero.css"

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const toggle = () => {
    if (isPlay) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlay(!isPlay);
  }
  const logos = [logo, logo1, logo2, logo3, logo4];

  return (
    <div className="hero">
      <div className='container'>
        <div className="hero__container">
          <div className="hero__box">
            <h1 className='hero__title'>Grow your subscription business</h1>
            <p className='hero__text'>Outcome-centered products that reduce churn, optimize pricing, and grow your        subscription business end-to-end.</p>
            <audio src={music} ref={audioRef} loop />
            <button className='hero__button' onClick={toggle}>{isPlay ? '⏸Pauza' : '▶Play'}</button>
          </div>
          {/* globus */}
          <div className="globe" data-aos="zoom-in" data-aos-duration="2000">
            <div className="globe__map"></div>
          </div>
        </div>
        {/* Logo blog */}
        <div className="logos__wrapper">
          <div className="logos__track">
            {logos.map((l, i) => <img className='logos__img' key={i} src={l} alt="logo" />)}
            {logos.map((l, i) => <img className='logos__img' key={i + 5} src={l} alt="logo" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
