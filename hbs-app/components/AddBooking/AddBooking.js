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
    roomType: '',
    numberOfGuests: '',
    guestDetails: {},
    paymentInfo: {}
    // Add other necessary fields
  });

  const updateBookingDetails = (details) => {
    setBookingDetails(prev => ({ ...prev, ...details }));
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
            onNextStep={() => setCurrentStep(2)}
            onRoomSelectionChange={updateBookingDetails}
          />
        )}
        {currentStep === 2 && (
          <GuestDetailsComponent
            onPreviousStep={() => setCurrentStep(1)}
            onNextStep={() => setCurrentStep(3)}
            onGuestDetailsChange={updateBookingDetails}
          />
        )}
        {currentStep === 3 && (
          <ConfirmationComponent
            onPreviousStep={() => setCurrentStep(2)}
            bookingDetails={bookingDetails}
          />
        )}
      </div>


      </div>
      
    </Layout>
  );
};

export default AddBooking;
