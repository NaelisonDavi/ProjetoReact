import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './Pages/Home'
import Empresa from './Pages/Empresa'
import Contato from './Pages/Contato'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} > </Route>
      <Route path="/empresa" element={<Empresa />} > </Route>
      <Route path="/contato" element={<Contato />} > </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
