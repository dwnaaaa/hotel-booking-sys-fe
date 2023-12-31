import React, { useState } from 'react';
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

const GuestDetailsComponent = ({ onPreviousStep, onNextStep }) => {
  const [primaryGuest, setPrimaryGuest] = useState(initialGuest);
  const [extraGuests, setExtraGuests] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrimaryGuestChange = (event) => {
    setPrimaryGuest({ ...primaryGuest, [event.target.name]: event.target.value });
  };

  const handleExtraGuestChange = (index, event) => {
    const updatedExtraGuests = [...extraGuests];
    updatedExtraGuests[index] = { ...updatedExtraGuests[index], [event.target.name]: event.target.value };
    setExtraGuests(updatedExtraGuests);
  };

  const handleAddExtraGuest = () => {
    setExtraGuests([...extraGuests, initialGuest]);
  };

  const handleRemoveExtraGuest = (index) => {
    const updatedExtraGuests = extraGuests.filter((_, i) => i !== index);
    setExtraGuests(updatedExtraGuests);
    if (currentPage >= updatedExtraGuests.length && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderGuestForm = (guest, index, isPrimary = false) => (
    <div key={isPrimary ? 'primary' : index} className="guest-form">
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
      />
      <input
        className="guest-details-input"
        type="text"
        name="middleName"
        placeholder="Middle Name"
        value={guest.middleName}
        onChange={isPrimary ? handlePrimaryGuestChange : (e) => handleExtraGuestChange(index, e)}
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


      {!isPrimary && (
        <button type="button" onClick={() => handleRemoveExtraGuest(index)}>Remove Guest</button>
      )}
    </div>
  );

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 0; i < extraGuests.length; i++) {
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

  return (
    <div>
      <h3>Guest Details</h3>
      {renderGuestForm(primaryGuest, 0, true)}

      <hr />

      {extraGuests.length > 0 && renderGuestForm(extraGuests[currentPage], currentPage)}
      <div className="pagination-container">
        {renderPaginationButtons()}
      </div>
      <div className="button-container">
        <button onClick={handleAddExtraGuest}>Add Extra Guest</button>
      </div>
      <div className="button-container">

      <button onClick={onPreviousStep} className="button previous">
      <svg viewBox="0 0 24 24" class="icon">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
      </button>

      <button onClick={onNextStep} className="button next">
      <svg viewBox="0 0 24 24" class="icon">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
      </svg>
      </button>

      </div>  
    </div>
  );
};

export default GuestDetailsComponent;