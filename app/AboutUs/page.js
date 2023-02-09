"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";

const AboutUs = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="gradient-03 z-0" />
      <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| About Us" />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
    text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">SWAG </span> Developer’s
            Club is a community where you convert your creative ideas into
            projects no matter if you have any prior knowledge about these
            fields, Here we will learn all of these things. We enhance your
            programming skills where your ideas come to reality Web App Game
            developers Club. This club will provide a proper environment for
            development.
          </motion.p>
          <motion.img
            variants={fadeIn("up", "tween", 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain 
        mt-[28px]"
          />
        </motion.div>
      </section>
      <div className="gradient-04 z-0" />
      <Footer />
    </div>
  );
};
export default AboutUs;
