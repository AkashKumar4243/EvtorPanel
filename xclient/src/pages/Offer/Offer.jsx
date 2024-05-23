import React from 'react';
import './Offer.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

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
    <>
      {/* <h1>Your Offer</h1>
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
      </div> */}
      <section className='main-sec'>
        <div className='row'>
          <div className='col-lg-12'>
          <h2 className='dashboard-title'>Your Offer</h2>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Offer
                </li>
              </ol>
            </nav>
          </div>
          {offers.map((offer) => (
          <div className='col-lg-6 col-md-6'>
            <div className='cards offer-card'>
            <h3> <span class="bi bi-percent me-2"></span>{offer.title}</h3>
            <p>{offer.description} <Link className='rd-txt' to="">Read more</Link></p>
            <p className='mb-0'>
            <span>{offer.code}</span>
            <button onClick={() => copyToClipboard(offer.code)} className="copy-button"><i class="bi bi-copy"></i></button>
            </p>
            </div>
          </div>
 ))}
        </div>
        
      </section>
    </>
  );
}

export default Offer;
