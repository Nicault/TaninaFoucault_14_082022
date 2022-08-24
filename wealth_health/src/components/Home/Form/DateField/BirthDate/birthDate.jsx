import React from 'react'
import { useState } from 'react'

import DatePicker from '../DatePicker/datePicker'
import CalendarButton from '../CalendarButton/calendarButton'

function BirthDate({ handleChange }) {
  const [isShown, setIsShown] = useState(false)
  const [date, setDate] = useState('')

  const changeDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="birthDate">
      <label>Date of birth</label>
      <input
        name="dateOfBirth"
        className="dateInput"
        placeholder="MM/DD/YYYY"
        type="text"
        onChange={(e) => {
          changeDate(e)
          handleChange(e)
        }}
        value={date}
      />
      <CalendarButton setIsShown={setIsShown} />
      <DatePicker setDate={setDate} isShown={isShown} setIsShown={setIsShown} />
    </div>
  )
}

export default BirthDate
