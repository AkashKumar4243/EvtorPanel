import React , {useState, useEffect} from 'react';
import './Profile.css'; 
import api from '../../api/api.js'
import defaultImage from "../../assets/images/defaultProfile.jpg"


const Profile = () => {

  const [profileData, setProfileData] = useState({});

  useEffect (() => {
    const fetch = async () => {
      try {
        const response = await api.get('/users/dashboard/profile');
        console.log(response.data)
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetch();
  },[])

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p className="breadcrumb">Profile</p>
      <div className="profile-card">
        <div className="profile-info">
          <img src={defaultImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>{profileData.name}</h2>
            <p>Wallet: ₹ {profileData.totalBalance}</p>
            <p>Mobile Number: +91{profileData.mobileNumber}</p>
            <p>Vehicle Number: {profileData.vehicleNumber}</p>
            <p>RFID Card Number: {profileData.rfid}</p>
          </div>
        </div>
        <button className="update-button">Update Profile</button>
      </div>
    </div>
  );
}

export default Profile;
