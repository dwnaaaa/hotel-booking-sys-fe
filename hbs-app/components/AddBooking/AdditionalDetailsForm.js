// AdditionalDetailsForm.js
import React, { useState } from 'react';
import './AdditionalDetailsForm.css';

const AdditionalDetailsForm = ({ onSubmit, onCancel }) => {
  const [additionalDetails, setAdditionalDetails] = useState({
    name: '',
    birthday: '',
    address: '',
    contactNumber: '',
    emailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(additionalDetails);
  };

  return (
    <form className="additionalForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={additionalDetails.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          name="birthday"
          value={additionalDetails.birthday}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={additionalDetails.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact Number:
        <input
          type="tel"
          name="contactNumber"
          value={additionalDetails.contactNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          name="emailAddress"
          value={additionalDetails.emailAddress}
          onChange={handleChange}
        />
      </label>
      <div className="buttonContainer">
        <button type="submit">Submit Additional Details</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AdditionalDetailsForm;
