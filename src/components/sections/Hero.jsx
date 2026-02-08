import React from 'react'
import Container from '@/components/layout/Container'
import {Button} from '@/components/ui/button'
import {NavLink} from 'react-router-dom'
import FloatingBlob from '@/components/animations/FloatingBlob'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='py-24 border-b bg-muted'>
        <Container>
            <div className='min-h-[50vh] flex flex-col items-center justify-center relative overflow-hidden space-y-20'>
                <h1 className="realtive z-10 text-3xl font-bold">
                  <span className='text-red-700 text-6xl'>Hi,</span> 
                  <motion.span
                  className='inline-block'
                  initial={{opacity:0, y:30}}
                  animate={{opacity:1, y:0}}
                  transition={{duration:1, ease:"easeOut"}}
                  >I am Krishna. </motion.span> 
                  <span className='text-red-700'> Frontend React Devloper.</span>
                </h1>
                <motion.p className="realtive z-10 text-muted-foreground max-w-xl text-lg"
                initial={{opacity:0, y:10}}
                animate={{opacity:1, y:0}}
                transition={{duration:1, ease:"easeOut", delay:0.5}}>
                  I build clean, scalable React applications 
                  using modern tools like Tailwind, shadcn/ui, and best industry practices.
                </motion.p>
                <motion.div className='space-x-12 realtive z-10'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                
                >
                  <Button className="hover:bg-muted-foreground  hover:border-2" size='sm' asChild>
                    <NavLink to='/projects'>View Projects</NavLink>
                  </Button>
                  <Button className=" bg-amber-200 border-2 hover:bg-red-600 text-gray-800 hover:text-gray-100" size='sm'  asChild>
                    <NavLink to='/contact'>Contact  Me</NavLink>
                  </Button>
                </motion.div>
                <FloatingBlob size={100} color="bg-red-400" top={50} left={30} delay={0} />
                <FloatingBlob size={60} color="bg-blue-400" top={200} left={200} delay={2} />
                <FloatingBlob size={80} color="bg-yellow-400" top={150} left={400} delay={1} />
                <FloatingBlob size={50} color="bg-purple-400" top={300} left={100} delay={3} />
            </div>
        </Container>
    </section>
  )
}

export default Hero
