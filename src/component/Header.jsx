import React from "react";
import Logo from "../assets/logo.svg";
import user from "../assets/user.png";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="" srcset="" className="logo-img"/>
      </div>
      <ul className="menu">
        
          <li>HOME</li>
          <li>ELECTRIC CARS</li>
          <li>SPORTS CARS</li>
          <li>SUV</li>
    
      </ul>
      <div className="profile">
        <img src={user} alt="" srcset="" />
        <span>MY ACCOUNT</span>
      </div>
    </nav>
  );
};

export default Header;
