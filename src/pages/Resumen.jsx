import { useNavigate } from 'react-router-dom'

function Resumen() {
  const navigate = useNavigate()

  const handle_back = () => {
    navigate('/dashboard')
  }

  // Datos de ejemplo (sin funcionalidad real por ahora)
  const tareas = [
    { nombre: 'Estudiar React Router', duracion: 25 },
    { nombre: 'Repasar hooks de React', duracion: 45 },
    { nombre: 'Leer documentacion de Vite', duracion: 30 },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Resumen de Tareas</h1>
          <button
            onClick={handle_back}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
          >
            Volver al Dashboard
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Tus Tareas</h2>
          <p className="text-gray-400">Historial de todas las tareas registradas.</p>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900">
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Duracion (min)
                </th>
              </tr>
            </thead>
            <tbody>
              {tareas.length === 0 ? (
                <tr>
                  <td colSpan={2} className="px-6 py-8 text-center text-gray-500">
                    No hay tareas registradas.
                  </td>
                </tr>
              ) : (
                tareas.map((tarea, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-white">{tarea.nombre}</td>
                    <td className="px-6 py-4 text-gray-300">{tarea.duracion}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Resumen