import React from "react";
import './Hero.css';

function Hero() {
    return (
        <div className="container-fluid" id="homeNav">
            <img src="./images/hero-bg.jpg" style={{display: 'none' , width: '100%' }} alt="landing"/>
            <div className="title-container">
                <div className="text-container">
                    <h1 className="title heading-font">TVISARTS</h1>
                </div>
            </div>
        </div>
    );
}

export default Hero;