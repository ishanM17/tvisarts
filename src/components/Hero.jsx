import React from "react";
import './Hero.css'
import Navbar from "./Navbar";

function Hero() {
    return (
        <div className="container-fluid">
            <img src="./images/hero-bg.jpg" style={{display: 'none' , width: '100%' }} />
            <div className="title-container">
                <h1 className="title">TVISARTS</h1>
            </div>
        </div>
    );
}

export default Hero;