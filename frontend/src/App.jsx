import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './features/home/HomePage'
import Layout from './components/Layout'
import ApiStatus from './features/status/ApiStatus'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'status', element: <ApiStatus /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
