import React from "react";
import './Classes.css'
import ClassCard from "./ClassCard";
import classData from "../classData";
import Carousel from 'react-bootstrap/Carousel';

export default function Classes() {
    return (
        <div className="classes">
            <div className="adult-classes heading-font" id="adultClass">
                <h1 className="heading">Classes & Workshops</h1>
                <div className="cards-container">
                    {classData.map((data) => (
                        <ClassCard
                            key={data.id}
                            ind={data.id}
                            src={data.src}
                            heading={data.heading}
                            ageGroup="adults"
                        />
                    ))}
                </div>
                <div className="cards-container-mobile">
                    <Carousel data-bs-theme="dark" className="cards-carousel">
                        {classData.map((data) => (
                            <Carousel.Item key={data.id}>
                                <ClassCard
                                    key={data.id}
                                    ind={data.id}
                                    src={data.src}
                                    heading={data.heading}
                                    age={data.features.age}
                                    ageGroup="adults"
                                />
                            </Carousel.Item>

                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )

}