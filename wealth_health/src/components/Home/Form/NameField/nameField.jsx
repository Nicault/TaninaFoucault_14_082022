import React from 'react'

function NameField({ handleChange, inputIsWrong }) {
  return (
    <fieldset className="nameForm">
      <legend>Name</legend>
      <div className="nameDiv">
        {/* <label>First Name</label> */}
        <input
          className={inputIsWrong.firstName ? 'attention' : ''}
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
        {/* <label>Last Name</label> */}
        <input
          className={inputIsWrong.lastName ? 'attention' : ''}
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
