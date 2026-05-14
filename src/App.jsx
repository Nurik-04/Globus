import React from 'react'
import Header from "./Components/Header/Header"
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <div className="globe">
        <div className="globe__map"></div>
        <div className="globe__map"></div>
      </div>
    </div>
  )
}

export default App
