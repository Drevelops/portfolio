import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img src="/static/profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
        <div className="hero-content">
          <h1>Andre Wheeler</h1>
          <h2>Software Engineer</h2>
          <div className="location">
            <img src="/static/location-icon.png" alt="Location" className="location-icon" />
            <p>Phoenix, AZ</p>
          </div>
          <div className="location">
            <img src="/static/education.png" alt="Education" className="location-icon" />
            <p>B.S. Software Engineering</p>
          </div>
          <div className="links">
            <a href="https://github.com/Drevelops" target="_blank" rel="noopener noreferrer">
              <img src="/static/github-icon.png" alt="GitHub" />
              <p>GitHub</p>
            </a>
            <a href="https://linkedin.com/in/andre-wheeler" target="_blank" rel="noopener noreferrer">
              <img src="/static/linkedin-icon.png" alt="LinkedIn" />
              <p>LinkedIn</p>
            </a>
            <a href="/static/resume.pdf" download="resume.pdf">
              <img src="/static/resume-icon.png" alt="Resume" />
              <p>Resume</p>
            </a>
            <a href="mailto:andre.d.wheeler@gmail.com">
              <img src="/static/email-icon.png" alt="Email" />
              <p>Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;