import React, { useState, useRef } from 'react';
import './GuestDetailsComponent.css';

const initialGuest = {
  firstName: '',
  middleName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  birthday: '',
  contactNumber: '',
  emailAddress: ''
};

const GuestDetailsComponent = ({ onPreviousStep, onNextStep, onBookingDetails, onGuestDetailsChange }) => {

  const formRef = useRef(null);
  
  const [primaryGuest, setPrimaryGuest] = useState({ ...initialGuest });
  const [extraGuests, setExtraGuests] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [guestsPerPage, setGuestsPerPage] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');


  // const handleSubmit = (e) => {
  //   // Check if the required fields are filled for the primary guest
  //   if (!primaryGuest.firstName || !primaryGuest.middleName || !primaryGuest.lastName || !primaryGuest.birthday) {
  //     e.preventDefault(); // Prevent the form from submitting
  //     alert('Please fill in all required fields for the primary guest.');
  //     return;
  //   }
  
  //   // Check if there are any extra guests and the guest count is greater than 1
  //   if (onBookingDetails.guestCount > 1 && extraGuests.length > 0) {
  //     // Check if the required fields are filled for each extra guest
  //     for (let i = 0; i < extraGuests.length; i++) {
  //       const extraGuest = extraGuests[i];
  
  //       if (!extraGuest.firstName || !extraGuest.middleName || !extraGuest.lastName || !extraGuest.birthday) {
  //         e.preventDefault(); // Prevent the form from submitting
  //         alert(`Please fill in all required fields for Extra Guest ${i + 1}.`);
  //         return;
  //       }
  //     }
  //   }
  
  //   // Continue with the form submission logic or any other actions
  //   onNextStep();
  // };
  
  
const handleSubmit = (e) => {
  // Check if any required fields are empty for the primary guest
  if (!primaryGuest.firstName || !primaryGuest.middleName || !primaryGuest.lastName || !primaryGuest.birthday || !primaryGuest.contactNumber || !primaryGuest.emailAddress || !primaryGuest.street || !primaryGuest.city || !primaryGuest.state || !primaryGuest.zipCode) {
    e.preventDefault(); // Prevent the form from submitting
    alert('Please fill in all required fields for the primary guest.');
    return;
  }

  // Check if there are any extra guests and the guest count is greater than 1
  if (onBookingDetails.guestCount > 1 && (extraGuests.length === 0 || extraGuests.some(guest => !guest.firstName || !guest.middleName || !guest.lastName || !guest.birthday))) {
    e.preventDefault(); // Prevent the form from submitting
    alert('Please fill in all required fields for extra guests.');
    return;
  }

  // Continue with the form submission logic or any other actions
  onNextStep();
};

  

  const handlePrimaryGuestChange = (event) => {
    setPrimaryGuest((prevPrimaryGuest) => {
      const updatedPrimaryGuest = { ...prevPrimaryGuest, [event.target.name]: event.target.value };
      onGuestDetailsChange(updatedPrimaryGuest, extraGuests);
      return updatedPrimaryGuest;
    });
  };
  

  const handleExtraGuestChange = (index, event) => {
    setExtraGuests((prevExtraGuests) => {
      const updatedExtraGuests = [...prevExtraGuests];
      updatedExtraGuests[index] = { ...updatedExtraGuests[index], [event.target.name]: event.target.value };
      onGuestDetailsChange(primaryGuest, updatedExtraGuests);
      return updatedExtraGuests;
    });
  };
  
  
  const renderGuestForms = () => {
    const guestForms = [];
  
    const startIdx = currentPage * guestsPerPage; 
    const endIdx = startIdx + guestsPerPage;
  
    for (let i = startIdx; i < endIdx && i < onBookingDetails.guestCount-1; i++) {
      guestForms.push(renderGuestForm(extraGuests[i] || initialGuest, i));
    }
  
    return guestForms;
  };
  
  const renderGuestForm = (guest, index, isPrimary = false) => (
    <form key={isPrimary ? 'primary' : index} className="guest-form">
      <h2>{isPrimary ? 'Primary Guest' : `Extra Guest ${index + 1}`}</h2>

      <div>
        <label>Contact Information</label>
        <div className="inline-fields">
        <input
  className="guest-details-input"
  type="text"
  name="firstName"
  placeholder="First Name"
  value={guest.firstName}
  onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
  required
/>

<input
  className="guest-details-input"
  type="text"
  name="middleName"
  placeholder="Middle Name"
  value={guest.middleName}
  onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
  required
/>

<input
  className="guest-details-input"
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={guest.lastName}
  onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
/>
</div>
    
      </div>
      

    <div className="inline-fields">
    <input
        className="guest-details-input"
        type="date"
        name="birthday"
        placeholder="Birthday"
        value={guest.birthday}
        onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
        required
      />
      <input
        className="guest-details-input"
        type="tel"
        name="contactNumber"
        placeholder="Contact Number"
        value={guest.contactNumber}
        onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
      />
    </div>

        
    <input
        className="guest-details-input"
        type="email"
        name="emailAddress"
        placeholder="Email Address"
        value={guest.emailAddress}
        onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
      />

<div>

<label>Address</label>
<div className="inline-fields">
    <input
      className="guest-details-input"
      type="text"
      name="street"
      placeholder="Street"
      value={guest.street}
      onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
    />
    <input
      className="guest-details-input"
      type="text"
      name="city"
      placeholder="City"
      value={guest.city}
      onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
    />

    </div>
    <div className="inline-fields">
    <input
      className="guest-details-input"
      type="text"
      name="state"
      placeholder="State"
      value={guest.state}
      onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
    />
    <input
      className="guest-details-input"
      type="text"
      name="zipCode"
      placeholder="Zip Code"
      value={guest.zipCode}
      onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
    />

    </div>
  </div>

    </form>
  );

  const renderPaginationButtons = () => {
    const buttons = [];
    const totalPages = onBookingDetails.guestCount-1;
  
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i + 1}
        </button>
      );
    }
  
    return buttons;
  };

  const ValidateForm = () => {
    // Check if the primary guest's required fields are filled
    if (!primaryGuest.firstName || !primaryGuest.middleName || !primaryGuest.lastName || !primaryGuest.birthday || !primaryGuest.contactNumber || !primaryGuest.emailAddress || !primaryGuest.street || !primaryGuest.city || !primaryGuest.state || !primaryGuest.zipCode) {
      alert('Please fill in all required fields for the primary guest.');
      return;
    }

    for (let i = 0; i < extraGuests.length; i++) {
      const extraGuest = extraGuests[i];

      if (!extraGuest.firstName || !extraGuest.middleName || !extraGuest.lastName || !extraGuest.birthday) {
        alert(`Please fill in all required fields for Extra Guest ${i + 1}.`);
        return;
      }
    }

    // If all checks pass, proceed to the next step
    onNextStep();
  };
  
  const validateField = (value, fieldName) => {
    if (!value) {
      alert(`Please fill in the required field: ${fieldName}.`);
      return false;
    }
    return true;
  };
  
  

  return (
    <div>
      <h3>Guest Details</h3>
      {renderGuestForm(primaryGuest, 0, true)}

      <hr />

      {renderGuestForms()}
      
      <div className="pagination-container">
        {renderPaginationButtons()}
      </div>

      <div className="button-container">

      <button onClick={onPreviousStep} className="button previous">
      <svg viewBox="0 0 24 24" class="icon">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
      </button>

      <button onClick={handleSubmit} className="button next">
      <svg viewBox="0 0 24 24" class="icon">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
      </svg>
      </button>

      </div>  
    </div>
  );
};

export default GuestDetailsComponent;