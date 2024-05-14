import React, { useState } from 'react';
import './RfidCard.css'; // Assume we have a CSS file for styling

const RFIDCard = () => {
  const [tapPayAmount, setTapPayAmount] = useState(5000);

  const handleSliderChange = (event) => {
    setTapPayAmount(event.target.value);
  };

  return (
    <div className="rfid-card">
      <h1>RFID Card</h1>
      <p className="breadcrumb">RFID Card</p>
      <div className="rfid-card-details">
        <div className="rfid-info">
          <img src="path/to/profile-image.jpg" alt="Profile" className="profile-image" />
          <div className="rfid-details">
            <h2>SUNIL SHARMA</h2>
            <p>Mobile Number: +919567838956</p>
            <p>RFID Card Number: <strong>140414704</strong></p>
            <button className="request-button">Request new card</button>
            <button className="block-button">Block card</button>
          </div>
        </div>
      </div>
      <div className="card-control">
        <h3>CARD CONTROL</h3>
        <p>Set tap & pay amount</p>
        <input 
          type="range" 
          min="0" 
          max="10000" 
          value={tapPayAmount} 
          onChange={handleSliderChange} 
          className="slider" 
        />
        <div className="slider-value">
          {tapPayAmount}
        </div>
      </div>
    </div>
  );
}

export default RFIDCard;
