import React from 'react';
import './Offer.css'; // Ensure this path is correct

const Offer = () => {
  const offers = [
    { id: 1, title: '20 % OFF up to ₹500', description: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Est quod tempore neque aut, voluptatibus, dolorem eum...', code: 'XPJTJ8247' },
    { id: 2, title: '20 % OFF up to ₹500', description: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Est quod tempore neque aut, voluptatibus, dolorem eum...', code: 'XPJTJ8247' },
    { id: 3, title: '20 % OFF up to ₹500', description: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Est quod tempore neque aut, voluptatibus, dolorem eum...', code: 'XPJTJ8247' },
    { id: 4, title: '20 % OFF up to ₹500', description: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Est quod tempore neque aut, voluptatibus, dolorem eum...', code: 'XPJTJ8247' }
  ];

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
            <h2>{offer.title}</h2>
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
