import React from 'react'
import { useState } from 'react'

import NameField from './NameField/nameField'
import DateField from './DateField/dateField'
import AdressField from './AdressField/adressField'
import DepartmentField from './DepartmentField/departmentField'
import SaveButton from './SaveButton/saveButton'
import ValidationModal from '../ValidationModal/validationModal'

function Form() {
  const [modalIsOpen, setIsOpen] = useState(false)

  const [inputIsWrong, setInputIsWrong] = useState({
    firstName: false,
    lastName: false,
    startDate: false,
    dateOfBirth: false,
    street: false,
    city: false,
    state: false,
    zipCode: false,
    department: false,
  })

  const [profile, fillProfile] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  })

  // console.log(profile)
  // console.log(inputIsWrong)

  function handleChange(e) {
    const { name, value } = e.target
    fillProfile((prev) => ({ ...prev, [name]: value }))
    setInputIsWrong((prev) => ({ ...prev, [name]: false }))
  }

  function handleCheck(name, value) {
    setInputIsWrong((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="homeForm">
      <form className="createForm flexColumn">
        <h2 className="formTitle">Create Employee</h2>
        <NameField handleChange={handleChange} inputIsWrong={inputIsWrong} />
        <DateField
          handleChange={handleChange}
          fillProfile={fillProfile}
          setInputIsWrong={setInputIsWrong}
          inputIsWrong={inputIsWrong}
        />
        <AdressField handleChange={handleChange} inputIsWrong={inputIsWrong} />
        <DepartmentField
          handleChange={handleChange}
          inputIsWrong={inputIsWrong}
        />
        <SaveButton
          setIsOpen={setIsOpen}
          profile={profile}
          handleCheck={handleCheck}
        />
        <ValidationModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </form>
    </div>
  )
}

export default Form
