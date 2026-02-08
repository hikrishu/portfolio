import React from 'react'
import {motion} from 'framer-motion'



//variant of page

const pageVariants = {
    hidden: {opacity: 0, y:20},
    visible: {opacity:1, y:0},
    exit: {opacity:0, y:-20}
}

const PageTransition = ({className="", children}) => {
  return (
    <motion.div
    variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{duration: 1, ease:"easeInOut"}}
    className={className}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
