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
                        I am Sandhya Mulchandani, an artist by passion and profession.
                        From an early age, my love for art was cultivated by my father, a distinguished professor of Mechanical Engineering who possessed a profound artistic gift. Despite this early connection with art, my academic pursuits led me to a successful career as an IT engineer. However, it didn’t motivate me for long. So, in 2006, I decided to quit my job and pursue my passion for art.
                        Embarking on this new chapter, I immersed myself in learning diverse art forms and expanding my skill sets. Four years into this explorative journey, I resolved to share my love for art by returning to the community as an instructor.
                        In 2013, Tvis Arts was established, a culmination of my dedication to fostering artistic expression and creativity. Since its inception, Tvis Arts has provided a haven for 600 students, generating 1000 unique art works. It has become not only a personal sanctuary for me but also a welcoming space for individuals of all ages seeking to express their love for art.
                        As Tvis Arts continues to flourish, I am eager to seek the collaboration of fellow artists and expand the school's reach to connect with more art enthusiasts.
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