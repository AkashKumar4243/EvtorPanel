import React, { useState, useEffect } from 'react';
import api from '../../api/api.js'
import defaultImage from "../../assets/images/defaultProfile.jpg"
import './RfidCard.css';
import { Link } from 'react-router-dom';


const RFIDCard = () => {
  const [tapPayAmount, setTapPayAmount] = useState(5000);

  const [rfid, setRfid] = useState({});

  useEffect(() => {
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
  }, [])


  const handleSliderChange = (event) => {
    setTapPayAmount(event.target.value);
  };

  return (
    <>
      {/* <h1>RFID Card</h1>
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
      </div> */}
      <section className='main-sec'>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <h2 className='dashboard-title'>RFID Card</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  RFID Card
                </li>
              </ol>
            </nav>
          </div>
          <div className='col-lg-8 col-md-12 col-sm-12'>
            <div className='cards profile-card'>
              <div className='row align-items-center'>
                <div className='col-lg-8 col-md-8'>
                  <div className='profile-card-innr'>
                    <div className='profile-card-innr-img'>
                      <img src={defaultImage} alt="Profile" className="profile-image" />
                    </div>
                    <div className='profile-card-innr-cntnt'>
                      <h2>{rfid.name}</h2>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4'>
                  <div className='card-number'>
                    <p>RFID Card  Number</p>
                    <h4>{rfid.rfidNumber}</h4>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <p class="profile-txt">
                    <span>Mobile Number: +91<strong>{rfid.mobileNumber}</strong></span>
                    <span>RFID Card Number: <strong>{rfid.rfidNumber}</strong></span>
                  </p>
                  <div className='profile-btn'>
                    <button className="request-button thm-btn" data-bs-toggle="modal" data-bs-target="#request-card">Request new card</button>
                    <button className="block-button thm-btn rd-btn" data-bs-toggle="modal" data-bs-target="#block-card">Block card</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='cards card-control'>
              <h2 class="dashboard-title">Card Control</h2>
              <h4>Set tap & pay amount </h4>
              <input
                type="range"
                min="0"
                max="10000"
                value={tapPayAmount}
                onChange={handleSliderChange}
                className="slider form-range"
              />
              <div className="slider-value">
                {tapPayAmount}
              </div>
            </div>
          </div>
          <>
            {/* request-card-popup */}
            <div
              className="modal fade custom-modal"
              id="request-card"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                  <div className="modal-body">
                    <h4 className="dashboard-title text-center">Request new card</h4>
                    <form action="">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                      <div>
                        <button type="button" className="thm-btn w-100">
                          Request send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* block-popup */}
            <div
              className="modal fade custom-modal"
              id="block-card"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                  <div className="modal-body">
                    <span className="bi bi-ban block-icon" />
                    <h4 className="dashboard-title text-center">Block card</h4>
                    <form action="">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                      <div className="mb-5">
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Card block Reason"
                        />
                      </div>
                      <div>
                        <button type="button" className="thm-btn rd-btn w-100">
                          Request Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>

        </div>
      </section>
    </>
  );
}

export default RFIDCard;
