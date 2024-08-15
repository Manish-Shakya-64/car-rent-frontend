import React from "react";
import Logo from "../assets/logo.svg";
import user from "../assets/user.png";
import "./header.css";
import { motion } from "framer-motion";
import { Link,useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Header = ({ isDetailOpen }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();


  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0.5, y: 100 }}
      animate={{
        opacity: 1,
        y: isDetailOpen ? -200 : 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/electric-cars">Electric Cars</Link></li>
        <li><Link to="/sports-cars">Sports Cars</Link></li>
        <li><Link to="/suv">SUV</Link></li>
      </ul>
      <div className="search">
      <input type="text" placeholder="Search..." className="outline-none w-full px-3 py-2 rounded-lg text-[#4a4a4a] font-medium" />
      </div>
      <div className="profile">
       
        {isLoggedIn 
          ? <>
          <img src={user} alt="User" className="profile-img" />
          <button className="logout-button"
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            navigate('/login');
          }}
          >Logout</button></>
          : <Link to="/login" className="login-link">Login</Link>
        }
      </div>
    </motion.nav>
  );
};

Header.propTypes = {
  isDetailOpen: PropTypes.bool.isRequired,
};

export default Header;

