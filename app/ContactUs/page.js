"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText, TitleText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";

const ContactUs = () => {
  return (
    <>
      <section className={`${styles.paddings} relative z-10`}>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <TypingText title="| Contact us" textStyles="text-center" />
          <TitleText title={<>Coming Soon!</>} textStyles="text-center" />
        </div>
      </section>
      </>
  );
};
export default ContactUs;
