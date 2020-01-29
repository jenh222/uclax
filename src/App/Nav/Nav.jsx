import React, {useState, useEffect} from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true);
    

    // Functions / Methods
    // Hamburger Click
    const handleHamburgerClick = () => {
            console.log('you got the hamburger');

            let timbuktu;

            if (showMenu === true) {
                timbuktu = false;
            } else {
                timbuktu = true;
            }

            updateShowMenu(timbuktu);
    }

    // Checking for Small view or Med/Large
    const handleIsSmall = () =>{
        console.log('isSmall', isSmall);

        if (window.innerWidth > 599) {
            updateIsSmall(false);
            updateShowMenu(true);
        } else {
            updateIsSmall(true);
            updateShowMenu(false);
        }
        
    }


//useEffect says only do this when our Nav mounts for the first time
useEffect(()=>{
    window.addEventListener('resize', handleIsSmall);
    handleIsSmall(); //fire off when first loads.
}, []);

   
    return (
        <nav className='Nav'>
            {
                isSmall &&
                <div className="hamburger" onClick={ handleHamburgerClick }>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            }
            {
            showMenu &&
                <div className="links">
                    <a href="#">Welcome</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            }
        </nav>
    )
};

export default Nav;