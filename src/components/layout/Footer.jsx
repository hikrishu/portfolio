import React from 'react'
import Container from '@/components/layout/Container'

const Footer = () => {
  return (
    <footer className='border-t bg-foreground'>
        <Container>
            <div className='flex h-52 items-center justify-between text-2xl font-bold'>
                <span>© {new Date().getFullYear()} Krishna.</span>
                <span>Built with React.</span>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
