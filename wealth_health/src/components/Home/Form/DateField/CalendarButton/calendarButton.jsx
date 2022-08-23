import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function CalendarButton({ setIsShown }) {
  return (
    <button
      className="calendarButton"
      onClick={(e) => {
        e.preventDefault()
        setIsShown(true)
      }}
    >
      <FontAwesomeIcon className="calendarIcon" icon={faCalendarDays} />
    </button>
  )
}

export default CalendarButton
