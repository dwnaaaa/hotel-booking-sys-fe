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
  });

  const [guestDetails, setGuestDetails] = useState({
    primaryGuest: {},
    extraGuests: []
  });

  const handleGuestDetailsChange = (primaryGuest, extraGuests) => {
    setGuestDetails({
      primaryGuest,
      extraGuests
    });
  };

  const updateBookingDetails = (details) => {
    setBookingDetails((prev) => ({ ...prev, ...details }));
  };

  const handleNextStep = (details) => {
    updateBookingDetails(details);
    setCurrentStep(2);
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
