import { useState } from 'react'
import { createContext, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [searchTerm, setSearchTerm] = useState('sas')
  const [nextPage, setNextPage] = useState(1)
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme')
    console.log(body)
  }
  const handleNext = () => {
    setNextPage(nextPage + 1)
  }
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        setSearchTerm,
        searchTerm,
        nextPage,
        setNextPage,
        handleNext,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
