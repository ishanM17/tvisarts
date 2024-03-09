import React from "react";
import paintings from './paintings.json';
import './ImageGrid.css';

export default function ImageGrid(props){

    return(
        <div className="grid">
            {paintings[props.index].map((ele, ind)=>(
                <div key={ind} className="img-container">
                    <img src={ele.src} alt="picture" style={{width: "100%"}}/>
                </div>
            ))}
        </div>
    );
}