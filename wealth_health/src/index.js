import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'

import Home from './pages/Home/home'
import Employees from './pages/Employees/employees'

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
)
