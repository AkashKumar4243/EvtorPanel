import React, { useState, useEffect } from 'react';
import './Wallet.css'; 
import api from '../../api/api.js';

const Wallet = () => {
  const [wallet, setWallet] = useState({});
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get('/users/dashboard/wallet');
        console.log(response.data);
        setWallet(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetch();
  }, []);

  const handleRechargeChange = (event) => {
    setRechargeAmount(event.target.value);
  };

  const handleRechargeClick = () => {
    // Here you would normally update the wallet balance with an API call
    // For now, we'll just show the success popup with the entered amount
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setRechargeAmount("");
  };

  return (
    <div className="wallet">
      <h1>Wallet</h1>
      <p className="breadcrumb">Wallet</p>
      <div className="wallet-balance">
        <span>Total Balance</span>
        <strong>₹ {wallet.totalBalance}</strong>
      </div>
      <div className="recharge">
        <input 
          type="text" 
          placeholder="Amount*" 
          value={rechargeAmount}
          onChange={handleRechargeChange}
        />
        <button onClick={handleRechargeClick}>Recharge</button>
      </div>
      {showSuccessPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-button" onClick={handleClosePopup}>&times;</button>
            <h2>SUCCESSFULLY</h2>
            <div className="success-icon">&#x2714;</div>
            <div className="amount">₹ {rechargeAmount}</div>
            <p>Added Successfully to your wallet</p>
            <button className="popup-button" onClick={handleClosePopup}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet