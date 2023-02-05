"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useState } from "react";
import Model from "./Model";

const Navbar = () => {
  
  const [modelOpen,setModelOpen] = useState(false)
  
  
  return (
    <>
  <motion.nav variants={navVariants} 
  initial="hidden" 
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}
  viewport={{once:true}}
  >
  <div
    className="absolute inset-0 w-[50%] gradient-01"
  />
  <div className={`${styles.innerWidth} mx-auto flex justify-between
  gap-8 `}>
  <img
    src="./logo.png"
    alt="search"
    className="w-[49px] h-[49px] object-contain hover:cursor-pointer"
  />
  <h2 className="font-extrabold text-[24px] leading-[30px]
  text-white hover:cursor-pointer">
    SWAG
  </h2>
  <img
    src="./menu.svg"
    alt="menu"
    className="w-[24px] h-[24px] object-contain hover:cursor-pointer"
    onClick={() => setModelOpen(!modelOpen) }
  />
  </div>
  </motion.nav>
  {modelOpen && <Model options={["Join Now","Know More","ContactUs"]} />}
  </>)
};

export default Navbar;
