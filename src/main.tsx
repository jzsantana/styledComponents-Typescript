import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import StylesPage from './pages/StylesPage'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/style',
    element: <StylesPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
