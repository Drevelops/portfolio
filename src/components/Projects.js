import React from "react";
import githubIcon from "../static/github-icon.png";
import LiveDemo from "../static/LiveDemoTaskManager.gif";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>Project 1</h3>
        <p>A modern, feature-rich task management application that enables users to efficiently organize and track their tasks through different stages of completion. Built with React and Spring Boot, this application offers a seamless drag-and-drop interface and robust backend functionality.</p>
        <img src={LiveDemo} alt="Live Demo" />
        <div className="project-links">
          <a href="https://github.com/Drevelops/TaskManagerApp" target="_blank" rel="noopener noreferrer">
          <img  src={githubIcon} alt="GitHub Code" /> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;