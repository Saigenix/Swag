"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import {
  slideIn,
  textContainer,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      // variants={staggerContainer}
      initial={"hidden"}
      whileInView="show"
      // initial={{ opacity: 0,y:-50 }}
      // animate={{ opacity: 1,y:0 }}
      viewport={{ once: true, amount: 0.35 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div
        className="flex justify-center items-center relative
  z-10 my-0"
      >
        <motion.h1 
        variants={textVariant(0)} 
  //       initial={{ opacity: 0,x:80 }}
  //       animate={{ opacity: 1,x:0 }}
  //       transition={{type: "spring",
  // damping: 10,
  // stiffness: 100,
  // duration: 1.5
  // }}
        className={styles.heroHeading}>
        Official Developer's
        </motion.h1>
        </div>
        <motion.div
          variants={textVariant(0.2)}
          className="flex flex-row justify-center items-center z-20 lg:mt-[-40px]"
        >
          <h1 className={`${styles.heroHeading}`}>
          Club Of SGGSIE&T
          </h1>
        </motion.div>
      <motion.div
      variants={slideIn("right","tween",0,1)}
      viewport={{once:true}}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div 
        className="absolute w-full h-[300px] hero-gradient 
        rounded-tl-[140px] rounded-bl-[140px] z-[0]  -top-[30px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] "/>
          <img
            src='cover.jpg'
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] 
            object-cover rounded-tl-[140px] rounded-bl-[140px] z-10 relative"
          />

          
        <a href="#explore">
        <div className="w-full flex justify-end
        sm:-mt-[70px] -mt-[50px] pr-[40px]
        relative z-10">
        <img
          src="/stamp.png"
          alt="stamp"
          className="sm:w-[155px] w-[150px] sm:h-[155px] h-[150px]
          object-contain"
        />
        </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
