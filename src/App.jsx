import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import MainLayout from '@/layouts/MainLayout'
import {AnimatePresence} from 'framer-motion'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        
        </Routes>
      </AnimatePresence>
      
    </div>
  )
}

export default App
