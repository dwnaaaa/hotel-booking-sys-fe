'use client'

// AddBooking.js
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './AddBooking.css';
import AdditionalDetailsForm from './AdditionalDetailsForm';

const AddBooking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    primaryGuest: '',
    guestNames: '',
    bookingDate: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    numberOfRooms: 1,
    roomNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [showPGForm, setShowPGForm] = useState(false);
  const [showPrimaryGuestButton, setShowPrimaryGuestButton] = useState(true);
  const [showGuestButton, setShowGuestButton] = useState(true);


  const handleButtonClick = () => {
    setShowGuestButton(false);
    setShowAdditionalForm(true);
  };

  const handleButtonClick1 = () => {
    setShowPrimaryGuestButton(false); // Hide the Primary Guest Name button
    setShowPGForm(true);
  };

  const handleFormSubmit = (additionalDetails) => {
    setShowGuestButton(true);
    setShowAdditionalForm(false); // Hide the additional form after submission
    onSubmit({ ...bookingDetails, ...additionalDetails });
  };

  const handleFormSubmit1 = (additionalDetails) => {
    setShowPrimaryGuestButton(true); // Show the Primary Guest Name button when additional form is submitted
    setShowPGForm(false); // Hide the additional form after submission
    onSubmit({ ...bookingDetails, ...additionalDetails });
  };

  const handleCancelSubmit = (additionalDetails) => {
    setShowGuestButton(true);
    setShowAdditionalForm(false);
  };

  const handleCancelSubmit1 = (additionalDetails) => {
    setShowPrimaryGuestButton(true); 
    setShowPGForm(false); 
  };

  return (
    <Layout>
      <div className="container">
        <h2>Add Booking</h2>
        <form className="form" onSubmit={handleSubmit}>
        <label>
        Primary Guest Name:
        {showPrimaryGuestButton && (
          <button type="button" onClick={handleButtonClick1}>
            {bookingDetails.primaryGuest || 'Enter Primary Guest Name'}
          </button>
        )}
        </label>

      {showPGForm && (
        <AdditionalDetailsForm onSubmit={handleFormSubmit1} onCancel={handleCancelSubmit1} />
      )}
      
      <label>
        Guest Names:
        {showGuestButton && ( <button type="button" onClick={handleButtonClick}>
          {bookingDetails.guestNames || 'Enter Guest Names'}
        </button> )}
      </label>

      {showAdditionalForm && (
        <AdditionalDetailsForm onSubmit={handleFormSubmit} onCancel={handleCancelSubmit} />
      )}

      <label>
        Booking Date:
        <input type="date" name="bookingDate" value={bookingDetails.bookingDate} onChange={handleChange} />
      </label>
      <label>
        Check In Date:
        <input type="date" name="checkInDate" value={bookingDetails.checkInDate} onChange={handleChange} />
      </label>
      <label>
        Check Out Date:
        <input type="date" name="checkOutDate" value={bookingDetails.checkOutDate} onChange={handleChange} />
      </label>
      <label>
        Room Type:
        <select name="roomType" value={bookingDetails.roomType} onChange={handleChange}>
          <option value="deluxe">Deluxe</option>
          <option value="grand">Grand</option>
          <option value="suite">Suite</option>
          <option value="executive">Executive</option>
        </select>
      </label>
      <label>
        Number of Rooms:
        <input
          type="number"
          name="numberOfRooms"
          value={bookingDetails.numberOfRooms}
          onChange={handleChange}
          min="1"
        />  
      </label>
      <label>
        Room Numbers:
        <select name="roomNumber" value={bookingDetails.roomNumber} onChange={handleChange}>
          <option value="room101">Room 101</option>
          <option value="room102">Room 102</option>
          <option value="room103">Room 103</option>
        </select>
      </label>
      <button className="SubmitBtn" type="submit">Submit Booking</button>
    </form>
      </div>
    </Layout>
  );
};

export default AddBooking;