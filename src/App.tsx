import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

//TODO: Review loaders

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Home /></>,
  },
  {
    path: '/academics',
    element: <><Home /></>,
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
