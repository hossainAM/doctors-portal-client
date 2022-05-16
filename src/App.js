import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Reviews from '../src/pages/Reviews/Reviews'
import Contact from './pages/Contact/Contact'
import Login from '../src/pages/Login/Login'
import Header from './shared/Header/Header'
import Appointment from './pages/Appointment/Appointment'
import SignUp from './pages/Login/SignUp'
import RequiredAuth from '../src/pages/Login/RequireAuth'
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReviews from './pages/Dashboard/MyReviews';
import MyHistory from './pages/Dashboard/myHistory';

const App = () => {
  return (
    <div className='mx-w-7xl mx-auto'>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/appointment' element={<RequiredAuth>
        <Appointment/>
      </RequiredAuth>}/>
      <Route path='/dashboard' element={<RequiredAuth>
        <Dashboard/>
      </RequiredAuth>}>
        <Route index element={<MyAppointment/>}/>
        <Route path="myreviews" element={<MyReviews/>}/>
        <Route path="history" element={<MyHistory/>}/>
      </Route>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App