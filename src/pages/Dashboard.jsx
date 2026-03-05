import Timebox from '../components/Timebox'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handle_logout = () => {
    navigate('/')
  }

  const handle_go_resumen = () => {
    navigate('/resumen')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Mi Dashboard</h1>
          <button
            onClick={handle_logout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Bienvenido de nuevo</h2>
          <p className="text-gray-400">Gestiona tu tiempo y tus tareas desde aquí.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="col-span-1">
            <Timebox />
          </div>

          <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold mb-2">Estadísticas Semanales</h3>
            <p className="text-gray-400 max-w-md">
              Aquí se mostrarán gráficos de la productividad y el tiempo completado en los timeboxes.
              (Próximamente nunca)
            </p>
          </div>

          <div className="col-span-1 bg-gray-700 rounded-xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold mb-4">Ir a resumen</h3>
            <button
              onClick={handle_go_resumen}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Ver resumen
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Dashboard