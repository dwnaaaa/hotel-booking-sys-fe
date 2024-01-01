import React from 'react';
import './Modal.css'; // Import your modal styles

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default Modal;
