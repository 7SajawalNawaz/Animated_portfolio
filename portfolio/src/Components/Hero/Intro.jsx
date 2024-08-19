import React from "react";
import "./Intro.css";

import { motion } from "framer-motion";
// import { Repeat } from "lucide-react";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
    }
  },
};

const sliderVariant = {
    initial: {
      x: 0,
      
    },
    animate: {
      x: "-220%",
      
      transition: {
        duration: 100,
       repeat : Infinity,
       repeatType:"mirror",
      },
    },
}
const Intro = () => {
  return (
    <div className="hero">
      <div className="wrapper1">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>SAJAWAL NAWAZ</motion.h2>
          <motion.h1 variants={textVariant}>
            Web Developer Motion Designer
          </motion.h1>
          <motion.div variants={textVariant} className="buttons">
            <motion.button variants={textVariant}>Latest Work</motion.button>
            <motion.button  variants={textVariant}><a href="https://www.linkedin.com/in/sajawal-nawaz-10652627saju/?originalSubdomain=pk">Contact Me</a></motion.button>
          </motion.div>
          <motion.img
            variants={textVariant}
            animate='scrollButton'
            className="img1"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div className="slidingtext" 
      variants={sliderVariant}
      animate='animate'
      initial='initial'>Web Developer Motion Designer Video Editor
        
      </motion.div>
      <div className="imageContainer">
        <img src="/saju.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;
