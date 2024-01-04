'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Card from './Card';
import './Dashboard.css';
import BookingCard from './BookingCard';
import HousekeepingPopup from './HousekeepingPopup/HousekeepingPopup';
import BookingDetailsPopup from './BookingDetailsPopup/BookingDetailsPopup';
import KitchenPopup from './KitchenPopup/KitchenPopup';
import ConciergePopup from './ConciergePopup/ConciergePopup';


const FrontDesk = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBookingClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'frontdesk' });
  };

  const handleHousekeepingClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'housekeeping' });
  };

  const handleKitchenClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'kitchen' });
  };

  const handleConciergeClick = (booking) => {
    setSelectedBooking({ ...booking, type: 'concierge' });
  };

  const closePopup = () => {
    setSelectedBooking(null);
  };

  const formatDateTime = (dateString) => {
    const options = { 
      year: 'numeric', month: '2-digit', day: '2-digit', 
      hour: 'numeric', minute: 'numeric', hour12: true 
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };
  
  
  const confirmedBookings = [
    {
      primaryGuestName: "Francesca Maries Buguis",
      bookingRef: "AXH57Z",
      checkInTime: "2024-01-05 14:00",
      checkOutTime: "2024-01-010 14:00",
      roomType: "Deluxe Suite",
      roomQuantity: 2
    },
    {
      bookingRef: "BKH34M",
      primaryGuestName: "Francesca Maries Buguis",
      checkInTime: "2024-01-06 15:00",
      checkOutTime: "2024-01-010 14:00",
      roomType: "Single Room",
      roomQuantity: 1
    },
  ];

  const otherGuests = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Emily Johnson' },
    // ... more guests
  ];
  

  const getRoomType = (roomNumber) => {
    if (roomNumber >= 1 && roomNumber <= 5) {
      return 'Twin';
    } else if (roomNumber >= 6 && roomNumber <= 10) {
      return 'Deluxe Twin';
    } else if (roomNumber >= 11 && roomNumber <= 15) {
      return 'Double Deck';
    } else if (roomNumber >= 16 && roomNumber <= 20) {
      return 'King';
    }
  };

  const getRandomStatus = () => Math.random() > 0.5 ? 'occupied' : 'available';

  const cardsData = Array.from({ length: 20 }, (_, i) => {
    const roomNumber = i + 1;
    const roomType = getRoomType(roomNumber);
    const status = getRandomStatus();
    console.log(`Room ${roomNumber}: ${status}`); // Log the status
    return {
      title: `Room ${roomNumber}`,
      content: `${roomType}`,
      status: status
    };
  });

  
  

  return (
    <Layout>
      <div className="front-desk-container">
        <div className="column column-left">
          
        <h1>Bookings</h1>

        <div className="header-container">
            
            <div className="search-container">
                <input type="text" placeholder="Enter BRN" id="searchBar" />
                <button className="viewBill">
                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7V6.37006C21 5.17705 21 4.58055 20.842 4.09946C20.5425 3.18719 19.8468 2.47096 18.9606 2.16261C18.4933 2 17.9139 2 16.755 2H7.24502C6.08614 2 5.50671 2 5.03939 2.16261C4.15322 2.47096 3.45748 3.18719 3.15795 4.09946C3 4.58055 3 5.17705 3 6.37006V15M21 11V20.3742C21 21.2324 20.015 21.6878 19.3919 21.1176C19.0258 20.7826 18.4742 20.7826 18.1081 21.1176L17.625 21.5597C16.9834 22.1468 16.0166 22.1468 15.375 21.5597C14.7334 20.9726 13.7666 20.9726 13.125 21.5597C12.4834 22.1468 11.5166 22.1468 10.875 21.5597C10.2334 20.9726 9.26659 20.9726 8.625 21.5597C7.98341 22.1468 7.01659 22.1468 6.375 21.5597L5.8919 21.1176C5.52583 20.7826 4.97417 20.7826 4.6081 21.1176C3.985 21.6878 3 21.2324 3 20.3742V19" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M9.5 10.4L10.9286 12L14.5 8" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 15.5H9M16.5 15.5H12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                    View Bill
                </button>
            </div>
        </div>

          <div className="booking-cards-container">
            {confirmedBookings.map((booking, index) => (
              <BookingCard
                key={index}
                bookingRef={booking.bookingRef}
                checkInTime={booking.checkInTime}
                roomType={booking.roomType}
                roomQuantity={booking.roomQuantity}
                onBookingClick={() => handleBookingClick(booking)}
                onHousekeepingClick={() => handleHousekeepingClick(booking)}
                onKitchenClick={() => handleKitchenClick(booking)}
                onConciergeClick={() => handleConciergeClick(booking)}
              />
            ))}
          </div>
        </div>

        <div className="column column-right">
          {cardsData.map((card, index) => (
            <Card 
            key={index} 
            title={card.title} 
            content={card.content} 
            status={card.status}
            bookingRef={card.bookingRef}
            checkInTime={card.checkInTime}
            roomType={card.roomType}
            roomQuantity={card.roomQuantity}
            onBookingClick={() => handleBookingClick(card)}
            onHousekeepingClick={() => handleHousekeepingClick(card)}
            onKitchenClick={() => handleKitchenClick(card)}
            onConciergeClick={() => handleConciergeClick(card)}/>
          ))}
        </div>

        {selectedBooking && selectedBooking.type === 'frontdesk' && (
          <BookingDetailsPopup 
          bookingRef={selectedBooking.bookingRef}
          checkInTime={formatDateTime(selectedBooking.checkInTime)}
          checkOutTime={formatDateTime(selectedBooking.checkOutTime)}
          roomType={selectedBooking.roomType}
          roomQuantity={selectedBooking.roomQuantity}
          primaryGuestName={selectedBooking.primaryGuestName}
          otherGuests={otherGuests} // Assuming this is a general list for all bookings
          onClose={closePopup}
        />
        )}

        {selectedBooking && selectedBooking.type === 'housekeeping' && (
          <HousekeepingPopup
            bookingRef={selectedBooking.bookingRef}
            roomType={selectedBooking.roomType}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'kitchen' && (
          <KitchenPopup
            bookingRef={selectedBooking.bookingRef}
            roomType={selectedBooking.roomType}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'concierge' && (
          <ConciergePopup
            bookingRef={selectedBooking.bookingRef}
            onClose={closePopup}
          />
        )}

      </div>
    </Layout>
  );
};

export default FrontDesk;