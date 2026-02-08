import React from 'react'
import  {useTheme}  from '@/context/ThemeContext'

const ThemeToggle = () => {

    const {theme, toggleTheme} = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 text-center rounded-full border dark:border-white border-gray-300 dark:bg-amber-100 bg-muted-foreground cursor-pointer transition-all duration-300 ease-in-out"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle
