import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
    <header className="header">
        <span className="heading__primary-main">Per Eriksson</span>
        <span className="heading__primary-sub">Junior Developer</span>
        <div className="header__link--1"><NavLink to='/about' className="navlink" activeClassName="activeLink">About Me</NavLink></div>
        <div className="header__link--2"><NavLink to='/projects' className="navlink" activeClassName="activeLink">My Projects</NavLink></div>
        <div className="header__link--3"><NavLink to='/contact' className="navlink" activeClassName="activeLink">Contact</NavLink></div>
    </header>
    )
}

export default Header