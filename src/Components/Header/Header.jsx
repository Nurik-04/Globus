import React from 'react'
import logo from "../../images/Logo.png";
import Button from "../Button/Button";

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
                    <ul className='header__list'>
                        <li className='header__item'><a className='header__link' href="#home">Home</a></li>
                        <li className='header__item'><a className='header__link' href="#about">Features</a></li>
                        <li className='header__item'><a className='header__link' href="#contact">Pricing</a></li>
                        <li className='header__item'><a className='header__link' href="#blog">Blog</a></li>
                    </ul>
                    <Button />
                </nav>
            </div>
        </header>
    )
}

export default Header
