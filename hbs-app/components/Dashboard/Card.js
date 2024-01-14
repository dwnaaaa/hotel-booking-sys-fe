'use client'

import React, { useEffect, useState } from 'react';
import './Card.css';
import FrontDeskButton from './Buttons/FrontDeskButton';
import HousekeepingButton from './Buttons/HousekeepingButton';
import KitchenButton from './Buttons/KitchenButton';
import ConciergeButton from './Buttons/ConciergeButton';

const Card = ({ room, bookingRef, onBookingClick, onHousekeepingClick, onKitchenClick, onConciergeClick, employeeType, supervisorType }) => {
  // Set border color based on status
  const cardStyle = {
    borderColor: room.bookedBrn === "VACANT" ? 'green' : 'red',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    // Add other styles as necessary
  };
  const [booking, setBooking] = useState({})
  const [roomType, setRoomType] = useState('')
  let employeeButton = null

  if(employeeType === 'F' || (employeeType === 'S' && supervisorType === 'F')) {
    employeeButton = <FrontDeskButton onClick={() => onBookingClick(booking)} label="" />
  } 
  else if(employeeType === 'H' || (employeeType === 'S' && supervisorType === 'H')) {
    employeeButton = <HousekeepingButton onClick={() => onHousekeepingClick(booking)} label="" />
  } 
  else if(employeeType === 'K' || (employeeType === 'S' && supervisorType === 'K')) {
    employeeButton = <KitchenButton onClick={() => onKitchenClick(booking)} label="" />
  }
  else if(employeeType === 'C' || (employeeType === 'S' && supervisorType === 'C')) {
    employeeButton = <ConciergeButton onClick={() => onConciergeClick(booking)} label="" />
  }



  useEffect(() => {
    switch(room.roomType) {
      case 'D':
        setRoomType('Deluxe')
        break
      case 'G':
        setRoomType('Grand')
        break
      case 'S':
        setRoomType('Suite')
        break
      case 'E':
        setRoomType('Executive')
        break
      case 'S':
        setRoomType('Suite')
        break
    }

    const getBooking = async () => {
      if(room.bookedBrn === 'VACANT') {
        setBooking({
          primaryGuestId: -1,
          checkInDate: 'NONE',
          checkOutDate: 'NONE',
          noOfRooms: 0
        })
      } else {
        const response = await fetch(`http://localhost:8080/hbs/booking/${room.bookedBrn}`, {
          headers: {
            'Accept': 'application/json',
          },
          method: "GET",
        });

        if(!response.ok) {
          throw new Error('Failed to fetch booking data')
        }

        // const bookingData = await response.json().then(booking => {
        //   setBooking(booking)
        //   console.log(booking)
        // })
      }
    }

    getBooking()
  }, [])

  return (
    <div className="card" style={cardStyle}>
      <h3>Room {room.roomNumber}</h3>
      <p>{roomType}</p>
      {employeeButton}
    </div>
  );
};

export default Card;
