"use client";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TypingText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";
const AboutUs = () => {
  return (
    <>
      <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <div className="gradient-03 z-0 " />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| Welcome to our club!" />
          <img
            src="/ab1.jpg"
            alt="author"
            className="p-2 m-2 rounded-md drop-shadow-lg opacity-80 object-contain "
          />

          <motion.p
            // variants={fadeIn("up", "tween", 6, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
      text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">We are </span> a group of enthusiastic
            coders who come together to learn, share knowledge and work on exciting projects. Our club
            is open to everyone, regardless of your experience level or background. Whether you're a beginner
            or a seasoned pro, you'll find a welcoming and supportive community. We believe that everyone should
            have equal access to technology
            education and that diverse perspectives make our club strong.
          </motion.p>
          <br />
          <TypingText title="| Image Gallery" />
          <div
            className="flex lg:flex-row flex-col m-10 "
          >

            <motion.img
              // variants={fade("up", "tween", 0.3, 1)}
              src="/ab2.jpg"
              alt="arrow down"
              className="max-h-[500px] max-w-[400px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
            />
            <motion.img
              // variants={fadeIn("up", "tween", 0.3, 1)}
              src="/ab3.jpg"
              alt="arrow down"
              className="max-h-[500px] max-w-[380px] p-2 m-2 rounded-md drop-shadow-lg object-contain "
            />
            <motion.img
              // variants={fadeIn("up", "tween", 0.3, 1)}
              src="/ab4.jpg"
              alt="arrow down"
              className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
            />

          </div>
          <motion.p
            // variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
      text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">Our mission </span> is to create a fun and
            inclusive environment where members can learn and grow as coders. We hold regular meetings and workshops
            where we explore new technologies and discuss coding challenges. We also work on group projects, where
            members can collaborate and apply their skills to real-world problems.
          </motion.p>
          <br />
          <motion.p
            // variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
      text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">We offer </span>a variety of events,
            such as workshops, hackathons, and guest speaker talks, to help members learn new skills,
            network with other programmers, and work on exciting projects. Also we have special committees
            for Web Development, App Development and Game Development separately. Where we turn ideas into realities.
          </motion.p>
          <br />
          <h3
            className="mt-[8px] font-extrabold sm:text-[32px] text-[20px] 
      text-center text-white underline ">
            OUR TECHTUTORS
          </h3>
          <div
            className="flex lg:flex-row flex-col m-10 flex-wrap"
          >
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a1.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Gajanan Palepwad
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                President
                &
                App Coordinator
              </span>
            </div>
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a2.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Sushil Boybar
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                Event Coordinator
              </span>
            </div>
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a3.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Yuvraj Darshankar
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                Graphics Coordinator
              </span>
            </div>
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a7.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Anjali Biradar
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                Web Coordinator
              </span>
            </div>
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a4.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Sanika Narwade
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                Report Coordinator
              </span>
            </div>
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a5.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Shreyansh Rajput
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                Media Coordinator
              </span>
            </div>
            <div
              className="glassmorphism rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
                // variants={fadeIn("up", "tween", 0.3, 1)}
                src="/a6.jpg"
                alt="arrow down"
                className="max-h-[500px] max-w-[320px] p-2 m-2 rounded-md drop-shadow-lg object-contain"
              />
              <span className="font-bold text-white my-2 underline self-center">
                Yashomati Bawane
              </span>
              <br />
              <span className="font-bold mb-3 underline self-center text-secondary-white">
                Magzine Coordinator
              </span>
            </div>
          </div>
          <motion.p
            // variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
      text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">Join us </span>to expand your knowledge and skills in coding, network with other programmers, and have fun along the way!
            If you're interested in joining our Coding Club, simply reach out to us through our contact page. We'd love to hear from you and welcome you into our community of passionate coders. Let's learn, grow, and code together!

          </motion.p>
          <br />
          <br />
          <TypingText title="| Our Team" />
          <br />
          <img
            src="/feed.jpg"
            alt="author"
            className="p-2 m-2 rounded-md drop-shadow-lg opacity-80 object-contain "
          />
        </motion.div>
      </section>
    </>
  );
};
export default AboutUs;
