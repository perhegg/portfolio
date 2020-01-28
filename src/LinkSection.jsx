import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"


const LinkSection = () => {
    return (
        <section className="linksection">
            <ul className="linksection__list">
                <li className="linksection__list-item"><NavLink to='/about' className="navlink" activeClassName="activeLink">About Me</NavLink></li>
                <li className="linksection__list-item"><NavLink to='/projects' className="navlink" activeClassName="activeLink">My Projects</NavLink></li>
                <li className="linksection__list-item"><NavLink to='/contact' className="navlink" activeClassName="activeLink">Contact</NavLink></li>
            </ul>
        </section>
    )
}

export default LinkSection