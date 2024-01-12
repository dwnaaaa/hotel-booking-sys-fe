import React, {useState, useEffect}  from 'react';
import './Checkout.css';

const PaymentSummary = () => {

    const [total, setTotal] = useState(0);

  // Costs
  const roomCost = 100;
  const productsCost = 30;
  const service1Cost = 15;
  const service2Cost = 20;

  useEffect(() => {
    setTotal(roomCost + productsCost + service1Cost + service2Cost);
  }, []);

  return (
    <div>{/* Payment Summary */}
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

    </div></div>
  )
}

export default PaymentSummary