import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css";
import Technologies from "./components/Technologies";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
    </div>
  );
};

export default App;