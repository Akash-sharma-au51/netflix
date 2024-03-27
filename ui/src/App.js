import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Browse from './pages/Browse'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Login/>}/>
          <Route path='/browse' element={<Browse/>}/>
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
