import React, { useState } from "react";
import "./slider.css";
import leftbtn from "../assets/chevron-left.svg";
import rightbtn from "../assets/chevron-right.svg";
import car1 from "../assets/Car1.png";
import car2 from "../assets/Car2.png";
import car3 from "../assets/Car3.png";
import { motion } from "framer-motion";

const cars = [
  { name: "mustang", company: "ford", image: car1, color: "#314559" },
  { name: "a3", company: "Audi", image: car2, color: "#33333380" },
  { name: "mustang", company: "ford", image: car3, color: "#78000D" },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cars.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cars.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="slider-box">
        <div className="left arrows" onClick={prevSlide}>
          <img src={leftbtn} alt="Left" />
        </div>
        <div className="right arrows" onClick={nextSlide}>
          <img src={rightbtn} alt="Right" />
        </div>
        <div className="car-name-box">
          <div className="name-slide">
            {cars.map((car, index) => (
              <div
                key={index}
                className="name-slide-item"
                style={{ transform: `translateY(-${currentSlide * 100}%)` }}
              >
                <span className="company-name">{car.company}</span>
                <span className="car-name">{car.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="buttons">
          <button
            className="btn rent-btn"
            style={{
              color: "white",
              backgroundColor: cars[currentSlide].color,
            }}
          >
            rent now
          </button>
          <button className="btn details-btn">details</button>
        </div>
        <div className="indicator">
          {cars.map((_, index) => (
            <span
              key={index}
              className={`indicator-item ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="car-image-box">
        <motion.div
          className="car-image"
            // initial={{ x: "-100vw" }}
            animate={{ x: -currentSlide * 100 + "vw" }}
            transition={{ type:"spring",stiffness:200,damping:30}}
        //   style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {cars.map((car, index) => (
            <div key={index} className="car-image-item">
              <img src={car.image} alt={car.name} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
