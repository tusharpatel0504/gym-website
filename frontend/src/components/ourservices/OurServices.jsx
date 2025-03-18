import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/OURSERVICEPG.svg";
import "../ourservices/Ourservices.css";

const OurService = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="image-container">
      <div className="center-glow"></div>
      <h1>Explore Diverse Workout Programs</h1>
      <img src={Image} alt="Our Services" className="responsive-image" />
      <button className="explore-button" onClick={() => navigate("/courses")}>
        Explore More
      </button>
    </div>
  );
};

export default OurService;
