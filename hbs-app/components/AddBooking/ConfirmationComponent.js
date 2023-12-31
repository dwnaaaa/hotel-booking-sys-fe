import React from 'react';
import './ConfirmationComponent.css';

const ConfirmationComponent = ({ onPreviousStep }) => {
    // Static booking details for demonstration
    const bookingDetails = {
        roomType: "Deluxe Suite",
        numberOfGuests: 2,
        guests: [
            {
                firstName: "John",
                middleName: "A.",
                lastName: "Doe",
                birthday: "1980-01-01",
                street: "123 Main St",
                city: "Anytown",
                state: "State",
                zipCode: "12345",
                contactNumber: "123-456-7890",
                emailAddress: "john.doe@example.com"
            },
            {
                firstName: "Jane",
                middleName: "B.",
                lastName: "Doe",
                birthday: "1985-02-02",
                street: "456 Elm St",
                city: "Othertown",
                state: "AnotherState",
                zipCode: "54321",
                contactNumber: "098-765-4321",
                emailAddress: "jane.doe@example.com"
            }
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
