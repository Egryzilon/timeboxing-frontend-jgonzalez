import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

function Login() {
  
      const [user, setUser] = useState('');
      
    
      const handleLogin = (e) => {
        e.preventDefault();
        if (user.trim().length > 0) {
          console.log("registro correcto, usuario llamado \"" + user.trim() + "\"");
          /* navigate('/Dashboard') */
          
        } else {
          alert('No puedes llamarte así.\n' +
                'Intenta otro nombre si?');
        }
      };
    
    
 return (
    <div className="min-h-screen bg-color-gray flex items-center justify-center p-0">
      <div className="w-full  bg-gray-100 max-w-md bg-red rounded-2xl overflow-hidden border-4">
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label 
                htmlFor="user-name" 
                className="block text-3xl font-bold text-black mb-2"
              >
                Nombre:
              </label>
              <input
                id="user-name"
                type="text"
                placeholder="Tu nombre"
                value={user} onChange={(e) => setUser(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-gray-500 outline-none transition-all duration-200 placeholder-gray-400 text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-.32 focus:ring-gray-3"
            >
              Log in/up
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login
/*** #Explicacion_comentario
 * No se necesita esto al final si se especifica la funcion que se exportara' por defecto al importar el archivo
 * dejando la declaracion de la funcio'n asi'
 * ```
 * export default function Login() {
 * ```
 * pero si se agrega el `export default` al final, es ma's sencillo de cambiar esto.
 */