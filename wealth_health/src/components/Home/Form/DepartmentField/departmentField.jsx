import React from 'react'
import { DropdownComponent } from 'dropdown-ii'
import 'dropdown-ii/dist/index.css'

// import 'react-datepicker/dist/react-datepicker.css'
// import 'react-calendar/dist/Calendar.css'

const list = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

function DepartmentField({ handleChange, inputIsWrong }) {
  return (
    <fieldset className="departmentField">
      <label>Department</label>
      {/*<select
        name="department"
        className={inputIsWrong.department ? 'attention' : ''}
        id="department"
        onChange={handleChange}
      >
        <option value="" selected disabled hidden>
          select
        </option>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select> */}
      <DropdownComponent
        name="department"
        className={inputIsWrong.department ? 'attention' : ''}
        id="department"
        onChange={handleChange}
        firstOption="Select"
        list={list}
      />
    </fieldset>
  )
}

export default DepartmentField
