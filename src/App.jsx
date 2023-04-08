import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import DetailProduct from './components/DetailProduct'
import Laptop from './pages/Laptop'
import MotherboardComponents from './pages/MotherboardComponents'
import DisplayDesktop from './pages/DisplayDesktop'
import Register from './auth/Register'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/register' element={<Register/>} />
        <Route path='/user/login' element={<Login/>} />
        <Route path='/detail-product/:id' element={<DetailProduct/>} />
        <Route path='/laptop' element={<Laptop/>} />
        <Route path='/display-desktop' element={<DisplayDesktop/>} />
        <Route path='/motherboard-components' element={<MotherboardComponents/>} />
      </Routes>
    </div>
  )
}

export default App
