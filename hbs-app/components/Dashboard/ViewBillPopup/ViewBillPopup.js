import PaymentSummary from '@/components/Checkout/PaymentSummary';
import React from 'react';
import '../PopupGlobal.css';
import'./ViewBillPopup.css';

const ViewBillPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        <PaymentSummary />
      </div>
    </div>
  );
};

export default ViewBillPopup;