import React from "react";
import './ClassCard.css'

export default function ClassCard(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.src} alt="class" />
            </div>
            <div className="card-body">
                <h1 className="card-heading para-font">{props.heading}</h1>
                <h2 className="card-subtext para-font">{props.age}</h2>
            </div>
            <div className="centered">
                <button onClick={()=>window.open("/classes/"+props.ageGroup+"/"+props.ind, '_blank')}>More Details</button>
            </div>

        </div>
    );
}