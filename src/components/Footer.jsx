import React from "react";
import { HashLink } from "react-router-hash-link";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-left">
                <div className="footer-logo">
                    <img src="/images/horizontal-logo-removebg.png" alt="logo" />
                </div>

                <div className="footer-btn">
                <HashLink smooth to="/contact#contactNav"><button>Contact us!</button></HashLink>
                </div>
            </div>
            <div className="footer-right">
                <div className="icons">
                    <FontAwesomeIcon className="footer-icon" icon={faInstagram} onClick={()=>window.open("https://www.instagram.com/tvisarts", '_blank')}/>
                    <FontAwesomeIcon className="footer-icon" icon={faFacebookF} onClick={()=>window.open("https://www.facebook.com/TvisArts/", '_blank')}/>
                </div>
                <div className="footer-contact-info para-font">
                    <p className="heading-font">Sandhya Mulchandani</p>
                    <p>tvisarts@gmail.com</p>
                    <p>+61 437172647</p>
                    <p>43, Phillis Street, Maylands,<br />Adelaide, SA-5069</p>
                </div>
            </div>
        </div>
    );
}