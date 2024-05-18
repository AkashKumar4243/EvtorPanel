import React, {useState,useEffect} from 'react';
import './Wallet.css'; 
import api from '../../api/api.js'

const Wallet = () => {

  const [Wallet ,setWallet] = useState("");

  useEffect (() => {
    const fetch = async () => {
      try {
        const response = await api.get('/users/dashboard/wallet');
        console.log(response.data)
        setWallet(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetch();
  },[])
  
  return (
    <div className="wallet">
      <h1>Wallet</h1>
      <p className="breadcrumb">Wallet</p>
      <div className="wallet-balance">
        <span>Total Balance</span>
        <strong>₹ {Wallet.totalBalance}</strong>
      </div>
      <div className="recharge">
        <input type="text" placeholder="Amount*" />
        <button>Recharge</button>
      </div>
    </div>
  );
}

export default Wallet;
