import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Weather from './modules/Weather/Weather'

const App = () => {
  /** Currently only consists of the weather module, but more can be added as I progress with them. */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Weather />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
