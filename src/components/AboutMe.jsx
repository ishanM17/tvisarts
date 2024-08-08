import React from "react";
import './AboutMe.css';

export default function AboutMe() {
    return (
        <section id="aboutNav" className="about-container">
            <div className="about-img-container">
                <img src="./images/about-img.png" alt="about" />
            </div>
            <div className="about-content">
                <div className="bio-para">
                    <h1 className="heading-font">My Story</h1>
                    <p className="para-font">
                        I am Sandhya Mulchandani, an artist by passion and profession. My journey in art began in childhood, nurtured by my father, a distinguished professor of Mechanical Engineering with a profound artistic gift. Although my academic path led me to a successful career in IT engineering, it did not sustain my interest. In 2006, I decided to quit my job and pursue my true passion for art. This decision marked the beginning of a journey of self-discovery, transforming my lifelong love for art into a fulfilling profession.
                        In 2013, I founded Tvis Arts in Bangalore, India, where I have since taught art to thousands of students. Over time, I discovered my deep passion for Bas-relief, a technique that has become the hallmark of my work. My art is a contemporary interpretation of this ancient sculpting technique, combining hand-building methods, carving tools, and molds to create striking three-dimensional effects on clay and wood panels. My pieces are celebrated for their intricate details and lifelike depictions of nature.
                        I am deeply committed to preserving and promoting the art of relief sculpture. Recognizing its fading presence despite its rich history and timeless appeal, Through my work, I aim to inspire interest and appreciation for this traditional art form, fostering its evolution and relevance in the contemporary art scene.
                    </p>
                </div>
                <div className="bio-mobile">
                    <h2 className="heading-font">Sandhya Mulchandani</h2>
                    <h3 className="para-font"><i>Artist & Founder of Tvisarts</i></h3>
                </div>
            </div>
        </section>
    );
}