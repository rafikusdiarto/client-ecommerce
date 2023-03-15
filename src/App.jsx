import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import DetailProduct from './components/DetailProduct'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin/edit-product/:id' element={<DetailProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
