import './Navbar.css'
import React, { useState } from "react";

function Navbar() {

    const [isClicked, setIsClicked] = useState(false);

    function handleCllick() {
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <nav>
                <div className='nav-list-cont'>
                    <ul className='nav-list'>
                        <li><a href="index.html">index</a></li>
                        <li><a href="index">index</a></li>
                        <li><a href="index">index</a></li>
                    </ul>
                </div>
                <div id='nav-logo'>
                    <a href="index.html">
                        <img src="./images/logo-no-bg.png" alt="Logo" />
                    </a>
                </div>

                <div className='nav-list-cont'>
                    <ul className='nav-list'>
                        <li><a href="index">index</a></li>
                        <li><a href="index">index</a></li>
                        <li><a href="index">index</a></li>
                    </ul>
                </div>



                <div id='mobile' onClick={handleCllick}>

                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>

            </nav>
            <div className={isClicked? 'nav-list-cont-mob active' : 'nav-list-cont-mob'}>
                <ul className='nav-list-mob'>
                    <li><a href="index">index</a></li>
                    <li><a href="index">index</a></li>
                    <li><a href="index">index</a></li>
                    <li><a href="index">index</a></li>
                    <li><a href="index">index</a></li>
                    <li><a href="index">index</a></li>
                </ul>
            </div>
        </div>


    )
}

export default Navbar;