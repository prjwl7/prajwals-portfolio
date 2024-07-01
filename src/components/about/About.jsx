import React from 'react';
import "./about.css";
import AboutImg from "../../assets/assets/pc.jpg"
import CV from "../../assets/assets/Prajwal-Resume.pdf";
import Info from './Info';
import Profile from '../../assets/assets/MyPhoto.jpg';
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container container grid">
        <img src={Profile} alt="About" className="about_img" />
        <div className="about_data">
          <Info />
          <p className="about_description">
          I am a dedicated software developer with a strong background in data science, data processing, and Python programming. My expertise spans analyzing and interpreting complex data, creating efficient data pipelines, and leveraging libraries like Polars for handling large datasets. I excel in writing clean, scalable code and have a keen eye for detail. My passion lies in solving complex problems and contributing to impactful software solutions that make a difference.
          </p>
          <a download="" href={ CV } className="button button--flex">
            Download CV 
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
