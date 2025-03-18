import React from "react";
import "./socialstrip.css"; 
import instagram from "../../assets/Instagram.png";
import youtube from "../../assets/YouTube.png";
import x from "../../assets/X.png";
import facebook from "../../assets/Facebook.png";

const SocialMediaStrip = () => {
  const socialLinks = [
    { name: "Instagram", icon: instagram, link: "https://instagram.com" },
    { name: "x.com", icon: x, link: "https://x.com" },
    { name: "Facebook", icon: facebook, link: "https://facebook.com" },
    { name: "Youtube", icon: youtube, link: "https://youtube.com" },
  ];

  return (
    <div className="social-strip">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <div className="social-icon">
            <img src={social.icon} alt={social.name} />
          </div>
          <span className="social-name">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaStrip;
