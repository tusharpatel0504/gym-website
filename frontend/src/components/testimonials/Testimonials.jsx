import React from "react";
import "./testimonials.css";
import aashtaImg from "../../assets/reviewa/aashta.png";
import ananyaImg from "../../assets/reviewa/ananya.png";
import ankushImg from "../../assets/reviewa/ankush.png";
import arnavImg from "../../assets/reviewa/arnav.jfif";
import blueticks from "../../assets/reviewa/bluetick.png";

const reviews = [
  { 
    name: "Darrell Steward", 
    review: "You made it so simple. My new site is much faster and easier to work with than my old site.", 
    image: aashtaImg, 
    tag: "#another",
    profileLink: "https://twitter.com/darrell" // Change to actual profile link
  },
  { 
    name: "Leslie Alexander", 
    review: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.", 
    image: ananyaImg, 
    tag: "#Celebration",
    profileLink: "https://instagram.com/leslie"
  },
  { 
    name: "Jenny Wilson", 
    review: "This is a top-quality product. No need to think twice before making it live on web.", 
    image: ankushImg, 
    tag: "#make_it_fast",
    profileLink: "https://twitter.com/jennywilson"
  },
  { 
    name: "Kristin Watson", 
    review: "Finally, I've found a template that covers all bases for a Bootstrap-based startup.", 
    image: arnavImg, 
    tag: "#Celebration",
    profileLink: "https://instagram.com/kristinwatson"
  },
  { 
    name: "Guy Hawkins", 
    review: "This is a top-quality product. No need to think twice before making it live on web.", 
    image: aashtaImg, 
    tag: "#make_it_fast",
    profileLink: "https://twitter.com/guyhawkins"
  },
  { 
    name: "Marvin McKinney", 
    review: "With Celebration, it’s quicker with the customer. The customer is more ensured of getting exactly what they ordered.", 
    image: ananyaImg, 
    tag: "#dev #tools",
    profileLink: "https://instagram.com/marvin"
  }
];

const HeroTestimonials = () => {
  return (
    <section className="testimonial-section">
      <h1 className="testimonial-title">What our customers say</h1>
      <p className="testimonial-subtitle">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
      </p>
      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={review.image} alt={review.name} className="testimonial-avatar" />
              <div className="testimonial-info">
                <a 
                  href={review.profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="testimonial-name"
                >
                  {review.name}
                </a>
                <img src={blueticks} alt="Verified" className="testimonial-badge" />
              </div>
            </div>
            <p className="testimonial-review">"{review.review}"</p>
            <span className="testimonial-tag">{review.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroTestimonials;
