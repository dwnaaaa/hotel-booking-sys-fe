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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const [showAdditionalForm, setShowAdditionalForm] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalForm(true);
  };

  const handleFormSubmit = (additionalDetails) => {
    setShowAdditionalForm(false); // Hide the additional form after submission
    onSubmit({ ...bookingDetails, ...additionalDetails });
  };

  return (
    <Layout>
      <div className="container">
        <h2>Add Booking</h2>
        <form className="form" onSubmit={handleSubmit}>
        <label>
        Primary Guest Name:
        <button type="button" onClick={handleButtonClick}>
          {bookingDetails.primaryGuest || 'Enter Primary Guest Name'}
        </button>
      </label>
      
      <label>
        Guest Names:
        <button type="button" onClick={handleButtonClick}>
          {bookingDetails.guestNames || 'Enter Guest Names'}
        </button>
      </label>

      {showAdditionalForm && (
        <AdditionalDetailsForm onSubmit={handleFormSubmit} onCancel={() => setShowAdditionalForm(false)} />
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
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          {/* Add other room types as needed */}
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
      <button className="SubmitBtn" type="submit">Submit Booking</button>
    </form>
      </div>
    </Layout>
  );
};

export default AddBooking;