"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText, TitleText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";

const ContactUs = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="gradient-03 z-0" />
      <section className={`${styles.paddings} relative z-10`}>
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <TypingText title="| Events" textStyles="text-center" />
          <TitleText title={<>Coming Soon!</>} textStyles="text-center" />
        </div>
      </section>
      <div className="gradient-04 z-0" />
      <Footer />
    </div>
  );
};
export default ContactUs;
