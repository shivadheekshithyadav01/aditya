import React from "react";
import CNCBackground from "./components/CNCBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <CNCBackground />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Clients />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default App;
