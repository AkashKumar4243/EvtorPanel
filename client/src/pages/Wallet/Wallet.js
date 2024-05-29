import React, { useState, useEffect } from 'react';
import './Wallet.css';
import api from '../../api/api.js'
import { Link } from 'react-router-dom';
import SuccessIcon from '../../assets/images/success-icon.png'

const Wallet = () => {

  const [Wallet, setWallet] = useState("");
  const [rechargeAmount, setRechargeAmount] = useState("");

  useEffect(() => {
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
  }, [])

    const rfidCardNumber = "RFID001";

  const handleRechargeChange = (event) => {
    setRechargeAmount(event.target.value);
  };


  const handleRechargeAmount = (e) => {
    e.preventDefault();
    const first = parseInt(rechargeAmount, 10);
    const second = parseInt(Wallet.totalBalance, 10)
    const balance = first + second
    const data = {
      rfidCardNumber,
      balance 
    }
    const resp = api.post('/users/dashboard/profile/updatebalance',data);
    
    console.log(resp)
  }

  const handleSuccess = () => {
    setRechargeAmount("");
    window.location.reload();
  }

  return (
    <>
      {/* <h1>Wallet</h1>
      <p className="breadcrumb">Wallet</p>
      <div className="wallet-balance">
        <span>Total Balance</span>
        <strong>₹ {Wallet.totalBalance}</strong>
      </div>
      <div className="recharge">
        <input type="text" placeholder="Amount*" />
        <button>Recharge</button>
      </div> */}

      <section className='main-sec'>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <h2 className='dashboard-title'>Wallet</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">Dashboard </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Wallet
                </li>
              </ol>
            </nav>
          </div>
          <div className='col-lg-12'>
            <div className='cards wallet-card'>
              <div className='wallet-balance'>
                <h5><i className="bi bi-wallet me-2"></i>Total Balance</h5>
                <h3>₹ {Wallet.totalBalance}</h3>
              </div>
              <div className='row'>
                <div className='col-lg-9 col-md-8 col-sm-7'>
                  <input type="text" className='form-control' placeholder="Amount*" value={rechargeAmount} onChange={handleRechargeChange}/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-5'>
                  <button className='thm-btn w-100' data-bs-toggle="modal" data-bs-target="#success" onClick={handleRechargeAmount}>Recharge</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="modal fade" id="success" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <h4>Successfully</h4>
              <img src={SuccessIcon} alt='' />
              <h3>₹ {rechargeAmount}</h3>
              <p>Added Successfully to your wallet </p>
              <button className='thm-btn w-100' data-bs-dismiss="modal" aria-label="Close" onClick={handleSuccess}>Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
