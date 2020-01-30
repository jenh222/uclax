import React, {useState, useEffect} from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(false);

    const handleHamburgerClick = () => {
        if (showMenu === false) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }
//Window Resize Event
    const handleWindowResize = () => {
        if (window.innerWidth > 599) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }
    
// Only when component mounts
useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
}, []);
  
    return (
        <nav className='Nav'>
             <div className="hamburger" onClick={handleHamburgerClick}>
                    <FontAwesomeIcon icon={faBars}/>
            </div>
            {
                showMenu &&
            
                <div className="links">
                    <NavLink to='/' exact>Welcome</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            }

        </nav>
    )
};

export default Nav;