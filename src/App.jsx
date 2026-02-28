import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'

function App() {
  
  return (
    
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/timebox" element={<Navigate to="/"/>} />

    </Routes>
  </BrowserRouter>

  )
}

export default App
