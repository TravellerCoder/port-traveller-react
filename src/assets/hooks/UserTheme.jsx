
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
     console.log('Aplicando tema:', theme)
    console.log('data-theme antes:', document.documentElement.getAttribute('data-theme'))
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    console.log('data-theme después:', document.documentElement.getAttribute('data-theme'))

    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color')
    console.log('Color de fondo actual:', bgColor)
  }, [isDarkMode])

  return { isDarkMode, toggleTheme }
}