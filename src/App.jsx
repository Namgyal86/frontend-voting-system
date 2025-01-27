import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Login from './components/Login';
import Register from './components/Register';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
