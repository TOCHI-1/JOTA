import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import './index.css'

const router=createBrowserRouter([
  {path:"/JOTA", element:<App/>},
  {path:"/login", element:<Login/>}
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
