import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ApiStatus() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('/api/health')
        setStatus(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchStatus()
  }, [])

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">API Status</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {status && (
        <div className="bg-white p-4 rounded shadow">
          <p>Status: <span className="font-semibold">{status.status}</span></p>
          <p>Timestamp: {new Date(status.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  )
}
