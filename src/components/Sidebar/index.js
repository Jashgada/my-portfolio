import './index.scss'
import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () =>{
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
        </Link>
        <nav>
            <NavLink 
// @ts-ignore
            exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4d'></FontAwesomeIcon>
            </NavLink>
            <NavLink 
// @ts-ignore
            exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4d'></FontAwesomeIcon>
            </NavLink>
            <NavLink 
// @ts-ignore
            exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'></FontAwesomeIcon>
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d'></FontAwesomeIcon>
                </a>
            </li>
        </ul> */}
    </div>)
}

export default Sidebar;