import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="homeHeader">
      <h1>HRnet</h1>
      <Link to="/employees">View Current Employees</Link>
    </div>
  )
}

export default Header
