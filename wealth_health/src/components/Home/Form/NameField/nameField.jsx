import React from 'react'

function NameField() {
  return (
    <fieldset className="nameForm">
      <legend>Name</legend>
      <div className="nameDiv">
        {/* <label>First Name</label> */}
        <input type="text" placeholder="First Name" />
        {/* <label>Last Name</label> */}
        <input type="text" />
      </div>
    </fieldset>
  )
}

export default NameField
