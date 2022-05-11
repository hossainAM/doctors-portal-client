import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Appointment from '../src/pages/Appointment/Appointment'
import Reviews from '../src/pages/Reviews/Reviews'
import Contact from './pages/Contact/Contact'
import Login from '../src/pages/Login/Login'
import Header from './shared/Header/Header'

const App = () => {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App