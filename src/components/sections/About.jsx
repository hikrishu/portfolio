import React from 'react'
import Container from '@/components/layout/Container'
import FloatingBlob from '@/components/animations/FloatingBlob'

const About = () => {
  return (
    <section className='py-24 bg-foreground'>
        <Container>
            <div className='max-w-3xl mx-auto relative flex flex-col items-center space-y-6 text-justify'>
                <h2 className='font-bold text-4xl tracking-tight'>About Me</h2>
                <p className=' text-muted-foreground text-lg leading-relaxed'>
                    I’m a frontend developer focused on building clean, maintainable
                    interfaces with React. I care deeply about structure, readability,
                    and writing code that scales as products grow.
                </p>
                <p className='text-muted-foreground text-lg'>
                    I enjoy working with modern tools like Tailwind CSS and shadcn/ui,
                    and I’m constantly improving my understanding of real-world frontend
                    patterns and best practices.
                </p>
                

                <FloatingBlob size={100} color="bg-red-400" top={50} left={400} delay={0} />
                <FloatingBlob size={60} color="bg-blue-400" top={250} left={300} delay={2} />
                <FloatingBlob size={80} color="bg-yellow-400" top={150} left={700} delay={1} />
                <FloatingBlob size={50} color="bg-purple-400" top={350} left={400} delay={3} />
            </div>
        </Container>
    </section>
  )
}

export default About
