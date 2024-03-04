import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './screens/menu'
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Pnf from './pages/pnf'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route  path={`/`} element={<Home/>}/>
        <Route  path={`/about`} element={<About/>}/>
        <Route  path={`/projects`} element={<Projects/>}/>
        <Route  path={`/contact`} element={<Contact/>}/>
        <Route  path={`/pnf`} element={<Pnf/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
