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
          <motion.img
            // variants={fadeIn("up", "tween", 0.3, 1)}
            src="/e1.png"
            alt="webverse"
            className="max-h-[100px] max-w-[100px]p-2 m-2 rounded-md drop-shadow-lg object-contain self-center"
          />
          {/* <TitleText title={<>WebVerse 2023</>} textStyles="text-center text-red-500" /> */}
          <br/>
          <h1 className="underline text-2xl font-bold text-secondary-white text-center">
          Turn idea into reality
          </h1>
          <motion.p
              // variants={fadeIn("up", "tween", 0.2, 1)}
              className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
      text-center text-secondary-white"
            >
              <span className="font-extrabold text-white">Unleash </span>the full potential of your website development skills and showcase your ideas in the field of web development at SWAG. Develop interactive and attractive websites. Let the world recognize you. Be a part of this biggest web development competition in the history of SGGSIE&T Nanded. Compete with highly skilled developers in WebVerse and earn a chance to win big prizes.
 
            </motion.p>
            <br/>
          <motion.p
              // variants={fadeIn("up", "tween", 0.2, 1)}
              className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white"
            >
              <span className="font-extrabold text-red-200">Improve your potential to develop website in WebVerse after participating</span>
 
            </motion.p>
            <ul className="text-white mx-10 my-5">
              <li className="p-3">
              - What are the teams going to achieve?
              </li>
              <li className="p-3">
              - Development of leadership qualities and teamwork along with project management skills<br/> that will act as a base for your future projects.
              </li>
              <li className="p-3">
              - Hands-on experience on designing, coding and publishing a website.
              </li>
              <li className="p-3">
              - Exciting prizes and certificates after completion and for participation.
              </li>
              <li className="p-3">
              - Top 3 teams will be given a chance to appear for the interview for direct recruitment in SWAG.
              </li>
              <li className="p-3">
              - Teams will be awarded on the basis of how interactive and responsive their website is,<br/> and how effectively it fulfills the user’s expectations.
              </li>
            </ul>
            <br/>
            <div className="flex lg:flex-row flex-col p-4">
            <div
            className="glassmorphism2 rounded-md flex justify-center flex-col items-center m-5 p-4 hover:shadow-2xl hover:scale-[105%]">
              
          <span className="font-bold text-white my-2 self-center">
          Cash Prizes     
          </span>
          <span className="font-bold mb-3 underline self-center text-secondary-white text-center">
          The overall prize pool of RS.6,000
          </span>
            </div>
            <div
            className="glassmorphism2 rounded-md flex justify-center flex-col align-middle m-5 p-4 hover:shadow-2xl hover:scale-[105%]">
              
          <span className="font-bold text-white my-2 self-center">
          Certificate of Participation
          </span>
          <span className="font-bold mb-3 underline self-center text-secondary-white text-center">
          participants will get the certificate
          </span>
            </div>
            </div>
            <br/>
            <motion.p
              //variants={fadeIn("up", "tween", 0.2, 1)}
              className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
      text-left text-secondary-white"
            >
              <span className="font-extrabold text-red-200 ">Steps to register and be a part of WEBVERSE</span>
 
            </motion.p>
            <ul className="text-white mx-10 my-5">
              <li className="p-5 text-2xl font-bold flex flex-col" >
                <span>
                📃 Fill up the Form
                </span>
                <span className="text-secondary-white text-sm">
                Please fill up the Google form attached below with your accurate and unique information <br/>
                before the registration deadline on 8th April at 11:59 PM.<br/>
                Kindly make sure to pay the required fee payment for the competition as well.
                </span>
              </li>
              <li className="p-5 text-2xl font-bold flex flex-col" >
                <span>
                ✅ Verifying Details
                </span>
                <span className="text-secondary-white text-sm">
                Our SWAG team will conduct a thorough verification of the information provided by you.<br/>
                If any issues are encountered during the verification process,<br/>
                 we will contact the respective team for resolution and necessary correction. <br/>
                 If everything is in order, 
                you can expect to receive a confirmation email within 1-2 days.
                </span>
              </li>
              <li className="p-5 text-2xl font-bold flex flex-col" >
                <span>
                🧑‍💻 Code and Develop the Website within the given time frame
                </span>
                <span className="text-secondary-white text-sm">
                Upon receiving the confirmation email, please visit the SWAG Lab at CSE 
                Department <br/>where you will be guided through the process of building a website 
                and the rules and regulations to be followed.<br/> You will be supposed to complete the website 
                within the given time frame for getting qualified in the competition.
                </span>
              </li>
            </ul>
            <br/>
            <div
            className="glassmorphism2 rounded-md flex justify-center flex-col align-middle m-5">
              <motion.img
            // variants={fadeIn("up", "tween", 0.3, 1)}
            src="/e2.png"
            alt="webverse"
            className="max-h-[200px] max-w-[320px] p-5 m-5 rounded-md drop-shadow-lg object-contain self-center"
          />
          <span className="font-bold text-2xl text-white my-2 self-center">
          WebVerse     
          </span>
          <span className="font-bold mb-3 text-center self-center text-secondary-white p-4 w-[80%] opacity-80">
          Every team will be given a specific theme and a limited time duration to complete the website. All the teams are then supposed to build a website based on the provided theme in the given time. The best website will win the competition. 
          It will be judged on factors like interactiveness, loading time, appearance, input validation, etc.
          </span>
          <a href="/rules.pdf" download="ruleBook" className="bg-red-700 font-bold rounded-md text-white p-2 self-center hover:bg-purple-500 m-4">
            View Rules
          </a>
            </div>
            <br/>
            <TitleText title={<>📄 Register Now!</>} textStyles="text-center text-[30px] text-red-500" /> 
            <div className="glassmorphism2 p-2 m-4 flex flex-col rounded-md">
            <span className="font-bold m-1 text-center self-center text-secondary-white p-2 w-[80%] opacity-80">
            Click below to register
            </span>
            <a href="https://forms.gle/aGsxEreQSNFpYp8E7" target="_blank" className="bg-red-700 font-bold rounded-md text-white p-2 self-center hover:bg-purple-500 m-4">
            Register Now
          </a>
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeY3sGu5BvuqGExbqhaMNsSAUISxDi-5vV8zk3WAClfIbAvxg/viewform?embedded=true" className="rounded-md self-center p-2 m-2 shadow-md" width="900" height="1000" frameborder="1" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </div>
        </div>
      </section>
  );
};
export default Events;
