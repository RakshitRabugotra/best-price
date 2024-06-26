import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/* Browser Routers */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Pages */
import Home from '@/pages/Home/Home'
import ErrorPage from '@/pages/Error'
import Profile from './pages/Account/Profile'
import ProfileSettings from '@/pages/Account/Settings'
import Layout from './pages/Layout'

/* Router instance */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'profile/',
        element: <Profile />,
      },
      {
        path: 'settings/',
        element: <ProfileSettings />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
