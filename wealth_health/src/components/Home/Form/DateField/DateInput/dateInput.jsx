import React from 'react'
import { useState } from 'react'

import DatePicker from '../DatePicker/datePicker'
import CalendarButton from '../CalendarButton/calendarButton.jsx'

function DateInput({ handleChange, name, label, fillProfile }) {
  const [isShown, setIsShown] = useState(false)
  const [date, setDate] = useState('')

  const changeDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className={name}>
      <label>{label}</label>
      <input
        name={name}
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
      <DatePicker
        name={name}
        setDate={setDate}
        isShown={isShown}
        setIsShown={setIsShown}
        onClickOutside={() => setIsShown(false)}
        fillProfile={fillProfile}
      />
    </div>
  )
}

export default DateInput
