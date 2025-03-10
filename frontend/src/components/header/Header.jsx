
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./header.css";

const Header = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo1" style={{ backgroundImage: `url(${logo})` }}></div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to={"/"} className="nav-btn">Home</Link>
        <Link to={"/about"} className="nav-btn">About</Link>
        <Link to={"/courses"} className="nav-btn">Courses</Link>
        
      </nav>
      {/* User Section */}
      <div className="user-section">
        {isAuth ? (
          <Link to={"/account"} className="login-btn">Account</Link>
        ) : (
          <Link to={"/login"} className="login-btn">Login/Register</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
