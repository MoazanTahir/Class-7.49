import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './Components/Login/signup.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Working/Router.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>

   <RouterProvider router={router}/>
  </StrictMode>,
)
