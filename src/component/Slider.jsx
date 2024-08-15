import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./slider.css";
import leftbtn from "../assets/chevron-left.svg";
import rightbtn from "../assets/chevron-right.svg";
import car1 from "../assets/Car1.png";
import car2 from "../assets/Car2.png";
import car3 from "../assets/Car3.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";
import pump from "../assets/pump.svg";
import seat from "../assets/seat.svg";
import engine from "../assets/engine.svg";
import Header from "./Header";

const cars = [
  {
    name: "mustang",
    company: "Ford",
    image: car1,
    color: "#314559",
    images: [l1, l2, l3, l4],
    specs: [
      { icon: pump, title: "Petrol", value: "800 KM", unit: "" },
      { icon: seat, title: "Seats", value: 4, unit: "" },
      { icon: engine, title: "Horsepower", value: 345, unit: "HP" },
    ],
  },
  {
    name: "a3",
    company: "Audi",
    image: car2,
    color: "#33333380",
    images: [l1, l2, l3, l4],
    specs: [
      { icon: pump, title: "Petrol", value: "563 KM", unit: "" },
      { icon: seat, title: "Seats", value: 5, unit: "" },
      { icon: engine, title: "Horsepower", value: 201, unit: "HP" },
    ],
  },
  {
    name: "lc series",
    company: "Lexus",
    image: car3,
    color: "#78000D",
    images: [l1, l2, l3, l4],
    specs: [
      { icon: pump, title: "Hybrid", value: "644 KM", unit: "" },
      { icon: seat, title: "Seats", value: 2, unit: "" },
      { icon: engine, title: "Horsepower", value: 354, unit: "HP" },
    ],
  },
];

const specStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Stagger duration
    },
  },
};

const specsStaggerItem = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cars.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    if (isDetailsOpen) {
      setIsDetailsOpen(false);
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? cars.length - 1 : prevSlide - 1
      );
    }
  };

  const openDetails = () => {
    setIsDetailsOpen(true);
  };



  return (
    <>
      <Header isDetailOpen={isDetailsOpen} />

      <motion.div
        className="slider-box"
        animate={{ y: isDetailsOpen ? -80 : 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="left arrows"
          onClick={prevSlide}
          animate={{ y: isDetailsOpen ? -290 : 0 }}
          transition={{ duration: 1 }}
        >
          <img src={leftbtn} alt="Left" />
        </motion.div>
        <motion.div
          className="right arrows"
          onClick={nextSlide}
          animate={{ x: isDetailsOpen ? 400 : 0 }}
          transition={{ duration: 1 }}
        >
          <img src={rightbtn} alt="Right" />
        </motion.div>

        <div className="car-name-box">
          <div className="name-slide">
            {cars.map((car, index) => (
              <motion.div
                key={index}
                className="name-slide-item"
                animate={{ y: -currentSlide * 100 + "%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <motion.span
                  className="company-name"
                  animate={{ fontSize: isDetailsOpen ? "48px" : "64px" }}
                  transition={{ duration: 1 }}
                >
                  {car.company}
                </motion.span>
                <motion.span
                  className="car-name"
                  animate={{ fontSize: isDetailsOpen ? "180px" : "200px" }}
                  transition={{ duration: 1 }}
                >
                  {car.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="btn-box"
          initial={{ y: 0, opacity: 1, display: "block" }}
          animate={{
            y: isDetailsOpen ? 200 : 0,
            opacity: isDetailsOpen ? 0 : 1,
            display: isDetailsOpen ? "none" : "block",
          }}
          transition={{ duration: isDetailsOpen ? 0.7 : 0.5 }}
        >
          <div className="buttons">
            <button
              className="btn rent-btn"
              style={{
                color: "white",
                backgroundColor: cars[currentSlide].color,
                outline: "none",
                border: "none",
              }}
            >
              Rent Now
            </button>
            <button className="btn details-btn" onClick={openDetails}>
              Details
            </button>
          </div>
          <div className="indicator">
            {cars.map((_, index) => (
              <span
                key={index}
                className={`indicator-item ${index === currentSlide ? "active" : ""
                  }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </motion.div>
        {isDetailsOpen && (
          <motion.div
            className="cars-images-box"
            variants={{
              hidden: { opacity: 0, y: 0 },
              show: {
                opacity: 1,
                y: -100,
                transition: {
                  staggerChildren: 0.5, // Stagger duration
                },
              },
            }}
            initial="hidden"
            animate={isDetailsOpen ? "show" : "hidden"}
          >
            <h4
              style={{
                color: "#454545",
                fontSize: "16px",
                fontWeight: 600,
                paddingLeft: "0.6rem",
              }}
            >
              TAKE A LOOK
            </h4>
            <div className="images">
              {cars[currentSlide].images.map((image, index) => {
                return (
                  <motion.img
                    src={image}
                    alt=""
                    key={index}
                    className="car-images"
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  />
                );
              })}
            </div>
            <button
              className="btn rent-btn"
              style={{
                color: "white",
                backgroundColor: cars[currentSlide].color,
                outline: "none",
                border: "none",

                margin: "2rem auto",
              }}
            >
              Rent Now
            </button>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="specs-box"
        variants={specStaggerContainer}
        initial="hidden"
        animate={isDetailsOpen ? "show" : "hidden"}
      >
        <motion.h2
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: isDetailsOpen ? 1 : 1.3, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="specs-title"
        >
          Specs
        </motion.h2>
        {cars[currentSlide].specs.map((spec, index) => (
          <motion.div
            key={index}
            variants={specsStaggerItem}
            className="specs-item"
          >
            <img src={spec.icon} alt="icon" />
            <span
              className="spec-value"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#454545",
              }}
            >
              {spec.value} {spec.unit}
            </span>
            <span
              className="spec-title"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "#828282",
              }}
            >
              {spec.title}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="car-image-box">
        <motion.div
          className="car-image"
          initial={{ x: 0 }}
          animate={{
            x: -currentSlide * 100 + "vw",
            y: isDetailsOpen ? -120 : 0,
          }}
          transition={{ duration: 1.2 }}
        >
          {cars.map((car, index) => (
            <div key={index} className="car-image-item">
              <motion.img
                src={car.image}
                alt={car.name}
                animate={{ scale: isDetailsOpen ? 0.9 : 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
