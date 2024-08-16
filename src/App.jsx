import React from 'react'
import Header from './component/Header'
import Slider from './component/Slider'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Login from './component/Login'

const App = () => {
  return (
   <Router>
   {/* <Header/> */}
   <Routes>
      <Route path='/' element={<Slider/>}/>
      <Route path='/login' element={<Login/>}/>
   </Routes>
   
   </Router>
  )
}

export default App
