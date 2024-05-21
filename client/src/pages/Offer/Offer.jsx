import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';
import './Offer.css'; 

const Offer = () => {

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await api.get('/charger/dashboard/myoffer');
        console.log(response.data);
        setOffers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchOffers();
  }, []);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  return (
    <div className="offer">
      <h1>Your Offer</h1>
      <p className="breadcrumb">Dashboard / Offer</p>
      <div className="offer-list">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <h2>{offer.offerName}</h2>
            <p>{offer.description} <span className="read-more">Read more</span></p>
            <div className="offer-code">
              <span>{offer.code}</span>
              <button onClick={() => copyToClipboard(offer.code)} className="copy-button">📋</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
