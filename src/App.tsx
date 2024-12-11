import './App.css'
import { motion } from "motion/react"


function App() {
  return (
    <div className="body">
      <div className="header">
        <motion.div animate={{ x: 100 }}>
          <motion.div
            className="box"
            animate={{
              scale: [1, 1.25, 1.25, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["50%", "50%", "8px", "8px"]
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
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 10
              }}
              animate={{
                color: ["#e0dfd5", "#ef6461", "#213547"],
              }}>.</motion.span>
            <motion.span transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 0,
              repeatDelay: 10
            }}
              animate={{
                color: ["#e0dfd5", "#ef6461", "#213547"],
              }}>*</motion.span>

          </motion.div>

        </motion.div>
        <h1 className="logo">RegeXperteN</h1>
      </div>
      <div className='content'>
        <span>Nostra peritia, tua successus</span>
        <motion.span animate={{ opacity: [0, 0.5, 1] }} transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 0,
          repeatDelay: 10
        }}>– CITO –</motion.span>

      </div>



    </div>
  )
}

export default App



