import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Start from './components/Start/Start'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'


function App() {
  const routes = createBrowserRouter([
    {path:"",element:<Layout/>,children: [
      {index:true,element:<Start/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
      {path:"*",element:<NotFound/>},
      {path:"React",element:<Start/>},
    ]}
  ])

  return (
    <RouterProvider router={routes}>

    </RouterProvider>
 
  )
}

export default App
