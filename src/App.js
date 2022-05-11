import React from 'react'
import { Route, Router } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Appointment from '../src/pages/Appointment/Appointment'
import Reviews from '../src/pages/Reviews/Reviews'
import ContactUs from '../src/pages/ContactUs/ContactUs'
import Login from '../src/pages/Login/Login'

const App = () => {
  return (
    <Router>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
    </Router>
  )
}

export default App