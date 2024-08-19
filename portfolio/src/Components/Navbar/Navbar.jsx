import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* {sidebar} */}

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sajawal Nawaz
        </motion.span>
        <div className="social">
          <a  href="https://www.instagram.com/sajawalnawaz_/" target="blank">
            <img src="facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/sajawalnawaz_/" target="blank">
            <img src="instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="dribbble.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sajawal-nawaz-10652627saju/?originalSubdomain=pk" target="blank">
            <img src="in.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
