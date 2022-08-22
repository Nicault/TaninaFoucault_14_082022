import React from 'react'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

function DatePicker({ isShown, setDate }) {
  return (
    <>
      {isShown && (
        <Calendar
          onChange={(date) => setDate(Moment(date).format('MM/DD/YYYY'))}
          locale={'en'}
        />
      )}
    </>
  )
}

export default DatePicker
