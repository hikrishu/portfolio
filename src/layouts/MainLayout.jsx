import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {Outlet} from 'react-router-dom'
import CursorFollower from '@/components/animations/CursorFollower'

const MainLayout = () => {

  const handleMouseMove = (e) => {
  console.log(e.clientX, e.clientY);
  setMouse({ x: e.clientX - shapeSize / 2, y: e.clientY - shapeSize / 2 });
  };
  return (
    <div>
      <CursorFollower />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </div>
  )
}

export default MainLayout
