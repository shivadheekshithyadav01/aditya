import React from "react";
import "../styles/Hero.css";

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="hero">
            <h1>ADITYA TOOLS</h1>
            <p>Precision. Power. Perfection.</p>
            <button onClick={() => scrollToSection("services")}>Explore Services</button>
        </section>
    );
};

export default Hero;
