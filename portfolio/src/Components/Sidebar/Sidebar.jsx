import React, { useState } from "react";
import { motion } from 'framer-motion'; // Removed unnecessary import
import "./Sidebar.css";
import Links from "./links/Links";
import Togglebutton from "./Togglebutton/Togglebutton";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 40,
        }
    },
    closed: {
        clipPath: 'circle(30px at 50px 50px)',
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30,
        }
    }
};
const Sidebar = () => {

    const [open, setOpen] = useState(false);

    

    return (
        <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <Togglebutton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;