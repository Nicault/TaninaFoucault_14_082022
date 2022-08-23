import React from 'react'
import States from '../../../../utils/Datas/states'

function AdressField() {
  return (
    <fieldset className="adressForm flexColumn">
      <legend>Address</legend>

      {/* <label>Street</label> */}
      <input type="text" placeholder="Street" />

      {/* <label>City</label> */}
      <input type="text" placeholder="City" />

      <label>State</label>
      <select>
        {States.map((element) => (
          <option key={element.name}>{element.name}</option>
        ))}
      </select>

      {/* <label>Zip Code</label> */}
      <input type="text" placeholder="Zip Code" />
    </fieldset>
  )
}

export default AdressField
