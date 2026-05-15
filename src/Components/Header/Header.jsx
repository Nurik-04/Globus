import React from 'react'
import logo from "../../images/Logo.png";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo__box">
                        <img src={logo} alt="logo" className="header__logo__img" />
                        <h2 className='header__logo'>Globe</h2>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Features</a></li>
                        <li><a href="#contact">Pricing</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                    <button className='header__btn'>Get Started</button>
                </nav>
            </div>
        </header>
    )
}

export default Header
