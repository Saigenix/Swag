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
          <div>
          <span className=" font-bold text-white">✉️ Mail: </span>
          <a href="mailto:swag@sggs.ac.in?subject=contact%20Us" className=" underline text-secondary-white">
          swag@sggs.ac.in
          </a>
          </div>

        </div>
      </section>
      </>
  );
};
export default ContactUs;
