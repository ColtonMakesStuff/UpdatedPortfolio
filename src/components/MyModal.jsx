import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({content, modalHandeler, modalSize, modalStyles}) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div >
      <div onClick={handleOpenModal}>{modalHandeler}</div>

      <Modal size={modalSize}  show={showModal} onHide={handleCloseModal} style={modalStyles}>
        <div style={{backgroundColor:'grey', color:'white', border:'30px solid grey', borderRadius:'6px', justifySelf:'center' }}> {content}</div>
      </Modal>
    </div>
  );
}

export default MyModal;
