import React from 'react'
import { Link } from 'react-router-dom'

import Table from '../../components/Table/table'

function Employees() {
  return (
    <section className="employeesPage">
      <h1>Current Employees</h1>
      <Table />
      <div className="homeLink">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default Employees
