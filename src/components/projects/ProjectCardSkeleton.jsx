import React from 'react'
import {Skeleton} from '@/components/ui/skeleton'
import {Card, CardHeader, CardContent} from '@/components/ui/card'

const ProjectCardSkeleton = () => {
  return (
    <Card className='flex flex-col h-full animate-skeleton shadow-lg hover:shadow-xl transition-shadow duration-300 bg-amber-50'>
            <Skeleton className='h-48 w-full rounded-t-lg animate-pulse' />
            <CardHeader>
                <Skeleton className='h-6 w-3/4' />
            </CardHeader>
    
            <CardContent className='space-y-10'>
                <div className='space-y-2'>
                    <Skeleton className='h-4 w-full' />
                    <Skeleton className='h-4 w-5/6' />
                </div>
                <div className='space-x-4 flex'>
                    <Skeleton className='h-9 w-15 animate-pulse' />
                    <Skeleton className='h-9 w-15' />
                </div>
            </CardContent>
    
        </Card>
  )
}

export default ProjectCardSkeleton
