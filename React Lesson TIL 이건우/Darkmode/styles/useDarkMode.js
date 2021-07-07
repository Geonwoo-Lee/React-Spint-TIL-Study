import {useState, useEffect} from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        theme === 'dark' ? setMode('light') : setMode('dark')
    }
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme ? setTheme(localTheme) : setMode('dark')
    }, [])

    return[theme, toggleTheme]
}
