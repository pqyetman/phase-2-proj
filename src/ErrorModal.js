import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({show, closeModal, message}) {

 
const handleClose = () => {
    
    closeModal()};


  return (  
 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {message}
        </Modal.Body>   
      </Modal>
   
  );
}

export default ErrorModal;