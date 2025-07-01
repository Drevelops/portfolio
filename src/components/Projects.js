import React from "react";
import githubIcon from "../static/github-icon.png";
import HoopAnalytics from "../static/hoopanalytics.png"; 

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>HoopAnalytics - NBA Statistics API & Analytics Platform</h3>
        <p>A comprehensive full-stack application providing NBA player and team statistics with advanced analytics capabilities and interactive data visualizations.</p>
        <ul>
          <li>Built FastAPI backend serving 30+ teams and 50+ players with comprehensive statistics</li>
          <li>Implemented PostgreSQL database with SQLAlchemy ORM and Alembic migrations</li>
          <li>Developed React frontend with Chart.js for interactive shot charts and performance trends</li>
          <li>Deployed full-stack application with authentication and user dashboard features</li>
        </ul>
        <p>Tech Stack: FastAPI | PostgreSQL | React | Chart.js | SQLAlchemy | Railway | Vercel</p>
        <div key="hoopanalytics" className="project-card"> 
        <img src={HoopAnalytics} alt="HoopAnalytics Screenshot" className="project-image" />
        </div>
        <div className="project-links">
          <a href="https://github.com/Drevelops/HoopAnalytics-API" target="_blank" rel="noopener noreferrer">
          <img  src={githubIcon} alt="GitHub Code" /> 
          </a>
          <a href="https://hoop-analytics-api.vercel.app/" target="_blank" rel="noopener noreferrer">View Live App</a>
          <a href="https://web-production-eab4a.up.railway.app/docs" target="_blank" rel="noopener noreferrer">API Documentation</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;