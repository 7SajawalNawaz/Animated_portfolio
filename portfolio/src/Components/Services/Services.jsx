import React from "react";
import "./Services.css";
import { animate, motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      // initial="initial"
      // whileInView="animate"
    >
      <motion.div className="textcontainer" variants={variants}
      // initial="initial"
      // whileInView="animate"
      >
        <p>
          I Focus On Helping Your Brand To Grow
          <br />
          And Move Forward For Achievements
        </p>
        <hr />
      </motion.div>
      <motion.div className="titlecontainer"variants={variants}
      // initial="initial"
      // whileInView="animate"
      >
        <div className="title" variants={variants}
      // initial="initial"
      // whileInView="animate"
      >
          <img src="brand.jpg" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title" variants={variants}
      initial="initial"
      whileInView="animate"
      >
          <h1>
            <strong>For Your</strong> Buisness.
          </h1>

          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer" 
      variants={variants}
      // initial="initial"
      // whileInView="animate"
      >
        <motion.div
          className="box"
          whileHover={{ background: "grey", color: "black", cursor: "pointer" }}
         >
          <h2>Branding</h2>
          <p>
            From dynamic websites to mesmerizing animations, I excel in crafting
            tailored solutions that resonate with your audience.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "grey", color: "black", cursor: "pointer" }}
          
        >
          <h2>Seamless Integration</h2>
          <p>
            Seamless Integration Seamlessly blending form and function, I ensure
            that every pixel serves a purpose, elevating user engagement and
            driving results.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "grey", color: "black", cursor: "pointer" }}
         >
          <h2>Collabrate</h2>
          <p>
            Your vision is my priority. I work closely with you to understand
            your goals, offering strategic insights and innovative solutions
            every step of the way.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "grey", color: "black", cursor: "pointer" }}
          >
          <h2> Innovative Solutions</h2>
          <p>
            I thrive on pushing the envelope and embracing cutting-edge
            technologies to deliver solutions that stand out in a crowded
            digital landscape.
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
