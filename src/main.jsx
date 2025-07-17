import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import './index.css'
import Registration from './Registration.jsx'
import Personal_details from './Personal_details.jsx'


const router=createBrowserRouter([
  {path:"/JOTA", element:<App/>},
  {path:"/login", element:<Login/>},
  {path:"/Signup", element:<Registration/>},
  {path:"/Registration", element:<Personal_details/>}

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
