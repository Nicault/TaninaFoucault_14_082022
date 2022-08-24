import React from 'react'
import States from '../../../../utils/Datas/states'

function AdressField({ handleChange }) {
  return (
    <fieldset className="adressForm flexColumn">
      <legend>Address</legend>

      {/* <label>Street</label> */}
      <input
        name="street"
        type="text"
        placeholder="Street"
        onChange={handleChange}
      />

      {/* <label>City</label> */}
      <input
        name="city"
        type="text"
        placeholder="City"
        onChange={handleChange}
      />

      <label>State</label>
      <select name="state" onChange={handleChange}>
        {States.map((element) => (
          <option key={element.name}>{element.name}</option>
        ))}
      </select>

      {/* <label>Zip Code</label> */}
      <input
        name="zipCode"
        type="text"
        placeholder="Zip Code"
        onChange={handleChange}
      />
    </fieldset>
  )
}

export default AdressField
