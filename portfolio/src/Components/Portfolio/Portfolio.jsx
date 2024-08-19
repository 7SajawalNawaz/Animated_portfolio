import React, { useRef } from "react";
import "./Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// motion of progress bar

const items = [
  {
    id: 1,
    title: "React Application",
    img: "2.jpg",
    desc: "Experienced React developer adept in crafting dynamic user interfaces and scalable web applications. Proficient in JSX, state management, and component-based architecture. Skilled in responsive design and ensuring cross-browser compatibility. Committed to delivering high-quality code and meeting project deadlines.",
  },

  {
    id: 2,
    title: "Software Development",
    img: "1.jpg",
    desc: "Accomplished software developer proficient in designing and implementing robust applications. Skilled in various programming languages and frameworks, with expertise in problem-solving and algorithmic thinking. Dedicated to delivering efficient, scalable solutions tailored to client needs while adhering to best practices and project timelines.",
  },

  {
    id: 3,
    title: "Graphic Designing",
    img: "3.jpg",
    desc: "Talented graphic designer with a flair for creating captivating visual experiences. Proficient in industry-standard design software and techniques, adept at translating client visions into compelling artwork. Skilled in branding, illustration, and UI/UX design, committed to delivering high-quality designs that resonate with target audiences.",
  },

  {
    id: 4,
    title: "Motion Graphics ",
    img: "5.jpg",
    desc: "Expert video editor proficient in crafting engaging visual content. Skilled in industry-standard editing software and techniques, with a keen eye for detail and storytelling. Experienced in all aspects of post-production, including color grading, sound design, and visual effects. Committed to delivering high-quality videos that exceed client expectations.",
  },
];

const Display = ({ item }) => {
  const ref = useRef();
  // for text motion

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
    // layoutEffect: false, // Set layoutEffect to false
  });
 

  const y = useTransform(scrollYProgress, [1, 0], [-600, 600]);

  return (
    <section >
      <div className="container1">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div
            className="textcontainer"
            style={{y}}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    layoutEffect: false, // Set layoutEffect to false
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  console.log("scaleX value:", scaleX);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressbar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Display item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
