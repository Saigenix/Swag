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
    className=" sm:w-[75px] w-[60px] sm:h-[75px] h-[60px] object-contain hover:cursor-pointer"
  />
  <h2 className="font-extrabold md:text-[40px] lg:text-[55px]  text-[30px] leading-[25px]
  text-white hover:cursor-pointer mt-[20px]">SWAG
  </h2>
  <img
    src="./menu.svg"
    alt="menu"
    className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] object-contain hover:cursor-pointer mt-[20px]"
    onClick={() => setModelOpen(!modelOpen) }
  />
  </div>
  </motion.nav>
  {modelOpen && <Model />}
  </>)
};

export default Navbar;
