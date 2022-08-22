import React from 'react'
import Modal from 'react-modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function ValidationModal({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Modal
      className="modal"
      overlayClassName="overlay"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <button className="closeModalButton" onClick={closeModal}>
        <FontAwesomeIcon className="closeModalIcon" icon={faCircleXmark} />
      </button>
      <div>Employee Created !</div>
    </Modal>
  )
}

export default ValidationModal
