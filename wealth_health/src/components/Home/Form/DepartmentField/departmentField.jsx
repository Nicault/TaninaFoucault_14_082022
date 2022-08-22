import React from 'react'

function DepartmentField() {
  return (
    <fieldset>
      <label>Department</label>
      <select name="department" id="department">
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
