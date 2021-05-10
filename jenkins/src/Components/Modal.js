import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const notify = () => toast("You are Hired MOHAMMAD TARIQ!!");

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle} style={{margin:'3rem'}}>Developer Details...</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>DEVELOPER INFO:</ModalHeader>
        <ModalBody>
         HELLO MY NAME IS MOHAMMAD TARIQ AND I AM A FULL STACK DEVELOPER TO BE
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={notify}>Hired</Button>{' '}
          <ToastContainer />
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;