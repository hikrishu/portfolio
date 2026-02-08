import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import ProjectCard from '@/components/projects/ProjectCard'
import {Button} from '@/components/ui/Button'
import {NavLink} from 'react-router-dom'
import projectsdata from '@/data/projectsdata'
import { useProjects } from '@/hooks/useProjects'
import ProjectCardSkeleton from '@/components/projects/ProjectCardSkeleton'
import ScrollRevel from '@/components/animations/ScrollRevel'
import ErrorState from '@/components/ErrorState'



const featuredProjects = projectsdata.filter(p => p.featured).slice(0,3)


const FeaturedProjects = () => {

    const {loading, error} = useProjects()

  return (
    <section className='py-24 bg-muted'>
        <Container>
            <div className='flex flex-col items-center space-y-10'>
                <div className='flex flex-col items-center justify-center space-y-5 max-w-2xl text-center'>
                    <h2 className='text-4xl font-bold tracking-tight'>Featured Projects</h2>
                    <p className='text-muted-foreground'>A selection of projects that showcase my frontend skills and
                        problem-solving approach.</p>
                </div>
                <div className=' grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
                    {
                        loading ?

                        [...Array(3)]. map((_, i)=> (
                            <ProjectCardSkeleton key={i} />
                        ))
                        :
                        featuredProjects.map((featuredproject)=> (
                            <ScrollRevel>
                                <ProjectCard key={featuredproject.id} projectsdata={featuredproject} />
                            </ScrollRevel>
                        ))
                    }
                    {
                        error &&
                        <ErrorState
                        className="col-span-3"
                        title="Failed to load projects"
                        description="Please refresh the page or try again later."
                        >
                            
                        </ErrorState>
                    }
                </div>
                <div>
                    <Button className="hover:bg-muted-foreground hover:border-2" size='sm' asChild>
                        <NavLink to='/projects'>View All Projects</NavLink>
                    </Button>
                </div>
            </div>

        </Container>
    </section>
  )
}

export default FeaturedProjects
