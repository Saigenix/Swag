"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText, TitleText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Events = () => {
  return (
      <section className={`${styles.paddings} relative z-10`}>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          {/* <TypingText title="| " textStyles="text-center" /> */}
          <TitleText title={<>WebVerse</>} textStyles="text-center text-red-500" />
        </div>
      </section>
  );
};
export default Events;
