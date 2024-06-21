import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogEstilizado = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <DialogEstilizado>
        <button onClick={onClose}>X</button>
        {children}
      </DialogEstilizado>
    </Overlay>
  );
};

export default Modal;
