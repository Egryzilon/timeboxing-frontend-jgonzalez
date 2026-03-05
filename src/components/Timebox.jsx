import { useState, useEffect } from 'react'

function Timebox({ preview = false }) {
  const [task, setTask] = useState('')
  const [minutes, setMinutes] = useState(25)
  const [seconds_left, setSecondsLeft] = useState(25 * 60)
  const [is_active, setIsActive] = useState(false)
  const [is_finished, setIsFinished] = useState(false)

  useEffect(() => {
    let interval = null
    if (is_active && seconds_left > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1)
      }, 1000)
    } else if (seconds_left === 0 && is_active) {
      setIsActive(false)
      setIsFinished(true)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [is_active, seconds_left])

  const handle_minutes_change = (e) => {
    const new_minutes = Number(e.target.value)
    setMinutes(new_minutes)
    if (!is_active) {
      setSecondsLeft(new_minutes * 60)
      setIsFinished(false)
    }
  }

  const toggle_timer = () => {
    if (!task.trim()) {
      alert('Por favor, define una tarea primero.')
      return
    }
    if (is_finished) {
      setSecondsLeft(minutes * 60)
      setIsFinished(false)
    }
    setIsActive(!is_active)
  }

  const reset_timer = () => {
    setIsActive(false)
    setIsFinished(false)
    setSecondsLeft(minutes * 60)
    setTask('')
  }

  // Formato MM:SS
  const format_time = (total_seconds) => {
    const m = Math.floor(total_seconds / 60)
    const s = total_seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span>⏱️</span> Timebox Planner
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400 mb-1">Tarea a realizar:</label>
        <input
          type="text"
          placeholder="Ej: Estudiar React Router..."
          value={preview ? '' : task}
          onChange={(e) => !preview && setTask(e.target.value)}
          disabled={is_active || preview}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:opacity-50"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <label className="text-sm font-medium text-gray-400">Duración (min):</label>
        <input
          type="number"
          min="1"
          max="120"
          value={minutes}
          onChange={handle_minutes_change}
          disabled={is_active || preview}
          className="w-20 px-2 py-1 bg-gray-900 border border-gray-600 rounded text-center text-white focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
        />
      </div>

      <div className="text-center py-6 mb-6 rounded-lg bg-gray-900 border-2 border-gray-700">
        <div className="text-5xl font-mono font-bold text-white">
          {format_time(seconds_left)}
        </div>
        {is_finished && <div className="text-green-400 text-sm mt-2 font-semibold">¡Tiempo completado!</div>}
      </div>

      <div className="flex gap-3">
        <button
          onClick={!preview ? toggle_timer : undefined}
          disabled={preview}
          className="flex-1 py-3 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Iniciar
        </button>

        <button
          onClick={!preview ? reset_timer : undefined}
          disabled={is_active || preview}
          className="px-4 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Limpiar
        </button>
      </div>

      {preview && (
        <p className="text-center text-gray-600 text-xs mt-4">Proximamente</p>
      )}
    </div>
  )
}

export default Timebox
