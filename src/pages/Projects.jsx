import React, { useEffect, useState } from 'react'
import ProjectCard from '@/components/projects/ProjectCard'
import Container from '@/components/layout/Container'
import projectsdata from '@/data/projectsdata'
import ProjectCardSkeleton from '@/components/projects/ProjectCardSkeleton'
import {useProjects} from '@/hooks/useProjects.js'
import SEO from '@/components/SEO'
import ScrollRevel from '@/components/animations/ScrollRevel'
import PageTransition from '@/components/animations/PageTransition'
import ErrorState from '@/components/ErrorState'
import {Button} from '@/components/ui/button'

const Projects = () => {

  const {loading, error} = useProjects();

  // const [loading, setLoading] = useState(true)


  // useEffect(()=> {
  //   const timer = setTimeout(()=> {
  //     setLoading(false)
  //   }, 800)

  //   return ()=> clearTimeout(timer)   // means can't change state on component unmount
  // }, [])    // runs just once in mount of components... only on first render/page load....not in re render or state change




  return (
    <PageTransition>
      <section className='py-24 bg-muted'>
        <SEO title="Krishna Ghimire | my projects" description="These are the projects built by me, starting from study tracker app, digital clinic to my own portfolio with react and shadcn." />

        <Container>
          <div className='space-y-12'>
              <div className='space-y-6 max-w-3xl text-justify'>
                <h1 className='dark:text-amber-300 text-muted-foreground font-bold text-4xl tracking-tight'>My Projects</h1>
                <p className=' text-lg text-muted tracking-tight'>
                  A collection of projects that reflect my approach to frontend
                  development and problem solving.
                </p>
              </div>
              <div className=' grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {
                  loading ?
                  [...Array(projectsdata.length)].map((_, i)=> (
                    <ProjectCardSkeleton key={i} />
                  ))
                  :
                  projectsdata.map((data)=>(
                    <ScrollRevel>
                      <ProjectCard key={data.id} projectsdata={data}/>
                    </ScrollRevel>
                    
                  ))
                }
                {
                  error &&
                  <ErrorState
                  className="col-span-3"
                  title="Failed to load projects"
                  description="Please refresh the page or try again later."
                  action={
                    <Button onClick={()=> window.location.reload()} className="hover:bg-muted-foreground  hover:border-2" size='sm'>Retry</Button>
                  }
                  >
                    
                  </ErrorState>
                }

              </div>
          </div>  
        </Container>
      </section>
    </PageTransition>
  )
}

export default Projects
