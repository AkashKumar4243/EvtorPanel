import React, { useState } from 'react';
import './AddRfidCard.css'; 

const AddRFIDCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    vehicleNumber: '',
    phoneNumber: '',
    rfidNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Logic for sending OTP or submitting form
    console.log(formData);
  };

  return (
    <div className="add-rfid-card">
      <h1>Add RFID Card</h1>
      <p className="breadcrumb">Add RFID Card</p>
      <div className="form-container">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="vehicleNumber" 
          placeholder="Vehicle Number" 
          value={formData.vehicleNumber} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="phoneNumber" 
          placeholder="Phone Number" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="rfidNumber" 
          placeholder="RFID CARD Number" 
          value={formData.rfidNumber} 
          onChange={handleChange} 
        />
        <button className="send-otp-button" onClick={handleSubmit}>Send OTP</button>
      </div>
      <div className="card-image">
        <img src="path/to/rfid-card-image.png" alt="RFID Card" />
      </div>
    </div>
  );
}

export default AddRFIDCard;
