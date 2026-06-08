import React from 'react'
import { useState, useEffect , useRef } from 'react';
import music from "../../assets/music.mp3"

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
  return (
    <div className="hero">
      <div className='container'>
        <div className="hero__box">
          <audio src={music} ref={audioRef} loop />
            <button className='hero__button' onClick={toggle}>{isPlay ? '⏸Pauza' : '▶Play'}</button>
          {/* globus */}
          <div className="globe" data-aos="zoom-in" data-aos-duration="2000">
            <div className="globe__map"></div>
            <div className="globe__map"></div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Hero
