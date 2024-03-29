import React from 'react';
import './ConfirmationComponent.css';

const ConfirmationComponent = ({ onPreviousStep, onBookingDetails, guestDetails }) => {

    const formatDate = (date) => {
        return date ? date.toISOString().split('T')[0] : null;
    };
    
    const bookingDetails = {
        bookingDate: formatDate(new Date()),
        checkInDate: formatDate(onBookingDetails.checkInDate),
        checkOutDate: formatDate(onBookingDetails.checkOutDate),
        roomType: onBookingDetails.selectedRoomInfo.roomType,
        roomTypeName: onBookingDetails.selectedRoomInfo.roomTypeName,
        roomQuantity: onBookingDetails.selectedRoomInfo.roomQuantity,
        numberOfGuests: onBookingDetails.guestCount,
        roomNumbers: onBookingDetails.roomNumbers,
        guests: [
            {
                ...guestDetails.primaryGuest,
            },
            ...guestDetails.extraGuests.map((guest, index) => ({
                ...guest,
            })),
        ],
    };
    

    //Pass information to backend
    const handleConfirmBooking = async () => {
        try {
            const primaryGuest = bookingDetails.guests[0];
            
    
            await addGuestDetails();
    
            const primaryGuestId = await getPrimaryGuestIdByName(primaryGuest);
    
            if (primaryGuestId) {
                console.log(primaryGuestId);
                await addBookingDetails(primaryGuestId);
                const brnId = await getLastBRN();
                console.log(brnId.brn)
                console.log(bookingDetails.roomNumbers)
                updateBookedBRN(brnId.brn, bookingDetails.roomNumbers)

                const guestIDs = await getAllGuestIdByName(bookingDetails.guests);
                console.log(guestIDs)
                addGuestToBRNGuest(guestIDs, brnId.brn);
    
                window.location.href = '/dashboard';
            } else {
                console.error('Primary guest ID not found.');
                alert(`Booking confirmation failed`);
            }
        } 
        catch (error) {
            console.error('Error confirming booking:', error);
            alert(`Booking confirmation failed`); 
        }
    };
    
    const addGuestDetails = async () => {
        try {
            const formattedGuestData = bookingDetails.guests.map(guest => ({
                first_name: guest.firstName,
                middle_name: guest.middleName,
                last_name: guest.lastName,
                birthday: guest.birthday,
                street: guest.street,
                city: guest.city,
                state: guest.state,
                zip_code: guest.zipCode,
                contact_no: guest.contactNumber,
                email_add: guest.emailAddress,
            }));
    
            const response = await fetch('http://localhost:8080/hbs/guest/add-many', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedGuestData),
            });

            console.log('Formatted Guest Data:', formattedGuestData);
    
            if (response.ok) {
                console.log('Guest details added to the database.');
            } else {
                console.error('Failed to add guest details to the database.');
            }
        } catch (error) {
            console.error('Error adding guest details:', error);
        }
    };    

    const getPrimaryGuestIdByName = async (guest) => {
        try {
            const response = await fetch('http://localhost:8080/hbs/guest/id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: guest.firstName,
                    middle_name: guest.middleName,
                    last_name: guest.lastName,
                }),
            });
    
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                console.error('Failed to retrieve primary guest ID:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Error retrieving primary guest ID:', error);
            return null;
        }
    };

    const getAllGuestIdByName = async (guests) => {
        try {
            const requestData = guests.map(guest => ({
                first_name: guest.firstName,
                middle_name: guest.middleName,
                last_name: guest.lastName,
            }));

            console.log(requestData)
    
            const response = await fetch('http://localhost:8080/hbs/guest/ids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log(result)
                return result;
            } else {
                console.error('Failed to retrieve primary guest ID:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Error retrieving primary guest ID:', error);
            return null;
        }
    };

    const getLastBRN = async (primaryGuestId) => {
        try {
            const response = await fetch(`http://localhost:8080/hbs/booking/lastbrn`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                console.error('Failed to retrieve BRN:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Error retrieving BRN:', error);
            return null;
        }
    };    

    const addBookingDetails = async (primaryGuestId) => {
        try {
            const bookingData = {
                primary_guest_id: primaryGuestId,
                booking_date: bookingDetails.bookingDate,
                check_in_date: bookingDetails.checkInDate,
                check_out_date: bookingDetails.checkOutDate, 
                room_type: bookingDetails.roomType, 
                no_of_rooms: bookingDetails.roomQuantity,
            };
    
            const response = await fetch('http://localhost:8080/hbs/booking/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });
    
            if (response.ok) {
                console.log('Booking details added to the BRN table.');
            } else {
                console.error('Failed to add booking details to the BRN table.');
            }
        } catch (error) {
            console.error('Error adding booking details to BRN table:', error);
        }
    };

    const updateBookedBRN = async (brn, updateVacancyData) => {
        try {
            const formattedRoomNumbersData = {
                "room_numbers": updateVacancyData,
            };
            const response = await fetch(`http://localhost:8080/hbs/room/update-booked-brn/${brn}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedRoomNumbersData),
            });
    
            if (response.ok) {
                console.log('Update successful:');
            } else {
                console.error('Failed to update BRN:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating BRN:', error);
        }
    };

    const addGuestToBRNGuest = async (GuestIds, brnId) => {
        try {
            const brnGuestDataArray = GuestIds.map(guestId => ({
                "brn": brnId,
                "guest_id": guestId,
            }));
    
            const response = await fetch('http://localhost:8080/hbs/brn-guest/add-many', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(brnGuestDataArray),
            });
    
            if (response.ok) {
                console.log('Guests added to BRN guest table.');
            } else {
                console.error('Failed to add guests to BRN guest table.');
            }
        } catch (error) {
            console.error('Error adding guests to BRN guest table:', error);
        }
    };      
    
    return (
        <div>
        <div className="confirmation-wrapper">
        <div className="confirmation-container">
            <h3>Booking Confirmation</h3>
            <div className="booking-summary">
                <h2>Room Details</h2>
                <p><strong>Number of Guests:</strong> {bookingDetails.numberOfGuests}</p>
                <p><strong>Check In Date:</strong> {bookingDetails.checkInDate}</p>
                <p><strong>Check Out Date:</strong> {bookingDetails.checkOutDate}</p>
                <p><strong>Room Type:</strong> {bookingDetails.roomTypeName}</p>
                <p><strong>Room Numbers:</strong> {bookingDetails.roomNumbers.join(',')}</p>
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

                <button onClick={handleConfirmBooking} className="confirm-booking-button">
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default ConfirmationComponent;
