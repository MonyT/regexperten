import { motion } from "motion/react"

import "./logo.css"

export const Logo = () => {

    return (
        <motion.div
            whileTap={{
                borderRadius: ["8px", "50%", "8px",],
                rotate: [0, 0, 180, 180, 180, 360],
            }}

            className="box"
            animate={{

                rotate: [0, 0, 180, 180, 180, 360],
                borderRadius: ["8px", "50%", "50%", "50%", "8px"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 10
            }}
        >
            <motion.span
                whileHover={{
                    color: "#e0dfd5"
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: 0,
                    repeatDelay: 10
                }}
                animate={{
                    color: ["#e0dfd5", "#213547", "#e0dfd5", "#213547"],
                }}>.</motion.span>
            <motion.span
                whileHover={{
                    color: "#e0dfd5"
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: 0,
                    repeatDelay: 10
                }}
                animate={{
                    color: ["#e0dfd5", "#213547", "#e0dfd5", "#213547"],
                }}>*</motion.span>

        </motion.div>
    )
}