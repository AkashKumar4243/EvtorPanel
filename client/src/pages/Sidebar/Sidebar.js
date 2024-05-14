import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">EVtor</div>
      <ul>
        <li onClick={() => navigate('/')}>Dashboard</li>
        <li onClick={() => navigate('/wallet')}>Wallet</li>
        <li onClick={() => navigate('/profile')}>Profile</li>
        <li onClick={() => navigate('/rfid')}>RFID</li>
        <li onClick={() => navigate('/add-rfid')}>Add RFID</li>
        <li onClick={() => navigate('/booking-history')}>Booking History</li>
        <li onClick={() => navigate('/buy-products')}>Buy Products</li>
        <li onClick={() => navigate('/my-chargers')}>My Chargers</li>
        <li onClick={() => navigate('/my-offer')}>My Offer</li>
        <li onClick={() => navigate('/complain')}>Complain</li>
        <li onClick={() => navigate('/contact-us')}>Contact Us</li>
      </ul>
    </div>
  );
}

export default Sidebar;
