import React from "react";
import "./svideo.css"; // Updated CSS file
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video1.mp4"; // Corrected video path
import uploadedImage from "../../assets/kartik.jpg"; // Using the uploaded image
import img1 from "../../assets/coching-sec-img1.png";
import img2 from "../../assets/coching-sec-img2.png";
import img3 from "../../assets/coching-sec-img3.png";

const SVideo = () => {
  return (
    <div className="features-container">
      {/* Center Glow */}
      <div className="svideotitle">
        <p>Premium Experience</p>
      </div>
      <div className="firstrowdiv">
        {/* First Div - Large Image */}
        <div className="image-card">
          <img src={uploadedImage} alt="Gym Facility" />
        </div>

        {/* Second Div - Group Class Access */}
        <div className="feature-card1">
          <div className="img-svideo">
            <img src={img1} alt="Group Class" />
          </div>
          <h2>Group Class Access</h2>
          <p>Get unlimited access to all group classes from cardio to yoga.</p>
        </div>

        {/* Fourth Div - Video */}
        <div className="video-card">
          <video autoPlay loop muted playsInline>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="ssndrowdiv">
        {/* Sixth Div - Another Video */}
        <div className="video-card">
          <video autoPlay loop muted playsInline>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Third Div - AI Workout */}
        <div className="feature-card2">
          <div className="img-svideo">
            <img src={img2} alt="AI Workout" />
          </div>
          <h2>AI Driven Workout & Diet Plan</h2>
          <p>Personalized AI-driven workout and diet plans for optimized results.</p>
        </div>

        {/* Fifth Div - Expert Guidance */}
        <div className="feature-card3">
          <div className="img-svideo">
            <img src={img3} alt="Expert Guidance" />
          </div>
          <h2>Expert Guidance & Support</h2>
          <p>Get expert guidance from certified trainers to reach your goals.</p>
        </div>
      </div>
    </div>
  );
};

export default SVideo;