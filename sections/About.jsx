"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      // variants={staggerContainer}
      // initial="hidden"
      // whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| Here Ideas turns into Reality"
        textStyles="text-center text-[25px]"
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
    text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">We </span>
        think it necessary to offer students the option to study and build projects together. SWAG stands for <span className="font-extrabold text-white">SGGS </span> Web App Game developers Club. This club will provide a proper environment for development.
      </motion.p>
      <motion.img
        variants={fadeIn("up","tween",0.3,1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain 
        mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
