import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (user.trim().length > 0) {
      console.log("registro correcto, usuario llamado \"" + user.trim() + "\"")
      
      // succeso!!!
      navigate('/Dashboard')
      
    } else {
      alert('No puedes llamarte así.\nIntenta otro nombre si?')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label 
                htmlFor="user-name" 
                className="block text-2xl font-bold text-white mb-2"
              >
                Nombre:
              </label>
              <input
                id="user-name"
                type="text"
                placeholder="Tu nombre"
                value={user} 
                onChange={(e) => setUser(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Log in/up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login