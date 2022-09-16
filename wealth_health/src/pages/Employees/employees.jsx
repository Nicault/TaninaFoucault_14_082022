import React from 'react'
import { Link } from 'react-router-dom'

import Table from '../../components/Table/table'
import { getEmployees } from '../../utils/Datas/dataManager'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Employees() {
  return (
    <section className="employeesPage">
      <div className="employeesHeader">
        <h1>Current Employees</h1>
        <Link to="/" className="homeLink">
          <FontAwesomeIcon
            className="backHomeIcon"
            icon={faArrowRightFromBracket}
          />
          Home
        </Link>
      </div>
      <Table employees={getEmployees()} />
    </section>
  )
}

export default Employees
