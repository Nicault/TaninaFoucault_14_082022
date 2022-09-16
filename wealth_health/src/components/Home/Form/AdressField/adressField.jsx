import React from 'react'
import States from '../../../../utils/Datas/states'

import { DropdownComponent } from 'dropdown-ii'

function AdressField({ handleChange, inputIsWrong }) {
  const List = []
  for (let i = 0; i < States.length; i++) {
    List.push(States[i].name)
  }
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

      {/* <label>State</label>
      <select
        name="state"
        className={inputIsWrong.state ? 'attention' : ''}
        onChange={handleChange}
      >
        {States.map((element) => (
          <option key={element.name}>{element.name}</option>
        ))}
      </select> */}

      <DropdownComponent
        name="state"
        className={inputIsWrong.state ? 'attention' : ''}
        onChange={handleChange}
        firstOption="State"
        list={List}
      />

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
