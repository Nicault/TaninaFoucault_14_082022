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

  function handleChange(e) {
    const { name, value } = e.target
    fillProfile((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="createForm flexColumn">
      <h2 className="formTitle">Create Employee</h2>
      <NameField handleChange={handleChange} />
      <DateField handleChange={handleChange} />
      <AdressField handleChange={handleChange} />
      <DepartmentField handleChange={handleChange} />
      <SaveButton setIsOpen={setIsOpen} profile={profile} />
      <ValidationModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </form>
  )
}

export default Form
