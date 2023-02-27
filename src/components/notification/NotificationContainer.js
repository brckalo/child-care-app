import { useState } from 'react';
import {
  Toast,
  ToastContainer
} from 'react-bootstrap';

const NotificationContainer = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleOnClose = () => {
    setShow(false);
  }

  return (
    <ToastContainer
      position='top-center'
      className='mt-3'
    >
      <Toast
        autohide
        bg='danger'
        delay={3000}
        onClose={handleOnClose}
        show={show}
        className='text-white'
      >
        <Toast.Body>
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default NotificationContainer;
