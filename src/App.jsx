import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './App.css'
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App