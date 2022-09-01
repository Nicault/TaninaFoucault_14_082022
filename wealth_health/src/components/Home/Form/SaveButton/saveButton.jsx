import React from 'react'

function SaveButton({ profile, setIsOpen, handleCheck }) {
  // console.log(profile)

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
      const oldItems = JSON.parse(localStorage.getItem('employees')) || []
      const newItems = [...oldItems, profile]
      localStorage.setItem('employees', JSON.stringify(newItems))

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
