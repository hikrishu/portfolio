import React from 'react'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import About from '@/components/sections/About'
import SEO from '@/components/SEO'
import PageTransition from '@/components/animations/PageTransition'


const Home = () => {
  
  return (
    <div>
      <PageTransition>
        <SEO title="Krishna Ghimire | Frontend Devloper" description="I am enthusiat frontend react devloper with components mindset and efficient user experience." />
        <Hero />
        <About />
        <FeaturedProjects />
      </PageTransition>
    </div>
  )
}

export default Home
