'use client'

import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import './Checkout.css';

function formatCardNumber(value) {
  return value.replace(/\D/g, '') // Remove non-digits
             .replace(/(\d{4})(?=\d)/g, '$1 '); // Add space every 4 digits
}

function formatCVV(value) {
  return value.replace(/\D/g, '').substring(0, 3); // Allow only 3 digits
}

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [total, setTotal] = useState(0);

  // Costs
  const roomCost = 100;
  const productsCost = 30;
  const service1Cost = 15;
  const service2Cost = 20;

  useEffect(() => {
    setTotal(roomCost + productsCost + service1Cost + service2Cost);
  }, []);

  const handleCheckout = () => {
    console.log('Checkout clicked!');
    // Implement your checkout logic here
  };

  return (
    <Layout>
      <div className='checkout-container'>
        <h1>Checkout</h1>

        {/* Payment Summary */}
        <div className='payment-summary'>
            <h3>Payment Summary</h3>
            <table>
          <tbody>
              <tr>
                  <td>Room Cost:</td>
                  <td>${roomCost}</td>
              </tr>
              <tr>
                  <td>Products Cost:</td>
                  <td>${productsCost}</td>
              </tr>
              {/* BRN Heading */}
              <tr>
                  <td colSpan="2">BRN:</td>
              </tr>
              <tr>
                  <td>Service 1:</td>
                  <td>${service1Cost}</td>
              </tr>
              {/* ROOM Heading */}
              <tr>
                  <td colSpan="2">ROOM:</td>
              </tr>
              <tr>
                  <td>Service 2:</td>
                  <td>${service2Cost}</td>
              </tr>
              <tr>
                  <td>Total:</td>
                  <td>${total}</td>
              </tr>
          </tbody>
      </table>

        </div>

       {/* Payment Method */}
       <div className='payment-method'>
          <h3>Payment Method</h3>
          <div className="radio-button-group">
          <input
            type="radio"
            id="paymentMethodCash"
            name="paymentMethod"
            value="cash"
            className="radio-button"
            checked={paymentMethod === 'cash'}
            onChange={() => setPaymentMethod('cash')}
          />
          <label htmlFor="paymentMethodCash" className="radio-label">Cash</label>

          <input
            type="radio"
            id="paymentMethodCard"
            name="paymentMethod"
            value="card"
            className="radio-button"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          <label htmlFor="paymentMethodCard" className="radio-label">Card</label>
        </div>
              </div>

        {/* Card Details (if payment method is card) */}
        {paymentMethod === 'card' && (
  <div className='card-details'>
    <label>
      Card Number
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
        maxLength="19" // 16 digits + 3 spaces
        placeholder="0000 0000 0000 0000"
      />
    </label>

    {/* Expiration Date and CVV */}
    <div className='expiration-cvv'>
      {/* Expiration Date Input */}
      <label>
        Expiration Date (MM/YY)
        <input
          type="text"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          placeholder="MM/YY"
          maxLength="5"
        />
      </label>

      {/* CVV Input */}
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(formatCVV(e.target.value))}
          maxLength="3"
          placeholder="123"
        />
      </label>
    </div>
  </div>
)}

      <div className='checkout-btn-container'>
      <button onClick={handleCheckout} className='checkout-btn'>Checkout</button>

      </div>

      </div>
    </Layout>
  );
};

export default Checkout;