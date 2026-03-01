  import { useState } from 'react'
/* import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom' */

function Login() {
  
      const [user, setUser] = useState('');
      
    
      const handleLogin = (e) => {
        e.preventDefault();
        if (user.trim().length > 0) {
          console.log("registro correcto, usuario llamado \"" + user.trim() + "\"");
          
        } else {
          alert('No puedes llamarte así.\n' +
                'Intenta otro nombre si?');
        }
      };
    
    
 return (
    <div className="min-h-screen bg-color-grey flex items-center justify-center p-0">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-4">
        <div className="bg-red-500 h-3"></div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label 
                htmlFor="trainer-name" 
                className="block text-sm font-big text-gray-700 mb-2"
              >
                Nombre:
              </label>
              <input
                id="trainer-name"
                type="text"
                placeholder="Tu nombre (ejemplo: Ash)"
                value={user} onChange={(e) => setUser(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400 text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Comenzar a capturar pokémons
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