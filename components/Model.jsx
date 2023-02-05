import { motion } from "framer-motion"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"
const Model = () =>(

<motion.div
    initial={{ opacity: 0, scale: 0.5, y:-100 }}
    animate={{ opacity: 1, scale: 1 ,y:0}}
    transition={{ duration: 0.5 }}
className={`lg:ml-[85%] ml-[65%] mt-[-40px]
   rounded-[10px] inline-flex flex-col bg-[#1e2840] z-30 absolute p-2`}
>
{/* options={["Projects","Events","About","ContactUs"]} */}
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1 
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96] `}
    >
    
    <a className="text-white font-medium p-[10px] px-5 cursor-pointer" >
    Projects
    </a>
    </div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1 
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
    >
    <a
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
    Events
    </a></div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1 
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
    >
    <a
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
    About
    </a>
    </div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1 
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
    >
    <a
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
    ContactUs
    </a>
    </div>
</motion.div>
)

export default Model