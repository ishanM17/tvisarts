import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClassFeature from "./ClassFeature";
import './ClassDetail.css';
import adultClassData from "../AdultClassData";
import childrenClassData from "../childrenClassData";

export default function ClassDetail() {
    const navigate = useNavigate();
    const [data, setData] = useState({ features: {} });
    const { age, classId } = useParams();
    useEffect(() => {
        if (age === "children" && classId >= 1 && classId <= childrenClassData.length) {
            setData(childrenClassData[classId - 1]);
        } else if (age === "adults" && classId >= 1 && classId <= adultClassData.length) {
            setData(adultClassData[classId - 1]);
        } else {
            navigate("/");
        }
    }, []);

    return (
        <div className="class-detail">
            <div className="details-container">
                <img src={data.src2} alt="class" className="details-img" />
                <div className="details-content">
                    <h1 className="heading-font">{data.heading}</h1>
                    <div className="features-container">
                        {Object.keys(data.features).map((feature, i) => (
                            <ClassFeature key={i} content={data.features[feature]} />
                        ))}
                    </div>
                    {data.detail?<div className="detail-text-container">
                        {data.detail.map((para, ind)=>(
                            <p className="para-font" key={ind}>{para}</p>
                        ))}
                    </div>:<></>}                   

                </div>
            </div>
            {data.src3 ? <div className="centered">
                <img className="schedule-img" src={data.src3} alt="class-schedule" />
            </div> : <></>}
        </div>
    )
}