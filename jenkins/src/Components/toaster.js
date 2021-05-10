import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';

function Toaster(){
  const notify = () => toast("You are Hired MOHAMMAD TARIQ!");

  return (
    <div>
      
      <Button style={{color:'white',boxShadow:"1px 1px 4px black"}} color="warning" onClick={notify}>UNDERSTAND</Button>{' '}
      <ToastContainer />
    </div>
  );
}

export default Toaster;