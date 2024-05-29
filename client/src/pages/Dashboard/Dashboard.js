import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import api from '../../api/api.js'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await api.get('/users/dashboard');
        console.log(data.data.data)
        localStorage.setItem("rfid", JSON.stringify(data.data.token));

        setDashboardData(data.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetch();
  }, [])




  return (
    <>

      {/* <div className="stats">
        <div className="stat">
          <span>Total Balance</span>
          <strong>₹ {dashboardData.totalBalance}</strong>
        </div>
        <div className="stat">
          <span>RFID Card Number</span>
          <strong>{dashboardData.rfid}</strong>
        </div>
        <div className="stat">
          <span>Total Booking</span>
          <strong>{dashboardData.totalBooking}</strong>
        </div>
        <div className="stat">
          <span>Total Buy Product</span>
          <strong>{dashboardData.totalBuyProduct}</strong>
        </div>
      </div> */}
      <section className='main-sec'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='dashboard-title'>Dashboard</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-4'>
            <div className="dashboard-card">
              <div className='dashboard-icon'>
                <span className='bi bi-wallet2'></span>
              </div>
              <div className='dashboard-content'>
                <h5>Total Balance</h5>
                <h3>₹ <span class="counter">{dashboardData.totalBalance}</span></h3>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-sm-4'>
            <div className="dashboard-card">
              <div className='dashboard-icon'>
                <span className='bi bi-credit-card'></span>
              </div>
              <div className='dashboard-content'>
                <h5>RFID Card Number</h5>
                <h3><span class="counter">{dashboardData.rfid}</span></h3>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-sm-4'>
            <div className="dashboard-card">
              <div className='dashboard-icon'>
                <span className='bi bi-journal-bookmark'></span>
              </div>
              <div className='dashboard-content'>
                <h5>Total Booking</h5>
                <h3><span class="counter">{dashboardData.totalBooking}</span></h3>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-4'>
            <div className="dashboard-card">
              <div className='dashboard-icon'>
                <span className='bi bi-cart'></span>
              </div>
              <div className='dashboard-content'>
                <h5>Total Buy Product</h5>
                <h3><span class="counter">{dashboardData.totalBuyProduct}</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ >
  );
}

export default Dashboard;
