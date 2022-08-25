import React from 'react'

function SaveButton({ profile, setIsOpen }) {
  // console.log(profile)

  function openModal() {
    setIsOpen(true)
  }

  function handleClick(e) {
    e.preventDefault()

    // check que tous les champs sont remplis
    // for (const entry in profile) {
    //   if (!profile[entry]) {
    //     alert('STOP')
    //     return
    //   }
    // }

    // met à jour le local storage
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
