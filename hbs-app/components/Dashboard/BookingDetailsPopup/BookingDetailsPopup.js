import React, {useEffect, useState} from 'react';
import './BookingDetailsPopup.css';
import '../PopupGlobal.css';

const BookingDetailsPopup = ({ bookingRef, checkInTime, checkOutTime, roomType, roomQuantity,primaryGuestName, otherGuests, onClose }) => {
  const [booking, setBooking] = useState([])
  const [guests, setGuests] = useState([])
  const [primaryGuest, setPrimaryGuest] = useState({})
  // const [specificguest, setSpecificGuest] = useState([])
  const roomTypeImages = [
    { type: 'Deluxe', url: 'images/rooms/twin.jpg' },
    { type: 'Suite', url: 'images/rooms/king.jpg' },
    // ... add other room types if needed
  ];

  function formatDateTime(dateTimeString) {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('en-GB', options);
  }

  const findImageForRoomType = (type) => {
    const image = roomTypeImages.find(room => room.type === type);
    return image ? image.url : 'images/rooms/twin.jpg';
  };

  const headerImageUrl = findImageForRoomType(roomType);

  const handleConfirm = () => {
    console.log("Confirm actions for room", bookingRef);
    onClose(); 
  };

  const checkIn = async () => {
    console.log(booking.brn)
    const response = await fetch(`http://localhost:8080/hbs/booking/check-in/${booking.brn}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
    }).then(response => {
      if(!response.ok) {
        console.log("check in failed")
        alert('Check-in failed. Please try again.');
      } else {
        console.log("Checked in")
        alert('Checked in successfully!');
        onClose();
      }
    })
  }

  const checkOut = async () => {
    console.log(booking.brn)
    const response = await fetch(`http://localhost:8080/hbs/booking/check-out/${booking.brn}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
    }).then(response => {
      if(!response.ok) {
        console.log("check out failed")
      } else {
        console.log("Checked out")
      }
    })
  }

  const fetchBooking = async () => {
    const response = await fetch(`http://localhost:8080/hbs/booking/${bookingRef}`);
    const bookingData = await response.json().then(data => {
      setBooking(data)
    })
  }

  const fetchPrimaryGuest = async () => {
    if (booking && booking.primaryGuestId) {
      try {
        const response = await fetch(`http://localhost:8080/hbs/guest/${booking.primaryGuestId}`, {
          headers: {
            Accept: 'application/json',
          },
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch guest data');
        }

        const guestData = await response.json();
        setPrimaryGuest(guestData);
      } catch (error) {
        console.error('Error fetching guest data:', error);
      }
    }
  };

  useEffect(() => {
    fetchBooking();
    fetchPrimaryGuest();
  },[bookingRef, booking])

  function findMatchingGuest(booking, guests) {
    for (let i = 0; i < guests.length; i++) {
      if (guests[i].guestId == booking.primaryGuestId) {
        return guests[i]; // Return the matching guest if found
      }
    }
  
    return null; // Return null if no matching guest is found
  }
  
  const specificguest = findMatchingGuest(booking, guests);

  return (
    <div className="popup-container">
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="details-popup">
        <button className="btn-close-circle" onClick={onClose}>
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="popup-header-image" style={{ backgroundImage: `url(${headerImageUrl})` }}></div>
        
        
        <div className="overall-content">
        <h2>{booking.brn}</h2>
        <h4>
          {booking.roomType === 'D' ? 'Deluxe' :
          booking.roomType === 'G' ? 'Grand' :
          booking.roomType === 'S' ? 'Suite' :
          booking.roomType === 'E' ? 'Executive' :
          'Invalid Room Type'}
        </h4>

        <hr></hr>

        <div className="booking-popup-content">
          <h3>Booking details</h3>

          <div className="flex-container">
            <div className="left-column">
              <div className="checkin-checkout">
                <div className="checkin">
                  <p>{formatDateTime(booking.checkInDate)}</p>
                  <small>Check In</small>
                </div>
                <div className="checkout">
                  <p>{formatDateTime(booking.checkOutDate)}</p>
                  <small>Check Out</small>
                </div>
              </div>
              <div className="rooms-booked">
                <p>Room {booking.noOfRooms}</p>
                <small>Rooms Booked</small>
              </div>
            </div>

            <div className="right-column">
              {/* <p>{primaryGuest ? `${primaryGuest.firstName} ${primaryGuest.middleName || ''} ${primaryGuest.lastName}` : 'Guest not found'}</p> */}
              {primaryGuest ? `${primaryGuest.firstName} ${primaryGuest.middleName || ''} ${primaryGuest.lastName}` : 'NONE'}
              <small>Primary Guest</small>
              <div className="other-guests">
              {otherGuests ? 
                <p>{otherGuests.map(guest => guest.name).join(', ')}</p> 
                : 
                <p>Loading guests...</p>
              }
            <small>Other Guests</small>
            </div>

            </div>
          </div>
        </div>
        </div>

        <div className="action-buttons">
          {/* <button onClick={onClose} className="btn-close">Close</button> */}
          <a  className="btn-action-check" onClick={checkIn}>Checkin</a>
          <a href="/checkout" className="btn-action" onClick={checkOut}>Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPopup;
