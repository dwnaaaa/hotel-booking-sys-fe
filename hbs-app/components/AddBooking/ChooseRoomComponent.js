'use client';

import React, { useState, useEffect  } from 'react';
import DatePicker from 'react-datepicker';
import RoomList from './RoomList';
import './ChooseRoomComponent.css';
import 'react-datepicker/dist/react-datepicker.css';

const ChooseRoomComponent = ({ onNextStep }) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);
  const [roomNumbers, setRoomNumbers] = useState([]); // Initialize as an empty array
  const [selectedRoomInfo, setSelectedRoomInfo] = useState(null);

  // const handleRoomSelect = (roomInfo) => {
  //   setSelectedRoomInfo(roomInfo);
  // };

  useEffect(() => {
    console.log("Room info:", selectedRoomInfo);
  }, [selectedRoomInfo]);

  // backend connection
  const handleRoomSelect = (roomInfo) => {
    setSelectedRoomInfo(roomInfo);
  };

  useEffect(() => {
    if (selectedRoomInfo) {
      fetchRoomNumbers(selectedRoomInfo);
    }
  }, [selectedRoomInfo]);

  const fetchRoomNumbers = async (selectedRoomInfo) => {
    try {
      const response = await fetch('http://localhost:8080/hbs/room/all', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomType: selectedRoomInfo.roomType,
          roomQuantity: selectedRoomInfo.roomQuantity,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Ensure data.roomNumbers is an array before updating state
        if (Array.isArray(data.roomNumbers)) {
          setRoomNumbers(data.roomNumbers);
        } else {
          console.error('Invalid room numbers data:', data.roomNumbers);
        }
      } else {
        console.error('Failed to fetch room numbers');
      }
    } catch (error) {
      console.error('Error fetching room numbers:', error);
    }
  };
  
  return (
    <div className="parent-container">    
      <div className="container-flex">

      <div className="guest-input-container">
        <label>Guests</label>
        <div className="guest-control">
        <button type="button" onClick={() => setGuestCount(Math.max(0, guestCount - 1))}>-</button>
        <input type="number" value={guestCount} onChange={(e) => setGuestCount(Math.max(0, parseInt(e.target.value)))} placeholder="Number of guests" />
        <button type="button" onClick={() => setGuestCount(guestCount + 1)}>+</button>
        </div>
        </div>

        <div className="date-picker-container">
            <div>
            <label>Check-in</label>
            <DatePicker 
                selected={checkInDate} 
                onChange={date => setCheckInDate(date)}
                minDate={new Date()} // Disables past dates
                dateFormat="dd/MM/yyyy"
            />
            </div>

            <div>
            <label>Check-out</label>
            <DatePicker 
                selected={checkOutDate} 
                onChange={date => setCheckOutDate(date)}
                minDate={checkInDate} // Disables dates before check-in
                dateFormat="dd/MM/yyyy"
            />
            </div>
        </div>

</div>

<hr /> 

<div>
    <h2>Choose Your Room</h2>
    <RoomList onRoomSelect={handleRoomSelect} />
    <p>Available Room Numbers: {roomNumbers.join(', ')}</p>
</div>


<div className="button-container single-button">
    <button onClick={() => onNextStep({ guestCount,checkInDate,checkOutDate, selectedRoomInfo})} className="button next">
            <svg viewBox="0 0 24 24" class="icon">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
        </button>
        </div>
</div>

  );
};

export default ChooseRoomComponent;
