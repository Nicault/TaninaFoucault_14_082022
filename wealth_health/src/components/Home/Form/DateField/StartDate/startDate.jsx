import React from 'react'
import { useState } from 'react'

import DatePicker from '../DatePicker/datePicker'
import CalendarButton from '../CalendarButton/calendarButton.jsx'

function StartDate({ handleChange }) {
  const [isShown, setIsShown] = useState(false)
  const [date, setDate] = useState('')

  const changeDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="startDate">
      <label>Start date</label>
      <input
        name="startDate"
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
      <DatePicker isShown={isShown} setDate={setDate} setIsShown={setIsShown} />
    </div>
  )
}

export default StartDate
