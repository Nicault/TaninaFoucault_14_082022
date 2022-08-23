import React from 'react'

function SaveButton({ setIsOpen }) {
  function openModal() {
    setIsOpen(true)
  }
  return (
    <button
      className="saveButton"
      onClick={(e) => {
        e.preventDefault()
        openModal()
      }}
    >
      Save
    </button>
  )
}

export default SaveButton
