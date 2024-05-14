import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import api from '../../api/api.js'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect (() => {
    const fetch = async () => {
      try {
        const response = await api.get('/users/dashboard');
        console.log(response)
        setDashboardData(response.data);
        console.log(dashboardData);
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
          <strong>₹ 2758</strong>
        </div>
        <div className="stat">
          <span>RFID Card Number</span>
          <strong>49849898</strong>
        </div>
        <div className="stat">
          <span>Total Booking</span>
          <strong>10</strong>
        </div>
        <div className="stat">
          <span>Total Buy Product</span>
          <strong>7</strong>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
