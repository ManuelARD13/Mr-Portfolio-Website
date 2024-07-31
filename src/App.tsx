import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Academics from './pages/Academics'
import NotFound from './pages/NotFound'

//TODO: Review loaders

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Home /></>,
  },
  {
    path: '/academics',
    element: <><Academics /></>,
  },
  {
    path: '*',
    element: <><NotFound /></>,}
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
