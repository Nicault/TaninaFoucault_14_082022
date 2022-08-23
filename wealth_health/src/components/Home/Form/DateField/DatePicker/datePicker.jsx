import React from 'react'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

function DatePicker({ setDate, isShown, setIsShown }) {
  return (
    <div className="calendar">
      {isShown && (
        <Calendar
          onChange={(date) => {
            setDate(Moment(date).format('MM/DD/YYYY'))
            setIsShown(false)
          }}
          locale={'en'}
        />
      )}
    </div>
  )
}

export default DatePicker
