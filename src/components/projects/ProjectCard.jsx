import React from 'react'
import {Card, CardHeader, CardContent, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/Button'

const ProjectCard = ({projectsdata}) => {

    const {title, description, live, code, img} = projectsdata

  return (
    <Card className='flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-amber-50'>
        {
            img &&
            <div className='h-48 w-full overflow-hidden rounded-t-lg px-6'>
                <img src={img} alt={title} loading='lazy'
                className='h-full w-full object-cover transition-transform duration-300 hover:scale-105' />
            </div>
        }
        <CardHeader>
            <CardTitle className='font-bold'>{title}</CardTitle>
        </CardHeader>

        <CardContent className='space-y-10'>
            <p className='text-accent-foreground text-sm'>{description}</p>
            <div className='space-x-4'>
                {
                    live &&
                    <Button size='sm' className='text-black' variant='outline' asChild>
                        <a href={live} target='_blank' rel='noreferrer'>Demo</a>
                    </Button>
                }
                {
                    code && 
                    <Button size='sm' asChild>
                        <a href={code} target='_blank' rel='noreferrer'>Code</a>
                    </Button>
                }
            </div>
        </CardContent>

    </Card>
  )
}

export default ProjectCard
