import { useState } from 'react'
import './index.css'
import logo from './logo.svg'
import './App.css'

import Stats from './components/Stats'
import Navbar from './components/NavBar'
import Coins from './components/Coins'

function App() {
  const [count, setCount] = useState(0)

  
  console.log(import.meta.env.NODE_ENV)

  return (
      <>
      <Navbar />
      <Stats  />
      <Coins />
      </>
     
    
  )
}

export default App
