import './Navbar.css'
import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

function Navbar() {

    const [isClicked, setIsClicked] = useState(false);

    function handleCllick() {
        if (isClicked) {
            document.body.style.overflowY = "visible";
        } else {
            document.body.style.overflowY = "hidden";
        }
        setIsClicked(!isClicked);
    }

    const removeMenu = ()=>{
        document.body.style.overflowY = "visible";
        setIsClicked(!isClicked);
    }

    return (
        <div className='nav-container'>
            <nav>
                <div className='nav-list-cont'>
                    <ul className='nav-list'>
                        <li><HashLink smooth to="/#homeNav">Home</HashLink></li>
                        {/* <li><HashLink smooth to="/#childClass">Children<br />Classes</HashLink></li> */}
                        <li><HashLink smooth to="/#galleryNav">Gallery</HashLink></li>
                        <li><HashLink smooth to="/#adultClass">Classes/<br />Workshops</HashLink></li>

                    </ul>
                </div>
                <div id='nav-logo'>
                    <a href="/">
                        <img src="/images/logo-no-bg.png" alt="Logo" />
                    </a>
                </div>

                <div className='nav-list-cont'>
                    <ul className='nav-list'>
                        <li><HashLink smooth to="/#aboutNav">About<br />Artist</HashLink></li>
                        <li><HashLink smooth to="/#commissionNav">Commission<br />Work</HashLink></li>
                        <li><HashLink smooth to="/contact#contactNav">Contact us</HashLink></li>
                    </ul>
                </div>



                <div id='mobile' onClick={handleCllick}>

                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>

            </nav>
            <div className={isClicked ? 'nav-list-cont-mob active' : 'nav-list-cont-mob'}>
                <ul className='nav-list-mob'>
                    <li onClick={removeMenu}><HashLink smooth to="/#homeNav">Home</HashLink></li>
                    {/* <li onClick={removeMenu}><HashLink smooth to="/#childClass">Children Classes</HashLink></li> */}
                    <li onClick={removeMenu}><HashLink smooth to="/#galleryNav">Gallery</HashLink></li>
                    <li onClick={removeMenu}><HashLink smooth to="/#adultClass">Classes/Workshops</HashLink></li>
                    <li onClick={removeMenu}><HashLink smooth to="/#aboutNav">About Artist</HashLink></li>
                    <li onClick={removeMenu}><HashLink smooth to="/#commissionNav">Commission Work</HashLink></li>
                    <li onClick={removeMenu}><HashLink smooth to="/contact#contactNav">Contact us</HashLink></li>
                </ul>
            </div>
        </div>


    )
}

export default Navbar;