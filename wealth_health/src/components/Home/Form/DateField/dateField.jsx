import React from 'react'

import DateInput from './DateInput/dateInput'

function DateField({
  handleChange,
  fillProfile,
  inputIsWrong,
  setInputIsWrong,
}) {
  return (
    <fieldset className="dateForm">
      {/* <legend>Dates</legend> */}
      <DateInput
        handleChange={handleChange}
        inputIsWrong={inputIsWrong}
        fillProfile={fillProfile}
        setInputIsWrong={setInputIsWrong}
        name={'dateOfBirth'}
        label={'Date of birth'}
      />
      <DateInput
        handleChange={handleChange}
        inputIsWrong={inputIsWrong}
        fillProfile={fillProfile}
        setInputIsWrong={setInputIsWrong}
        name={'startDate'}
        label={'Start date'}
      />
    </fieldset>
  )
}

export default DateField
