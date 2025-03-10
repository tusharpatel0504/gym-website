import React, { useState, useEffect } from "react";
import "./testimonials.css";
import aashtaImg from "../../assets/reviewa/aashta.png";
import ananyaImg from "../../assets/reviewa/ananya.png";
import ankushImg from "../../assets/reviewa/ankush.png";
import arnavImg from "../../assets/reviewa/arnav.jfif";
import blueticks from "../../assets/reviewa/bluetick.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  { name: "John Doe", review: "An exceptional gym trainer! Their guidance, motivation, and personalized workouts make fitness enjoyable and effective. Highly knowledgeable and supportive—perfect for anyone serious about achieving their fitness goals. Highly recommended!", image: aashtaImg, rating: 5 },
  { name: "Jane Smith", review: "An exceptional gym trainer! Their guidance, motivation, and personalized workouts make fitness enjoyable and effective. Highly knowledgeable and supportive—perfect for anyone serious about achieving their fitness goals. Highly recommended!", image: ananyaImg, rating: 4 },
  { name: "Mike Johnson", review: "An exceptional gym trainer! Their guidance, motivation, and personalized workouts make fitness enjoyable and effective. Highly knowledgeable and supportive—perfect for anyone serious about achieving their fitness goals. Highly recommended! ", image: ankushImg, rating: 5 },
  { name: "Arnav Patel", review: "An exceptional gym trainer! Their guidance, motivation, and personalized workouts make fitness enjoyable and effective. Highly knowledgeable and supportive—perfect for anyone serious about achieving their fitness goals. Highly recommended!  ", image: arnavImg, rating: 4 },
];

const HeroTestimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="hero-section">
      <h1 className="h1a" >Our Clients</h1>
      <div className="testimonial-container">
        <div className="intro-client">
          <img src={reviews[index].image} alt={reviews[index].name} className="testimonial-image" />
          <div className="name-stars">
            <div className="blu-name">
              <h2 className="testimonial-name">{reviews[index].name}</h2>
              <img src={blueticks} alt="Verified" className="bluet" />
            </div>
            <div className="stars">
              {"★".repeat(reviews[index].rating)}{"☆".repeat(5 - reviews[index].rating)}
            </div>
          </div>
        </div>
        <p className="testimonial-review">"{reviews[index].review}"</p>

        <div className="button-container">
          <button className="nav-btn" onClick={prevReview}><FaArrowLeft /></button>
          <button className="nav-btn" onClick={nextReview}><FaArrowRight /></button>
        </div>
      </div>
    </section>
  );
};

export default HeroTestimonials;
