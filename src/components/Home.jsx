import React from "react";
import Hero from './Hero';
import Gallery from './Gallery';
import Classes from './Classes';
import AboutMe from "./AboutMe";
import Commission from "./Commission";

export default function Home() {
    return (
        <div>
            <Hero />
            <Gallery />
            <Classes />
            <AboutMe />
            <Commission />
        </div>
    );
}