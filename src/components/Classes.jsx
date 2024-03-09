import React from "react";
import './Classes.css'
import ClassCard from "./ClassCard";
import childrenClassData from "../childrenClassData";
import adultClassData from "../AdultClassData";
import Carousel from 'react-bootstrap/Carousel';

export default function Classes() {
    return (
        <div className="classes">
            <div className="children-classes" id="childClass">
                <h1 className="heading heading-font">Classes for Children</h1>
                <div className="cards-container">
                    {childrenClassData.map((data) => (
                        <ClassCard
                            key={data.id}
                            ind={data.id}
                            src={data.src}
                            heading={data.heading}
                            age={data.features.age}
                            ageGroup="children"
                        />
                    ))}
                </div>
                <div className="cards-container-mobile">
                    <Carousel data-bs-theme="dark" className="cards-carousel">
                        {childrenClassData.map((data) => (
                            <Carousel.Item key={data.id}>
                                <ClassCard
                                    key={data.id}
                                    ind={data.id}
                                    src={data.src}
                                    heading={data.heading}
                                    age={data.features.age}
                                    ageGroup="children"
                                />
                            </Carousel.Item>

                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="adult-classes heading-font" id="adultClass">
                <h1 className="heading">Classes for Adults</h1>
                <div className="cards-container">
                    {adultClassData.map((data) => (
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
                        {adultClassData.map((data) => (
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