import React from 'react'

import BirthDate from './BirthDate/birthDate'
import StartDate from './StartDate/startDate'

function DateField() {
  return (
    <fieldset className="dateForm">
      <legend>Dates</legend>
      <BirthDate />
      <StartDate />
    </fieldset>
  )
}

export default DateField
