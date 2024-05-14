import React from 'react';
import './Profile.css'; // Assume we have a CSS file for styling

const Profile = () => {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <p className="breadcrumb">Profile</p>
      <div className="profile-card">
        <div className="profile-info">
          <img src="path/to/profile-image.jpg" alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>SUNIL SHARMA</h2>
            <p>Wallet: ₹ 2,758</p>
            <p>Mobile Number: +919567838956</p>
            <p>Vehicle Number: RJ 14 9354</p>
            <p>RFID Card Number: 140414704</p>
          </div>
        </div>
        <button className="update-button">Update Profile</button>
      </div>
    </div>
  );
}

export default Profile;
