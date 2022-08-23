import React from 'react'
import { useState } from 'react'

import DatePicker from '../DatePicker/datePicker'
import CalendarButton from '../CalendarButton/calendarButton.jsx'

function StartDate() {
  const [isShown, setIsShown] = useState(false)
  const [date, setDate] = useState('')

  const handleChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="startDate">
      <label>Start date</label>
      <input
        className="dateInput"
        placeholder="MM/DD/YYYY"
        type="text"
        onChange={handleChange}
        value={date}
      />
      <CalendarButton setIsShown={setIsShown} />
      <DatePicker isShown={isShown} setDate={setDate} setIsShown={setIsShown} />
    </div>
  )
}

export default StartDate
