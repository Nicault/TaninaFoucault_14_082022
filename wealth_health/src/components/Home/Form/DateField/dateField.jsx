import React from 'react'

import DateInput from './DateInput/dateInput'

function DateField({ handleChange, fillProfile }) {
  return (
    <fieldset className="dateForm">
      <legend>Dates</legend>
      <DateInput
        handleChange={handleChange}
        fillProfile={fillProfile}
        name={'dateOfBirth'}
        label={'Date of birth'}
      />
      <DateInput
        handleChange={handleChange}
        fillProfile={fillProfile}
        name={'startDate'}
        label={'Start date'}
      />
    </fieldset>
  )
}

export default DateField
