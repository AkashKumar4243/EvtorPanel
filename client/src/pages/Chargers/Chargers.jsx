import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';
import './Chargers.css'; 

const Chargers = () => {

  const [chargers, setChargers] = useState([]);

  useEffect(() => {
    const fetchChargers = async () => {
      try {
        const response = await api.get('/charger/dashboard/mychargers');
        console.log(response.data);
        setChargers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchChargers();
  }, []);

  return (
    <div className="chargers">
      <h1>Chargers</h1>
      <p className="breadcrumb">Dashboard / Near chargers</p>
      <div className="charger-list">
        {chargers.map((charger) => (
          <div className="charger-card" key={charger.id}>
            <div className="charger-details">
              <h2>{charger.nameOfCharger}</h2>
              <div className="charger-rating">
                {Array.from({ length: charger.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span> // Star symbol
                ))}
                {charger.rating < 5 && <span>&#9734;</span>} 
                <span> ({charger.reviews})</span>
              </div>
              <p>{charger.address}</p>
              <p>Last visited Date: {charger.timeStamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chargers;
