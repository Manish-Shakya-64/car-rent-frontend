import React from "react";
import Logo from "../assets/logo.svg";
import user from "../assets/user.png";
import "./header.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ isDetailOpen }) => {
  return (
    <motion.nav className="navbar"
      initial={{ opacity: 0.5, y: 100 }}
      animate={{

        opacity: 1,
        y: isDetailOpen ? -200 : 0,

      }}
      transition={{
        duration: 1,
        yoyo: Infinity,
        ease: "easeInOut"

      }}


    >
      <div className="logo">
        <Link to={'/'} className="menu ">
        <img src={Logo} alt="" srcset="" className="logo-img" />
        </Link>
      </div>
      <ul className="menu">

        <li>HOME</li>
        <li>ELECTRIC CARS</li>
        <li>SPORTS CARS</li>
        <li>SUV</li>

      </ul>
      <div className="search">
        <input type="text" placeholder="Search..." className="outline-none w-FULL px-3 py-2 rounded-lg text-[#333333] font-medium" />
      </div>
      <div className="profile">
        {/* <img src={user} alt="" srcset="" />
        <span>MY ACCOUNT</span> */}
        <Link to={'/login'} className="menu ">Login</Link>
      </div>
    </motion.nav>
  );
};

export default Header;
