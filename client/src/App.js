import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Sidebar from './pages/Sidebar/Sidebar.js';
import Wallet from './pages/Wallet/Wallet.js';
import Profile from './pages/Profile/Profile.js';
import RFIDCard from './pages/RfidCard/RfidCard.js';
import AddRFIDCard from './pages/AddRfid/AddRfidCard.js';
import BookingHistory from './pages/BookingHistory/BookingHistory.jsx';
import BuyProducts from './pages/BuyProducts/BuyProducts.jsx';
import Chargers from './pages/Chargers/Chargers.jsx';
import Offer from './pages/Offer/Offer.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
// import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UpdateProfile from './pages/Profile/UpdateProfile.js';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        {/* <div className="main-content"> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rfid" element={<RFIDCard />} />
          <Route path="/add-rfid" element={<AddRFIDCard />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/buy-products" element={<BuyProducts />} />
          <Route path="/my-chargers" element={<Chargers />} />
          <Route path="/my-offer" element={<Offer />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
