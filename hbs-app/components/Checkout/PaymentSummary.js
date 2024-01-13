import React, {useState, useEffect}  from 'react';
import './Checkout.css';

const PaymentSummary = () => {
  const [roomsDB, setRoomsDB] = useState([]);
  const [brn, setBRN] = useState('');
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedServiceCode, setSelectedServiceCode] = useState('');
  const [roomCost, setRoomCost] = useState(0);

  // Costs
  //const roomCost = 100;
  // const productsCost = 30;
  // const service1Cost = 15;
  // const service2Cost = 20;

  //get brn from brn services
  //http://localhost:8080/hbs/brn-room/get-brn-by-brn-service
// display total amount to be paid by the customer
  //http://localhost:8080/hbs/brn-room/total-price/{brn}
// get room number from brn services
  //http://localhost:8080/hbs/brn-room/get-room-number
//display service per room
  //http://localhost:8080/hbs/brn-room/by-room/{roomNumber}
//display service from brn
  //http://localhost:8080/hbs/brn-room/by-brn/{brn}/{serviceCode}
//display room cost
  //http://localhost:8080/hbs/room-type/get-room-cost/{roomType}


  useEffect(() => {
    fetch('http://localhost:8080/hbs/brn-room/get-brn-by-brn-service')
      .then(response => response.json())
      .then(data => {
        setRoomsDB(data);
        const firstBRN = data[0]?.brn;
        setBRN(firstBRN);
  
        fetch(`http://localhost:8080/hbs/brn-room/total-price/${firstBRN}`)
          .then(response => response.json())
          .then(totalAmount => {
            setTotal(totalAmount);
          })
          .catch(error => console.error('Error fetching total amount:', error));
  
        fetch(`http://localhost:8080/hbs/brn-room/get-room-number?brn=${firstBRN}`)
          .then(response => response.json())
          .then(roomNumber => {
          })
          .catch(error => console.error('Error fetching room number:', error));
  
        fetch(`http://localhost:8080/hbs/brn-room/by-room/${firstBRN}`)
          .then(response => response.json())
          .then(services => {
            setServices(services);
          })
          .catch(error => console.error('Error fetching services per room:', error));
  
        // Fetch and set room cost
        fetch(`http://localhost:8080/hbs/room-type/get-room-cost/A`)
          .then(response => response.json())
          .then(roomCost => {
            setRoomCost(roomCost);
          })
          .catch(error => console.error('Error fetching room cost:', error));
      })
      .catch(error => console.error('Error fetching BRN from BRN services:', error));
  
    if (brn && selectedServiceCode) {
      fetch(`http://localhost:8080/hbs/brn-room/by-brn/${brn}/${selectedServiceCode}`)
        .then(response => response.json())
        .then(services => {
          setSelectedServices(services);
        })
        .catch(error => console.error('Error fetching services:', error));
    }
  }, [brn, selectedServiceCode]);

  return (
    <div>
      {/* Payment Summary */}
      <div className='payment-summary'>
        <h3>Payment Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Room Cost:</td>
              <td>${roomCost}</td>
            </tr>
            {/* BRN Heading */}
            <tr>
              <td colSpan="2">BRN:</td>
            </tr>
            {roomsDB.map((room, index) => (
              <tr key={index}>
                <td>Service {index + 1}:</td>
                <td>${room.price}</td>
              </tr>
            ))}
            {/* ROOM Heading */}
            <tr>
              <td colSpan="2">ROOM:</td>
            </tr>
            {services.map((service, index) => (
              <tr key={index}>
                <td>Service {index + 1}:</td>
                <td>${service.price}</td>
              </tr>
            ))}
            {/* Selected Services Heading */}
            {selectedServices.length > 0 && (
              <tr>
                <td colSpan="2">Selected Services:</td>
              </tr>
            )}
            {selectedServices.map((selectedService, index) => (
              <tr key={index}>
                <td>{selectedService.name}:</td>
                <td>${selectedService.price}</td>
              </tr>
            ))}
            <tr>
              <td>Total:</td>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentSummary;