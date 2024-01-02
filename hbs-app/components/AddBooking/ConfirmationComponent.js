import React from 'react';
import './ConfirmationComponent.css';

const ConfirmationComponent = ({ onPreviousStep, onBookingDetails, guestDetails }) => {

    const bookingDetails = {
        roomType: onBookingDetails.roomType,
        numberOfGuests: onBookingDetails.guestCount,
        guests: [
            {
                ...guestDetails.primaryGuest,
            },
                ...guestDetails.extraGuests.map((guest, index) => ({
                    ...guest,
            }))
        ]
    };

    return (
        <div>
<div className="confirmation-wrapper">
        <div className="confirmation-container">
            <h3>Booking Confirmation</h3>
            <div className="booking-summary">
                <h2>Room Details</h2>
                <p><strong>Room Type:</strong> {bookingDetails.roomType}</p>
                <p><strong>Number of Guests:</strong> {bookingDetails.numberOfGuests}</p>

                <h2>Guest Details</h2>
                {bookingDetails.guests.map((guest, index) => (
                    <div key={index} className="guest-details">
                        <p><strong>Name:</strong> {guest.firstName} {guest.middleName} {guest.lastName}</p>
                        <p><strong>Birthday:</strong> {guest.birthday}</p>
                        <p><strong>Address:</strong> {`${guest.street}, ${guest.city}, ${guest.state}, ${guest.zipCode}`}</p>
                        <p><strong>Contact Number:</strong> {guest.contactNumber}</p>
                        <p><strong>Email Address:</strong> {guest.emailAddress}</p>
                    </div>
                ))}
            </div>
                <div className="receipt-rip"></div>
            </div>
        </div>
        

            <div className="button-container">
                <button onClick={onPreviousStep} className="button previous">
                <svg viewBox="0 0 24 24" class="icon">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
                </button>

                <button className="confirm-booking-button">
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default ConfirmationComponent;
