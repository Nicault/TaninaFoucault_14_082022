import React from 'react'
import ReactModal from 'react-modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root')

function ValidationModal({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <ReactModal
      className="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // shouldCloseOnOverlayClick={true}
    >
      <button className="closeModalButton" onClick={closeModal}>
        <FontAwesomeIcon className="closeModalIcon" icon={faCircleXmark} />
      </button>
      <div>Employee Created !</div>
    </ReactModal>
  )
}

export default ValidationModal
