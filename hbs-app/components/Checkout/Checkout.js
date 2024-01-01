'use client'

// Checkout.js

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './Checkout.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [total, setTotal] = useState(0);

  // Function to handle checkout button click
  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Checkout clicked!');
  };

  return (
    <Layout>
      <div className='checkout-container'>
        <h2>Checkout</h2>

        {/* Payment Summary */}
        <div className='payment-summary'>
            <h3>Payment Summary</h3>
            {/* Display room, service, products cost, and total */}
            {/* Replace the placeholders with your actual values */}
            <p>Room Cost: $100</p>
            <p>Products Cost: $30</p>

            <p>Services Cost:</p>
            <p>BRN:</p>
            <table>
                <tbody>
                <tr>
                    <td>Service 1</td>
                    <td>$15</td>
                </tr>
                </tbody>
            </table>
            <p>ROOM:</p>
            <table>
                <tbody>
                <tr>
                    <td>Service 2</td>
                    <td>$20</td>
                </tr>
                </tbody>
            </table>

          <p>Total: ${total}</p>
        </div>

        {/* Payment Method */}
        <div className='payment-method'>
          <h3>Payment Method</h3>
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Card
          </label>
        </div>

        {/* Card Details (if payment method is card) */}
        {paymentMethod === 'card' && (
          <div className='card-details'>
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </label>
            <div className='expiration-cvv'>
              <label>
                Expiration Date:
                <input
                  type="date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                />
              </label>
              <label>
                CVV:
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </label>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </Layout>
  );
};

export default Checkout;
