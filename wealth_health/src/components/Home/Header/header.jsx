import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="homeHeader">
      <h1>HRnet</h1>
      <Link to="/employees" className="LinkToEmployees">
        View Current Employees{' '}
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Link>
    </div>
  )
}

export default Header
