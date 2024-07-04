import React from "react";
import Logo from "../assets/logo.svg";
import user from "../assets/user.png";
import "./header.css";
import { motion } from "framer-motion";

const Header = ({isDetailOpen}) => {
  return (
    <motion.nav className="navbar"
    initial={{ opacity:0.5 , y:100}}
animate={{
   
    opacity:1,
    y: isDetailOpen ? -200 : 0,
    
}}
transition={{
    duration:1,
    yoyo:Infinity,
    ease:"easeInOut"

}}
        
    
    >
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
    </motion.nav>
  );
};

export default Header;
