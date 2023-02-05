'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({id,imgUrl,title,index,active,handleClick}) => (
  <motion.div
  variants={fadeIn("right","spring",index*0.5,1)}
  onClick={()=>{handleClick(id)}}
  className={`relative ${active == id ? 'lg:flex-[3.0] flex-[10]':'lg:flex-[0.5] flex-[2]'}
  flex items-center justify-center min-w-[200px] h-[700px]
  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  >
    <img
      src={imgUrl}
      alt={title}
      className='absolute h-full w-full object-cover rounded-[24px]'
    />
    {active !== id ? (
      <h3 
        className="font-semibold sm:text-[26px] text-[18px]
        absolute z-10 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] text-red-600 drop-shadow-lg">
        {title}
      </h3>
    ):(
      <h3 
        className="mt-[24px] font-bold sm:text-[24px] text-[32px]
        absolute z-10 text-red-500 shadow-2xl lg:bottom-[280px] bg-slate-600 rounded-md">
        {title}
      </h3>
    )}
  </motion.div>
);

export default ExploreCard;
