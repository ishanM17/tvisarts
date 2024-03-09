import {React, useState} from "react";
import './Gallery.css'
import ImageGrid from "./ImageGrid";

export default function Gallery(){

    const tabHeaders = ["Sketches", "Water Colours", "Potraits", "Oil & Acrylics", "Traditional", "Relief"];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="widget">
                <header>
                    {tabHeaders.map((tab, index)=>(
                        <button
                            onClick={() => setActiveIndex(index)}
                            key={tab}
                        >
                            {tab}
                        </button>
                    ))}
                </header>
                <div className="content">
                    <ImageGrid index={activeIndex}/>
                </div>
            </div>
        </div>
        
    )

}