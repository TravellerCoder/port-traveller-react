
import { useState, useEffect } from 'react'

export const useTheme = () => {
  const getSystemPreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return getSystemPreference()
  })

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches)
      }
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [isDarkMode])

  return { isDarkMode, toggleTheme }
}