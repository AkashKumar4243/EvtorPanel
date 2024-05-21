import React, { useState } from 'react';
import api from '../../api/api.js'
import './AddRfidCard.css'; 

const AddRFIDCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    vehicleNumber: '',
    mobileNumber: '',
    rfidNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/rfidcard/dashboard/rfid/addcard', formData); // Use the Axios instance for POST request
      // setResponse(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error posting data: ', error);
    }
    setFormData({ 
      name : "",
      mobileNumber : '',
      rfidNumber : "",
      vehicleNumber : "",
     });
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
          name="mobileNumber" 
          placeholder="Phone Number" 
          value={formData.mobileNumber} 
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
