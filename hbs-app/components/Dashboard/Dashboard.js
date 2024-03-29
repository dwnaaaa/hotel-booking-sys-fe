'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Card from './Card';
import './Dashboard.css';
import BookingCard from './BookingCard';
import HousekeepingPopup from './HousekeepingPopup/HousekeepingPopup';
import BookingDetailsPopup from './BookingDetailsPopup/BookingDetailsPopup';
import KitchenPopup from './KitchenPopup/KitchenPopup';
import ConciergePopup from './ConciergePopup/ConciergePopup';
import ViewBillPopup from './ViewBillPopup/ViewBillPopup';

function Dashboard({ supervisorType }) {
  const router = useRouter();

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleViewBillClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedBooking(null);
    setIsPopupOpen(false);
  };
  
  let employeeType = localStorage.getItem('type')

  const formatDateTime = (dateString) => {
    const options = { 
      year: 'numeric', month: '2-digit', day: '2-digit', 
      hour: 'numeric', minute: 'numeric', hour12: true 
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  useEffect(() => {

    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:8080/hbs/room/all', {
          headers: {
            'Accept': 'application/json',
          },
          method: "GET",
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch room data');
        }
  
        // Parse the JSON response
        const roomData = await response.json();
  
        // Update the state with the fetched data
        setRooms(roomData);
        console.log(roomData);
      } catch (error) {
        console.error('Error fetching room data: ', error);
      }
    };

    const fetchBookings = async () => {
      const response = await fetch('http://localhost:8080/hbs/booking/all', {
        headers: {
          'Accept': 'application/json',
        },
        method: "GET",
      });

      if(!response.ok) {
        throw new Error('Failed to fetch booking data')
      }

      const bookingData = await response.json()
      setBookings(bookingData)
      console.log(bookings)
    }

    const checkAuth = () => {
      if (localStorage.getItem('jwt') === null) {
        router.push('/login');
      }
    }
  
    fetchRooms();
    fetchBookings();
    checkAuth()
  }, []);

  return (
    <Layout>
      <div className="front-desk-container">
        <div className="column column-left">
        <h1>Bookings</h1>

        <div className="header-container">
            
            <div className="search-container">
                <input type="text" placeholder="Enter BRN" id="searchBar" />
                <button className="viewBill" onClick={() => handleViewBillClick}>
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
            {bookings.map((booking) => (
              <BookingCard
                booking={booking}
                // key={index}
                // bookingRef={booking.bookingRef}
                // checkInTime={booking.checkInTime}
                // roomType={booking.roomType}
                // roomQuantity={booking.roomQuantity}
                onBookingClick={() => handleBookingClick(booking)}
                onHousekeepingClick={() => handleHousekeepingClick(booking)}
                onKitchenClick={() => handleKitchenClick(booking)}
                onConciergeClick={() => handleConciergeClick(booking)}
                employeeType={employeeType}
                supervisorType={supervisorType}
              />
            ))}
          </div>
        </div>

        <div className="column column-right">
          {rooms.map((room) => (
            <Card
            onBookingClick={() => handleBookingClick(room)}
            onHousekeepingClick={() => handleHousekeepingClick(room)}
            onKitchenClick={() => handleKitchenClick(room)}
            onConciergeClick={() => handleConciergeClick(room)}
            employeeType={employeeType}
            supervisorType={supervisorType}
            room={room}
            />
          ))}
        </div>

        {/* Details Popup */}

        {selectedBooking && selectedBooking.type === 'frontdesk' && (
          <BookingDetailsPopup 
          bookingRef={selectedBooking.brn}
          checkInTime={formatDateTime(selectedBooking.checkInDate)}
          checkOutTime={formatDateTime(selectedBooking.checkOutDate)}
          roomType={selectedBooking.roomType}
          roomQuantity={selectedBooking.noOfRooms}
          primaryGuestName={selectedBooking.primaryGuestId}
          otherGuests={null} // Assuming this is a general list for all bookings
          onClose={closePopup}
        />
        )}

        {selectedBooking && selectedBooking.type === 'housekeeping' && (
          <HousekeepingPopup
            bookingRef={selectedBooking.brn}
            roomType={selectedBooking.roomType}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'kitchen' && (
          <KitchenPopup
            bookingRef={selectedBooking.brn}
            roomType={selectedBooking.roomType}
            onClose={closePopup}
          />
        )}

        {selectedBooking && selectedBooking.type === 'concierge' && (
          <ConciergePopup
            bookingRef={selectedBooking.brn}
            onClose={closePopup}
          />
        )}

        {/* {selectedBooking && selectedBooking.type === 'viewbill' && (
          <ViewBillPopup
            onClose={closePopup}
          />
        )} */}

        {isPopupOpen && (
          <ViewBillPopup
            onClose={closePopup}
          />
        )}

      </div>
    </Layout>
  );
}

export default Dashboard;
