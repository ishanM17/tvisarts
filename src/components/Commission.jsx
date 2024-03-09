import React from "react";
import { HashLink } from "react-router-hash-link";
import './Commission.css';

export default function Commission() {
    return (
        <div id="commissionNav" className="commission-container">
            <img id="commission1" src="./images/commission1.png" alt="commission1" />
            <div className="commission-content">
                <h2 className="heading-font">Turn your photo into timeless art</h2>
                <h3 className="para-font">The perfect gift or souvenir for your loved ones</h3>
                <HashLink smooth to="/contact#contactNav"><button>Enquire Now!</button></HashLink>
            </div>
            <img id="commission2" src="./images/commission2.png" alt="commission2" />
        </div>
    )
};