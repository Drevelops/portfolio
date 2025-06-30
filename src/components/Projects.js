import React from "react";
import githubIcon from "../static/github-icon.png";
import LiveDemo from "../static/LiveDemoTaskManager.gif";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>HoopAnalytics - NBA Statistics API & Analytics Platform</h3>
        <p>A comprehensive full-stack application providing NBA player and team statistics with advanced analytics capabilities and interactive data visualizations.</p>
        <ul>Built RESTful API with FastAPI serving 500+ NBA players and team statistics</ul>
        <ul>Implemented PostgreSQL database with SQLAlchemy ORM and Alembic migrations</ul>
        <ul>Developed React frontend with Chart.js for interactive shot charts and performance trends</ul>
        <ul>Deployed full-stack application with authentication and user dashboard features</ul>
        <p>Tech Stack: FastAPI | PostgreSQL | React | Chart.js | SQLAlchemy | Railway | Vercel</p>
        <img src={LiveDemo} alt="Live Demo"  style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}/>
        <div className="project-links">
          <a href="https://github.com/Drevelops/HoopAnalytics-API" target="_blank" rel="noopener noreferrer">
          <img  src={githubIcon} alt="GitHub Code" /> 
          </a>
            <a href="https://hoop-analytics-api.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;