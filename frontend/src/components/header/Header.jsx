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
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
       <div className="abtcouhme"> <Link to={"/"} className="nav-btn2" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to={"/about"} className="nav-btn2" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to={"/courses"} className="nav-btn2" onClick={() => setMenuOpen(false)}>Courses</Link></div>
        <div className="abtcouhme3">
        {isAuth ? (
          <Link to={"/account"} className="login-btn" onClick={() => setMenuOpen(false)}>Account</Link>
        ) : (
          <Link to={"/login"} className="login-btn" onClick={() => setMenuOpen(false)}>Login/Register</Link>
        )}
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
