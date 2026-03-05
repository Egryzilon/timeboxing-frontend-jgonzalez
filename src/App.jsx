import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Planificador from './pages/Planificador'

function App() {
  
  return (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/planificador" element={<Planificador />} />
    </Routes>
  </BrowserRouter>

  )
}
export default App
