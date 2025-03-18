import React from "react";
import "./CoachingStyle.css";
import img1 from "../../assets/coching-sec-img1.jpeg";
import img2 from "../../assets/coching-sec-img2.jpeg";
import img3 from "../../assets/coching-sec-img3.jpeg";
import img4 from "../../assets/coching-sec-img4.jpeg";
import img5 from "../../assets/coching-sec-img5.jpeg";
import img6 from "../../assets/coching-sec-img6.jpeg";

const coachingData = [
  {
    img: img1,
    text: "Complete Long Term Lifestyle Improvement",
  },
  {
    img: img2,
    text: "Goal and Health Oriented Coaching",
  },
  {
    img: img3,
    text: "In-Depth Health Analysis",
  },
  {
    img: img4,
    text: "24/7 Access to Experts & Weekly Check-ins",
  },
  {
    img: img5,
    text: "Complete Workout Planning & Cardio Protocols",
  },
  {
    img: img6,
    text: "Complete Nutritional Guidance",
  },
];

const CoachingStyle = () => {
  return (
    <div className="coaching-section">
      <div className="coaching-container">
        <div className="coaching-title">What We Do</div>
        <h1 className="coaching-heading">
          <span className="coaching-highlight">#Nice&Easy</span> Coaching Style
        </h1>
        <div className="coaching-grid">
          {coachingData.map((item, index) => (
            <div className="coaching-item" key={index}>
              <img src={item.img} alt="Coaching" className="coaching-image" />
              <p className="coaching-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingStyle;