import React from "react";
import "./ClassFeature.css";

export default function ClassFeature(props){
    return (
        <div className="class-feature">
            <h2 className="feature-content para-font">{props.content}</h2>
        </div>
    );
}