import React, { useState, useEffect } from 'react';
import './Profile.css';
import api from '../../api/api.js'
import defaultImage from "../../assets/images/defaultProfile.jpg"
import { Link } from 'react-router-dom';


const Profile = () => {

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
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
  }, [])

  return (
    <>
      {/* <h1>Profile</h1>
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
      </div> */}
      <section className='main-sec'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='dashboard-title'>Profile</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">Dashboard </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Profile
                </li>
              </ol>
            </nav>
          </div>
          <div className='col-lg-12'>
            <div className='cards profile-card'>
              <div className='row align-items-center'>
                <div className='col-lg-8 col-md-8 col-sm-6'>
                  <div className='profile-card-innr'>
                    <div className='profile-card-innr-img'>
                      <img src={defaultImage} alt="Profile" className="profile-image" />
                    </div>
                    <div className='profile-card-innr-cntnt'>
                      <h2>{profileData.name}</h2>
                      <p ><span className="bi bi-wallet me-2"></span>Wallet: ₹ {profileData.totalBalance}</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-6 text-end'>
                  <Link className='thm-btn' to="/update-profile">Update Profile</Link>
                </div>
                <div className='col-lg-12'>
                  <p className='profile-txt'>
                    <span>Mobile Number: +91{profileData.mobileNumber}</span>
                    <span>Vehicle Number: {profileData.vehicleNumber}</span>
                    <span>RFID Card Number: {profileData.rfid}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ >
  );
}

export default Profile;
