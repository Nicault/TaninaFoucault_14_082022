import React from 'react'
import { addEmployee } from '../../../../utils/Datas/dataManager'

function SaveButton({ profile, setIsOpen, handleCheck }) {
  function openModal() {
    setIsOpen(true)
  }

  function handleClick(e) {
    e.preventDefault()

    // check si chaque champ est bien rempli
    for (const entry in profile) {
      if (!profile[entry]) {
        // alert('STOP ' + entry)
        handleCheck(entry, true)
      }
    }

    const everyInputIsFilled = Object.values(profile).every((value) => value)
    // si tous les champs sont remplis
    if (everyInputIsFilled) {
      // met à jour le local storage
      addEmployee(profile)

      openModal()
    }
  }

  return (
    <button
      type="submit"
      className="saveButton"
      onClick={(e) => {
        handleClick(e)
      }}
    >
      Save
    </button>
  )
}

export default SaveButton
