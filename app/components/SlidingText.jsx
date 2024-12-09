
import { motion } from "motion/react"



export default function SlidingText({ children }) {


    return (

      

        <motion.span className="inline-block" initial="initial" whileInView="inView" viewport={{margin:"0px 0px 0px 0px", once: true, amount: "some"}} transition={{staggerChildren:0.005, ease: "easeInOut"}}>
            {children.split(' ').map((i, key) => {
                if(key == (children.split(" ").length - 1))
                return (
                    <span key={key}>
                        <span className="inline-block overflow-hidden min-h-max" x={key}>
                            <motion.span className="inline-block h-max" transition={{duration:0.8}} variants={{ initial: { y: 100 }, inView: { y: -2 } }} i={key}>
                            {i}
                            </motion.span>
                        </span>
                    </span>
                )
                else
                return (

                    <span key={key}>
                    <span className="inline-block overflow-hidden h-max" x={key}>
                        <motion.span className="inline-block h-max" transition={{duration:0.8}} variants={{ initial: { y: 100 }, inView: { y: -2 } }} i={key}>
                        {i}&nbsp;
                        </motion.span>
                    </span>
                </span>
                )
            })}
        </motion.span>
    )
}
