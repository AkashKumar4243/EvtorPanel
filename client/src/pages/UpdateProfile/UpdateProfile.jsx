import React, { useState } from 'react';
import './UpdateProfile.css'; 


const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    userName: 'Sunil Sharma',
    vehicleNumber: 'Rj 14 9354',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', profile);
  };

  return (
    <div className="update-profile">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Name
          <input
            type="text"
            name="userName"
            value={profile.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Vehicle Number
          <input
            type="text"
            name="vehicleNumber"
            value={profile.vehicleNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Mobile Number
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter mobile number"
            value={profile.mobileNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UpdateProfile;