import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '@/components/layout/Container'

const NotFound = () => {
  return (
    <section>
        <Container>
            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, ease: "easeOut"}}
                className='h-[100vh] w-full flex flex-col items-center justify-center space-y-12'
            >
            <h1 className='text-7xl font-bold'>404</h1>

            <h2 className='text-muted text-3xl'>Page not Found</h2>

            <p className='text-muted text-lg'>The page you’re looking for doesn’t exist or may have been moved.</p>

            <Link to='/'
            className='inline-block underline'
            >Go Back Home</Link>
        </motion.div>
        </Container>
    </section>
  )
}

export default NotFound
