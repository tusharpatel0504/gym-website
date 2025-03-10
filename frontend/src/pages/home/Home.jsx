
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gymBg1 from "../../assets/backgroundimagesherosection/gymframe40.png";
import gymBg2 from "../../assets/backgroundimagesherosection/72b8fd170eb86b20bbfb832b3b2c9ea4.jpg";
import gymBg3 from "../../assets/backgroundimagesherosection/377995e55ae59d2d604a33248b4db519.jpg";
import gymBg4 from "../../assets/backgroundimagesherosection/377995e55ae59d2d604a33248b4db519.jpg";
import clientImage from "../../assets/tridevpandey.png";
import Testimonials from "../../components/testimonials/Testimonials";
import TrainWithUs from "../../components/packages/trainwithus";
import OurServices from "../../components/ourservices/OurServices";
import Svideo from "../../components/svideo/svideo.jsx";
import Record from "../../components/record/record.jsx";
import CoachingStyle from "../../components/backgroundi/CoachingStyle.jsx";
import ContactFormModal from "../../components/contactFormModal/contactFormModal";

import "./home.css";
import SVideo from "../../components/svideo/svideo.jsx";

const bgImages = [gymBg1, gymBg2, gymBg3, gymBg4];

const Home = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContactModal, setShowContactModal] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);
    const handleShowContactModal = () => setShowContactModal(true);
    const handleCloseContactModal = () => setShowContactModal(false);

    return (
        <div className="homecont">
            <div className="homePage-container">
                {bgImages.map((img, index) => (
                    <div
                        key={index}
                        className={`homePage-background-slide ${index === currentIndex ? "homePage-active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

            
                <div className="homePage-hero-content">
                    <div className="homePage-hero-title"><h1>Tridev Pandey</h1></div>
                    <p className="homePage-hero-description">
                    Hi, I'm TREDEV PANDEY. I specialize in nutrition, business, and solving fat-loss challenges. With years of experience, I help individuals achieve their health goals through customized strategies, diet plans, and fitness coaching. My mission is to educate and empower people to lead a healthy lifestyle.
                    </p>
                    <button className="homePage-explore-btn" onClick={() => navigate("/about")}>Explore More</button>
                    <button className="homePage-still-btn" onClick={handleShowContactModal}>Still Confused?</button>

                </div>

               
                <div className="homePage-profile-image" style={{ backgroundImage: `url(${clientImage})` }}></div>
            </div>
           
           
           
            <Record/>
          <OurServices/>
            <TrainWithUs />
            <CoachingStyle/>
            <SVideo/>
            <Testimonials />
            <ContactFormModal show={showContactModal} handleClose={handleCloseContactModal} onFormSubmitted={() => {}} />
        </div>
    );
};

export default Home;
