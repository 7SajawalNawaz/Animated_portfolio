import React, { useRef } from "react";
import "./Stars.css";
import {motion , useScroll , useTransform} from 'framer-motion'

const Stars = ({ type }) => {

    const ref=useRef()

const {scrollYProgress}=useScroll({
    target:ref,
    offset:['start start', 'end start']
})

const yText=useTransform(scrollYProgress,[0,1],["0%","300%"])
const yBg=useTransform(scrollYProgress,[0,1.5],["0%","100%"])




  return (
    <div
      className="star"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132 , #0c0c1d)"
            : "linear-gradient(180deg, #111132 , #505064)",
      }}
    >
      <motion.h1 style={{y: yText}}>{type === "services" ? "What We Do ?" : "What We Did ?"}</motion.h1>
      <motion.div className="mountain" ></motion.div>
      <motion.div  className="planet" style={{ y:yBg, backgroundImage: `url(${type==='services'? 'planets.png':'sun.png'})`}}></motion.div>
      <motion.div style={{x:yBg}} className="moon"></motion.div>
    </div>
  );
};

export default Stars;
