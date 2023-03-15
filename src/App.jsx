import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import DetailProduct from './components/DetailProduct'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'
import Vehicle from './pages/Vehicle'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/detail-product/:id' element={<DetailProduct/>}/>
        <Route path='/fashion' element={<Fashion/>} />
        <Route path='/electronics' element={<Electronics/>} />
        <Route path='/vehicle' element={<Vehicle/>} />
      </Routes>
    </div>
  )
}

export default App
