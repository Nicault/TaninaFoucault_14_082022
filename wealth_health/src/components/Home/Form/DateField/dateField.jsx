import React from 'react'

import BirthDate from './BirthDate/birthDate'
import StartDate from './StartDate/startDate'

function DateField({ handleChange }) {
  return (
    <fieldset className="dateForm">
      <legend>Dates</legend>
      <BirthDate handleChange={handleChange} />
      <StartDate handleChange={handleChange} />
    </fieldset>
  )
}

export default DateField
