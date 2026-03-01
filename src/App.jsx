import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'

function App() {
  
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/" element={<Login />} />
      
      {/* Ruta protegida (visualmente) */}
      <Route path="/Dashboard" element={<Dashboard />} />
      
      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
