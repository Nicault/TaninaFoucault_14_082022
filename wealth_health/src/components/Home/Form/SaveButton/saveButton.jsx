import React from 'react'

function SaveButton({ setIsOpen }) {
  function openModal() {
    setIsOpen(true)
  }
  return (
    <button
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
