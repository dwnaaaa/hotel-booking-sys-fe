'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './AddBooking.css';
import ChooseRoomComponent from './ChooseRoomComponent';
import GuestDetailsComponent from './GuestDetailsComponent';
import ConfirmationComponent from './ConfirmationComponent';
import StepIndicator from './StepIndicator';

const AddBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    guestCount: '',
    checkInDate:'',
    checkOutDate:'',
    selectedRoomInfo:{},
    roomNumbers:{},
  });

  const handleNextStep = (details) => {
    // Check if a room is selected
    if (!details.selectedRoomInfo || Object.keys(details.selectedRoomInfo).length === 0) {
      // Room not selected, show an alert or perform any other validation logic
      alert("Please select a room before proceeding.");
      return;
    }
    // Room is selected, update booking details and proceed to the next step
    updateBookingDetails(details);
    setCurrentStep(2);
  };

  const [guestDetails, setGuestDetails] = useState({
    primaryGuest: {},
    extraGuests: []
  });

  const handleGuestDetailsChange = (primaryGuest, extraGuests) => {
    setGuestDetails({
      primaryGuest,
      extraGuests
    });
    console.log(bookingDetails)
    console.log(guestDetails)
  };

  const updateBookingDetails = (details) => {
    setBookingDetails((prev) => ({ ...prev, ...details }));
  };

  return (
    <Layout>
      <div className="add-booking-wrapper">
        <div className="container">
          <h1>Add Booking</h1>
          <StepIndicator currentStep={currentStep} />
          <hr />

          {currentStep === 1 && (
            <ChooseRoomComponent
              onNextStep={handleNextStep}
            />
          )}

          {currentStep === 2 && (
            <GuestDetailsComponent
              onPreviousStep={() => setCurrentStep(1)}
              onNextStep={() => setCurrentStep(3)}
              onBookingDetails={bookingDetails}
              onGuestDetailsChange={handleGuestDetailsChange}
            />
          )}
          {currentStep === 3 && (
            <ConfirmationComponent
              onPreviousStep={() => setCurrentStep(2)}
              onBookingDetails={bookingDetails}
              guestDetails={guestDetails}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AddBooking;
