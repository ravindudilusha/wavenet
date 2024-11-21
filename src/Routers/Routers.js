import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';

function Routers() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routers
