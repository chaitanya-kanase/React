import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <UserContextProvider>
      <h2>Context</h2>
      <Login/>
      <Profile/>
     </UserContextProvider>
  

  )
}

export default App
