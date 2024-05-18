import React, { useState,useEffect } from 'react';
import api from '../../api/api.js'
import defaultImage from "../../assets/images/defaultProfile.jpg"
import './RfidCard.css'; 


const RFIDCard = () => {
  const [tapPayAmount, setTapPayAmount] = useState(5000);

  const [rfid, setRfid] = useState({});

  useEffect (() => {
    const fetch = async () => {
      try {
        const response = await api.get('/rfidcard/dashboard/rfid');
        console.log(response.data)
        setRfid(response.data[0]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetch();
  },[])


  const handleSliderChange = (event) => {
    setTapPayAmount(event.target.value);
  };

  return (
    <div className="rfid-card">
      <h1>RFID Card</h1>
      <p className="breadcrumb">RFID Card</p>
      <div className="rfid-card-details">
        <div className="rfid-info">
          <img src={defaultImage} alt="Profile" className="profile-image" />
          <div className="rfid-details">
            <h2>{rfid.name}</h2>
            <p>Mobile Number: +91{rfid.mobileNumber}</p>
            <p>RFID Card Number: <strong>{rfid.rfidNumber}</strong></p>
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
