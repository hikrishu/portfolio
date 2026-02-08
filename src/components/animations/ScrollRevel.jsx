import React from 'react'
import {motion} from 'framer-motion'

const ScrollRevel = ({y=40, once=true, className='', duration=0.6, delay=0, children}) => {
  return (
    <motion.div
    initial={{opacity:0, y}}
    whileInView={{opacity:1, y:0}}
    viewport={{once}}
    className={className}
    transition={{duration, ease:'easeOut', delay}}
    >
        {children}
      
    </motion.div>
  )
}

export default ScrollRevel
