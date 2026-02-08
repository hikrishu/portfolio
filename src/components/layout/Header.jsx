import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from '@/components/layout/Container'
import {Button} from '@/components/ui/button'
import ThemeToggle from '@/components/ThemeToggle'



const linkClass = ({isActive})=> (
    isActive ? "text-foreground-muted font-medium" 
    : "text-gray-900 hover:text-red-700 "
)

const Header = () => {
  return (
    <header className='border-b bg-foreground '>
        <Container>
            <div className='flex h-24 items-center justify-between '>
                <NavLink to='/' className='font-extrabold text-4xl'>Krishna.</NavLink>
                <nav className='space-x-4 text-lg'>
                    <NavLink to="/projects" 
                    className={linkClass}>Projects</NavLink>
                    <NavLink to="/contact" 
                    className={linkClass}>Contact</NavLink>
                    <Button size="sm" 
                    className={`${linkClass} hover:bg-muted-foreground hover:text-gray-100 dark:hover:text-red-700 cursor-pointer`}>Hire me.</Button>
                    <ThemeToggle />
                    
                </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header
