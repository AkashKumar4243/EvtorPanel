import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/images/logo.png'

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="logo">EVtor</div>
      <ul>
        <li onClick={() => navigate('/')}>Dashboard</li>
        <li onClick={() => navigate('/wallet')}>Wallet</li>
        <li onClick={() => navigate('/profile')}>Profile</li>
        <li onClick={() => navigate('/rfid')}>RFID</li>
        <li onClick={() => navigate('/add-rfid')}>Add RFID</li>
        <li onClick={() => navigate('/booking-history')}>Booking History</li>
        <li onClick={() => navigate('/buy-products')}>Buy Products</li>
        <li onClick={() => navigate('/my-chargers')}>My Chargers</li>
        <li onClick={() => navigate('/my-offer')}>My Offer</li>
        <li onClick={() => navigate('/complain')}>Complain</li>
        <li onClick={() => navigate('/contact-us')}>Contact Us</li>
      </ul> */}
      <div className='sidebar'>
        <div className='dashbord-logo'>
          <Link to="/">< img src={logo} alt="" /></Link>
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link className='nav-link' to="/"><i className="bi bi-grid me-2"></i>Dashboard</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/wallet"><i className="bi bi-wallet me-2"></i>Wallet</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/profile"><i className="bi bi-person me-2"></i>Profile</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/rfid"><i className="bi bi-credit-card me-2"></i>RFID</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/add-rfid"><i className="bi bi-credit-card me-2"></i>Add RFID</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/booking-history"><i className="bi bi-clock-history me-2"></i>Booking History</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/buy-products"><i className="bi bi-cart me-2"></i>Buy Products</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/my-chargers"><i className="bi bi-lightning me-2"></i>My Chargers</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/my-offer"><i className="bi bi-percent me-2"></i>My Offer</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/complain"><i className="bi bi-file-text me-2"></i>Complain</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/contact-us"><i className="bi bi-file-earmark-person me-2"></i>Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
