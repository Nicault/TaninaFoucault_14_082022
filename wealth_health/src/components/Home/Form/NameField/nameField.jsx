import React from 'react'

function NameField({ handleChange }) {
  return (
    <fieldset className="nameForm">
      <legend>Name</legend>
      <div className="nameDiv">
        {/* <label>First Name</label> */}
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
        {/* <label>Last Name</label> */}
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
      </div>
    </fieldset>
  )
}

export default NameField
