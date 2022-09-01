import React from 'react'

function DepartmentField({ handleChange, inputIsWrong }) {
  return (
    <fieldset>
      <label>Department</label>
      <select
        name="department"
        className={inputIsWrong.department ? 'attention' : ''}
        id="department"
        onChange={handleChange}
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
    </fieldset>
  )
}

export default DepartmentField
