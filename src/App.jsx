import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
