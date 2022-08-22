import React from 'react'
import { useState } from 'react'

import DatePicker from '../DatePicker/datePicker'
import CalendarIcon from '../../../../../utils/Icons/calendarIcon.jsx'

function StartDate() {
  const [isShown, setIsShown] = useState(false)
  const [date, setDate] = useState('MM/DD/YYY')

  return (
    <>
      <label>Start date</label>
      <input
        type="text"
        onFocus={() => {
          setIsShown(true)
        }}
        // onBlur={() => {
        //   setIsShown(false)
        // }}
        onChange={() => {
          setDate(date)
        }}
        value={date}

        //rajouter ici un onchange pour changer la value
      />
      <CalendarIcon />
      <DatePicker isShown={isShown} setDate={setDate} />
    </>
  )
}

export default StartDate
