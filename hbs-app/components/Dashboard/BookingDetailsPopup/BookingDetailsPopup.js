import React, {useEffect} from 'react';
import './BookingDetailsPopup.css';
import '../PopupGlobal.css';

const BookingDetailsPopup = ({ bookingRef, checkInTime, checkOutTime, roomType, roomQuantity,primaryGuestName, otherGuests, onClose }) => {
  const roomTypeImages = [
    { type: 'Deluxe', url: 'images/rooms/twin.jpg' },
    { type: 'Suite', url: 'images/rooms/king.jpg' },
    // ... add other room types if needed
  ];

  const findImageForRoomType = (type) => {
    const image = roomTypeImages.find(room => room.type === type);
    return image ? image.url : 'images/rooms/twin.jpg';
  };

  const headerImageUrl = findImageForRoomType(roomType);

  const handleConfirm = () => {
    console.log("Confirm actions for room", bookingRef);
    onClose(); 
  };

  useEffect(() => {
    const fetchBooking = async () => {
      console.log(bookingRef)
      const response = await fetch(`http://localhost:8080/hbs/booking/${bookingRef}`)
      // const bookingData = await response.json()

    }

    fetchBooking()
  },[])

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
        {/* <h2>{bookingData.brn}</h2> */}
        {/* <h4>{bookingData.roomType}</h4> */}

        <hr></hr>

        <div className="booking-popup-content">
          <h3>Booking details</h3>

          <div className="flex-container">
            <div className="left-column">
              <div className="checkin-checkout">
                <div className="checkin">
                  {/* <p>{bookingData.checkInDate}</p> */}
                  <small>Check In</small>
                </div>
                <div className="checkout">
                  {/* <p>{bookingData.checkOutDate}</p> */}
                  <small>Check Out</small>
                </div>
              </div>
              <div className="rooms-booked">
                {/* <p>Room {bookingData.noOfRooms}</p> */}
                <small>Rooms Booked</small>
              </div>
            </div>

            <div className="right-column">
              {/* <p>{bookingData.primaryGuestId}</p> */}
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
          <a href="/checkout" className="btn-action">Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPopup;
