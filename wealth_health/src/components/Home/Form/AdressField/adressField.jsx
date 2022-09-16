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

      <input
        name="street"
        className={inputIsWrong.street ? 'attention' : ''}
        type="text"
        placeholder="Street"
        onChange={handleChange}
      />

      <input
        name="city"
        className={inputIsWrong.city ? 'attention' : ''}
        type="text"
        placeholder="City"
        onChange={handleChange}
      />

      <DropdownComponent
        name="state"
        className={inputIsWrong.state ? 'attention' : ''}
        onChange={handleChange}
        firstOption="State"
        list={List}
      />

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
