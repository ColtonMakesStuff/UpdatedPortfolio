import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
    {/* <Modal.Dialog> */}
      </Modal>
    </div>
  );
}

export default MyModal;
