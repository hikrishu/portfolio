import React from 'react'
import {motion} from 'framer-motion'

const FloatingBlob = ({ size = 20, color = "bg-red-400", top = 0, left = 0, delay = 0 }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-30`}
      style={{ width: size, height: size, top: top, left: left }}
      animate={{
        y: ["0%", "20%", "0%"],  // vertical float
        x: ["0%", "10%", "0%"],  // slight horizontal float
      }}
      transition={{
        duration: 6 + Math.random() * 4, // random duration
        repeat: Infinity,
        repeatType: "mirror",
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

export default FloatingBlob
