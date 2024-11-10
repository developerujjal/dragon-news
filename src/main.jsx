import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routers'
import AuthProvider from './components/Providers/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider 
      router={routes}
       future={{
        v7_startTransition: true,
      }} />
    </AuthProvider>
  </StrictMode>,
)
