import React from 'react'

function SaveButton({ profile, setIsOpen }) {
  function openModal() {
    setIsOpen(true)
  }

  function handleClick(e) {
    e.preventDefault()

    const oldItems = JSON.parse(localStorage.getItem('employees')) || []
    const newItems = [...oldItems, profile]
    localStorage.setItem('employees', JSON.stringify(newItems))

    openModal()
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
