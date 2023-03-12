'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText,ExploreCard,TitleText } from "../components";
import {staggerContainer } from "../utils/motion";
import { useState } from "react";
import { data } from "../constants";


const Explore = () => {
  const [active,setActive] = useState("game")

  return(
  <section className={`${styles.paddings}`} id="explore">
  <motion.div
  // variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport = {{once:true,amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
  <TypingText
        title="| About Club"
        textStyles="text-center text-[25px]"
      />
      <TitleText title={<>Choose You're Favorite  <br 
        className="md:block hidden"
      /> Career Path</>} textStyles="text-center"/>
      <TypingText
        title="* Click On Card To Learn More"
        textStyles="text-center text-[15px]"
      />
      <div
      className="mt-[50px] flex lg:flex-row flex-col
      min-h-[70vh] gap-5">
      {data.map((val,key)=>(
        <ExploreCard
          key={val.id}
          index={key}
          {...val}
          active={active}
          handleClick={setActive}
        />


      ))}
      </div>
  </motion.div>
  </section>
)};

export default Explore;
