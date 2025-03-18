import React from "react";
import "./tainwithus.css";
import newsXLogo from "../../assets/feature/NewsX_Logo.png";
import redbull from "../../assets/feature/redbullcom-logo.svg";
import cosmopolitanLogo from "../../assets/feature/blackHeader.jpg";
import aajTakLogo from "../../assets/feature/Aaj_tak_logo-p-500.png";
import ndtvLogo from "../../assets/feature/NDTV_logo.svg-p-500.png";
import news18Logo from "../../assets/feature/Add-a-heading-53.png";
import zeeNewsLogo from "../../assets/feature/773839-zee-news-logo-removebg-preview-p-500.png";
import hindustanTimesLogo from "../../assets/feature/R-p-500.png";
import timesOfIndiaLogo from "../../assets/feature/Add-a-heading-52.png";
import yahoo from "../../assets/feature/yahoologo.png";
import img3 from "../../assets/feature/img3.png";
import tedx from "../../assets/feature/tedx.png";

const TrainWithUs = () => {
  return (
    <div className="trainwithus-container-main">
      <div className="trainwithus-container">
      {/* Featured In Section */}
      <div className="featured-section">
        <h1 className="featured-heading">
          As Seen And 
          <div className="featured-in-in-in">Featured In!</div>
        </h1>
        <div className="featured-logos">
          <div className="logo-row">
            <img src={tedx} alt="NewsX" className="logo-item" />
            <img src={img3} alt="NewsX" className="logo-item" />
            <img src={newsXLogo} alt="img3" className="logo-item" />
            <img src={yahoo} alt="yahoo" className="logo-item" />
          </div>
          <div className="logo-row">
            <img src={redbull} alt="Red Bull" className="logo-item" />
            <img src={cosmopolitanLogo} alt="Cosmopolitan" className="logo-item" />
            <img src={aajTakLogo} alt="Aaj Tak" className="logo-item" />
            <img src={ndtvLogo} alt="NDTV" className="logo-item" />
          </div>
          <div className="logo-row">
            <img src={news18Logo} alt="News18" className="logo-item" />
            <img src={zeeNewsLogo} alt="Zee News" className="logo-item" />
            <img src={hindustanTimesLogo} alt="Hindustan Times" className="logo-item" />
            <img src={timesOfIndiaLogo} alt="The Times of India" className="logo-item" />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default TrainWithUs;
