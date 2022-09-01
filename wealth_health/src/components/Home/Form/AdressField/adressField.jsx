import React from 'react'
import States from '../../../../utils/Datas/states'

function AdressField({ handleChange, inputIsWrong }) {
  return (
    <fieldset className="adressForm flexColumn">
      <legend>Address</legend>

      {/* <label>Street</label> */}
      <input
        name="street"
        className={inputIsWrong.street ? 'attention' : ''}
        type="text"
        placeholder="Street"
        onChange={handleChange}
      />

      {/* <label>City</label> */}
      <input
        name="city"
        className={inputIsWrong.city ? 'attention' : ''}
        type="text"
        placeholder="City"
        onChange={handleChange}
      />

      <label>State</label>
      <select
        name="state"
        className={inputIsWrong.state ? 'attention' : ''}
        onChange={handleChange}
      >
        {States.map((element) => (
          <option key={element.name}>{element.name}</option>
        ))}
      </select>

      {/* <label>Zip Code</label> */}
      <input
        name="zipCode"
        className={inputIsWrong.zipCode ? 'attention' : ''}
        type="text"
        placeholder="Zip Code"
        onChange={handleChange}
      />
    </fieldset>
  )
}

export default AdressField
