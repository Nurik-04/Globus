import React from 'react'
import Header from "./Components/Header/Header"
import Hero from './Components/Hero/Hero'
import Subscription from './Components/Subscription/Subscription'
import Footer from './Components/Footer/Footer'
import "./App.css"

const App = () => {
  return (
    <div className='uiverse-midnight-sky'>
      {/* <!-- From Uiverse.io by kiranmayee-abbireddy --> */}
      <div className="sky-canvas">
        
        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>

        <div className="meteor m1"></div>
        <div className="meteor m2"></div>
        <div className="meteor m3"></div>

        <div className="moon"></div>
        <Header />
        <Hero />
        <Subscription />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
