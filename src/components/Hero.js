import React from "react";
import profilePic from "../static/profile-pic.jpg";
import locationIcon from "../static/location-icon.png";
import educationIcon from "../static/education.png";
import githubIcon from "../static/github-icon.png";
import linkedinIcon from "../static/linkedin-icon.png";
import emailIcon from "../static/email-icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img src={profilePic} alt="Andre Wheeler" className="profile-pic" />
        <div className="hero-content">
          <h1>Andre Wheeler</h1>
          <h2>Software Engineer</h2>
          <div className="location">
            <img src={locationIcon} alt="Location" className="location-icon" />
            <p>Phoenix, AZ</p>
          </div>
          <div className="location">
            <img src={educationIcon} alt="Education" className="location-icon" />
            <p>B.S. Software Engineering</p>
          </div>
          <div className="links">
            <a href="https://github.com/Drevelops" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
              <p>GitHub</p>
            </a>
            <a href="https://linkedin.com/in/andre-wheeler" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
              <p>LinkedIn</p>
            </a>
            <a href="mailto:andre.d.wheeler@gmail.com">
              <img src={emailIcon} alt="Email" />
              <p>Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;