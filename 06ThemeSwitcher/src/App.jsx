import { useState,useEffect } from 'react'
import { ThemeContextProvider } from './context/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(()=>{
    const theme = document.querySelector("html").classList;
    theme.remove("light","dark");
    theme.add(themeMode)
  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeContextProvider>
  )
}

export default App
