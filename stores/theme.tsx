import { useState, createContext, useEffect } from "react"
import { Themes } from '@/constants'

interface IProps {
  children: JSX.Element
}

interface IThemeContextProps {
  theme: Themes
  setTheme: (theme: Themes) => void
}

export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)

export const ThemeContextProvider = ({children}: IProps) => {
  const [theme, setTheme] = useState<Themes>(Themes.light)

  useEffect(() => {
    const item = localStorage.getItem('theme') as Themes || Themes.light
    setTheme(item)
    document.getElementsByTagName('html')[0].dataset.theme = item
  }, [])

  return <ThemeContext.Provider value={{
    theme,
    setTheme: (currentTheme) => {
      setTheme(currentTheme)
      localStorage.setItem('theme', currentTheme)
      document.getElementsByTagName('html')[0].dataset.theme = currentTheme
    }
  }}>
    {children}
  </ThemeContext.Provider>
}