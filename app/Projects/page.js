"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText, TitleText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Projects = () => {
  return (
      <section className={`${styles.paddings} relative z-10`}>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <TypingText title="| Projects" textStyles="text-center" />
          
        </div>
      </section>
  );
};
export default Projects;
