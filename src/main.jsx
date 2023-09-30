import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProviders from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
          </RouterProvider>
        </QueryClientProvider>
      </AuthProviders>
    </div>
  </React.StrictMode>,
)
