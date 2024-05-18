import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import api from '../../api/api.js'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});

  useEffect (() => {
    const fetch = async () => {
      try {
        const response = await api.get('/users/dashboard');
        console.log(response.data)
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetch();
  },[])




  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
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
      </div>
    </div>
  );
}

export default Dashboard;
