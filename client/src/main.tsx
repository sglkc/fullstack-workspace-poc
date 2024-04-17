import { render } from 'preact'
// import { Router, Route } from 'preact-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@/pages/index'
import ListPage from '@/pages/list'
import '@unocss/reset/tailwind-compat.css'
import '@fontsource-variable/plus-jakarta-sans'
import 'virtual:uno.css'
import './app.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/list', element: <ListPage /> }
])

render(
  <RouterProvider router={router} />
  , document.getElementById('app')!
)
