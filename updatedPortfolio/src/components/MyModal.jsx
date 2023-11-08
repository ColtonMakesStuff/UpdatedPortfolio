import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({content}) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div >
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Modal show={showModal} onHide={handleCloseModal} >
        <div style={{backgroundColor:'grey', color:'white', border:'30px solid grey', borderRadius:'6px'}}> {content}</div>
     
      </Modal>
    </div>
  );
}

export default MyModal;
