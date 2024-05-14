import React from 'react';
import './Wallet.css'; 

const Wallet = () => {
  return (
    <div className="wallet">
      <h1>Wallet</h1>
      <p className="breadcrumb">Wallet</p>
      <div className="wallet-balance">
        <span>Total Balance</span>
        <strong>₹ 2,758</strong>
      </div>
      <div className="recharge">
        <input type="text" placeholder="Amount*" />
        <button>Recharge</button>
      </div>
    </div>
  );
}

export default Wallet;
