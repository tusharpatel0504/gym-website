// import React from "react";
// import "./footer.css";
// import {
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillInstagram,
// } from "react-icons/ai";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-content">
//         <p>
//           &copy; 2024 Your Gym trainer. All rights reserved. <br /> Made
//           with ❤️ <a href="">Tridev Pandey</a>
//         </p>
//         <div className="social-links">
//           <a href="">
//             <AiFillFacebook />
//           </a>
//           <a href="">
//             <AiFillTwitterSquare />
//           </a>
//           <a href="https://www.instagram.com/niceandeasyfitness/">
//             <AiFillInstagram />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import "./footer.css";
// import logo1 from "../../assets/logo.jpg";
// import {
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillInstagram,
//   AiOutlineMail,
// } from "react-icons/ai";

// const Footer = () => {
  
//   return (
//     <footer>
//       <div className="footer-content">
//         <div className="left">
//           <img src={logo1} alt="Logo" className="logo"/>
//           <h3>Nice & Easy</h3>
//           <p>
//             Hi! My name is Tridev Pandey and I’m an expert in gym training and fitness. 
//             I can help you achieve your fitness goals.
//           </p>
//           <p>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
//           <p>
//             <AiOutlineMail /> <a href="mailto:support@figma.com">support@figma.com</a>
//           </p>
//           <p>📞 +1 800 854-36-80</p>
          
//         </div>

//         <div className="right">
//           <h3>Company</h3>
//           <ul>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">FAQs</a></li>
//             <li><a href="#">Teams</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React, { useState } from "react";
import "./footer.css";

import logo1 from "../../assets/logo.jpg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch('http://localhost:5000/api/user/sendContactMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        alert('Your message has been sent!');
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert('Failed to send your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send your message.');
    }finally {
      setIsSending(false);
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="left">
          <img src={logo1} alt="Logo" className="logo"/>
          <h3>Nice & Easy</h3>
          <p>
            Hi! My name is Tridev Pandey and I’m an expert in gym training and fitness. 
            I can help you achieve your fitness goals.
          </p>
          <p>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
          <p>
            <AiOutlineMail /> <a href="mailto:support@figma.com">support@figma.com</a>
          </p>
          <p>📞 +1 800 854-36-80</p>
        </div>

        <div className="right1">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <h3>Contact Us</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Your email" 
              required 
              disabled={isSending}
            />
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              placeholder="Subject" 
              required 
              disabled={isSending}
            />
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Your message" 
              required 
              disabled={isSending}
            />
            <button type="submit">{isSending?"Sending..." : "Send"}</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;