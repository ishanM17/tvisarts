import './Navbar.css'
import React from "react";

function Navbar() {
    return (
        <nav>
            <div className='nav-list-cont'>
                <ul className='nav-list'>
                    <li><a href="index">index</a></li>
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
        </nav>
    )
}

export default Navbar;