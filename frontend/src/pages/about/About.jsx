import React from "react";
import aboutImage from "../../assets/tridevaboutimg.jpg"; // Ensure correct path
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        {/* Left Section - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="Tridev Pandey" />
        </div>

        {/* Right Section - Text Content */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm <strong>TREDEV PANDEY</strong>. I specialize in <strong>nutrition, business, and solving fat-loss challenges</strong>. 
            With years of experience, I help individuals achieve their health goals through customized strategies, diet plans, 
            and fitness coaching. My mission is to educate and empower people to lead a healthy lifestyle.
          </p>

          {/* Skills Section */}

           {/* Certifications Section */}
        <div className="certifications">
          <h2>Certifications</h2>
          <div className="cert-card">
            <h3>🏅 Certified Personal Trainer (CPT)</h3>
            <p>Issued by: National Academy of Sports Medicine (NASM)</p>

          </div>
          <div className="cert-card">
            <h3>🏅 Advanced Sports Nutrition Certification</h3>
            <p>Issued by: International Sports Sciences Association (ISSA)</p>
            
          </div>
          <div className="cert-card">
            <h3>🏅 Business & Fitness Strategy</h3>
            <p>Issued by: Harvard Online Courses</p>
            
          </div>
        </div>

        

          
       
        </div>
      </div>
    </div>
  );
};

export default About;
