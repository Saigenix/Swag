import { motion } from "framer-motion"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"
const Model = ({options}) =>(

<motion.div
    initial={{ opacity: 0, scale: 0.5, y:-100 }}
    animate={{ opacity: 1, scale: 1 ,y:0}}
    transition={{ duration: 0.5 }}
className={`lg:ml-[85%] ml-[65%] h-[100%]
   rounded-[10px] inline-flex flex-col bg-[#323f5d]`}
>
{options.map((val,index)=>(
    <a key={index}
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
        {val}
    </a>
))}
</motion.div>
)

export default Model