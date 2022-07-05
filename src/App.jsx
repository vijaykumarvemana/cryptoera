import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import './index.css'
import './App.css'
import CoinDetails from './components/CoinDetails'
import Home from './components/Home'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:coinId" element={<CoinDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
