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

  return (
    <form className="createForm flexColumn">
      <h2 className="formTitle">Create Employee</h2>
      <NameField />
      <DateField />
      <AdressField />
      <DepartmentField />
      <SaveButton setIsOpen={setIsOpen} />
      <ValidationModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </form>
  )
}

export default Form
