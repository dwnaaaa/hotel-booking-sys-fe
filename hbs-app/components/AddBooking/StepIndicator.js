import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css';

const StepIndicator = ({ currentStep }) => {
  const steps = ['Choose Room & Guests', 'Guest Details', 'Confirmation'];

  return (
    <div className="step-indicator-container">
      {steps.map((step, index) => (
        <div key={index} className={`step-container ${index < currentStep ? 'active-line' : ''}`}>
          <div className={`step ${currentStep === index + 1 ? 'active-step' : ''}`}>
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{step}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired
};

export default StepIndicator;
