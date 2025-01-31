import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Experience />
    </div>
  );
};

export default App;