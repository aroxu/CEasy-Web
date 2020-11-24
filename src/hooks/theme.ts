import {useState, useEffect} from 'react'

export const useTheme =  () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
    const toggleTheme = (): void => {
      if (theme === 'light') {
        window.localStorage.setItem('theme', 'dark')
        setTheme('dark')
      } else {
        window.localStorage.setItem('theme', 'light')
        setTheme('light')
      }
    }
  
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme')
      if (localTheme === 'light' || localTheme === 'dark') {
        setTheme(localTheme)
      }
    }, [])
  
    return [
      theme,
      toggleTheme,
    ]
  }
