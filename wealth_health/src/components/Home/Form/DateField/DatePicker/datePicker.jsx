import React, { useRef } from 'react'
import CloseOnClickOutside from './closeOnClickOutside'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

function DatePicker({
  setDate,
  isShown,
  setIsShown,
  fillProfile,
  name,
  onClickOutside,
}) {
  const ref = useRef(null)
  CloseOnClickOutside(onClickOutside, ref)

  return (
    <div ref={ref} className="calendar">
      {isShown && (
        <Calendar
          onChange={(date) => {
            setDate(Moment(date).format('MM/DD/YYYY'))
            fillProfile((prev) => ({
              ...prev,
              [name]: Moment(date).format('MM/DD/YYYY'),
            }))
            setIsShown(false)
          }}
          locale={'en'}
        />
      )}
    </div>
  )
}

export default DatePicker
