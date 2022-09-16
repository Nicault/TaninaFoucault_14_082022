import React from 'react'
import { useState } from 'react'

import DatePicker from '../DatePicker/datePicker'
import CalendarButton from '../CalendarButton/calendarButton.jsx'
// import Moment from 'moment'
// import MomentInput from 'react-moment-input'

function DateInput({
  handleChange,
  inputIsWrong,
  setInputIsWrong,
  name,
  label,
  fillProfile,
}) {
  const [isShown, setIsShown] = useState(false)
  const [date, setDate] = useState('')

  const changeDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className={name}>
      <label>{label}</label>
      {/* <MomentInput
        max={Moment().add(5, 'days')}
        min={Moment()}
        format="YYYY-MM-DD"
        options={true}
        readOnly={false}
        icon={false}
        onChange={(date) => {
          console.log(date)
        }}
      /> */}
      <input
        name={name}
        className={inputIsWrong[name] ? 'attention' : ''}
        placeholder="YYYY-MM-DD"
        type="date"
        onClick={(e) => e.preventDefault()}
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
        setInputIsWrong={setInputIsWrong}
      />
    </div>
  )
}

export default DateInput
