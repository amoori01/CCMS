import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-800">CCMS</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/status" className="text-gray-600 hover:text-gray-800">API Status</Link>
        </div>
      </div>
    </nav>
  )
}
