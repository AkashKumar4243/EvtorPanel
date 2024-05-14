import React from 'react';
import './Chargers.css'; // Ensure this path is correct

const Chargers = () => {
  const chargers = [
    { id: 1, name: 'Athes Grid Charging point (ELE)', address: '53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020', lastVisited: '08-04-2024', rating: 4, reviews: 20 },
    { id: 2, name: 'Athes Grid Charging point (ELE)', address: '53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020', lastVisited: '08-04-2024', rating: 4, reviews: 20 },
    { id: 3, name: 'Athes Grid Charging point (ELE)', address: '53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020', lastVisited: '08-04-2024', rating: 4, reviews: 20 },
    { id: 4, name: 'Athes Grid Charging point (ELE)', address: '53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020', lastVisited: '08-04-2024', rating: 4, reviews: 20 },
    { id: 5, name: 'Athes Grid Charging point (ELE)', address: '53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020', lastVisited: '08-04-2024', rating: 4, reviews: 20 },
    { id: 6, name: 'Athes Grid Charging point (ELE)', address: '53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020', lastVisited: '08-04-2024', rating: 4, reviews: 20 }
  ];

  return (
    <div className="chargers">
      <h1>Chargers</h1>
      <p className="breadcrumb">Dashboard / Near chargers</p>
      <div className="charger-list">
        {chargers.map((charger) => (
          <div className="charger-card" key={charger.id}>
            <div className="charger-details">
              <h2>{charger.name}</h2>
              <div className="charger-rating">
                {Array.from({ length: charger.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span> // Star symbol
                ))}
                {charger.rating < 5 && <span>&#9734;</span>} // Empty star symbol
                <span> ({charger.reviews})</span>
              </div>
              <p>{charger.address}</p>
              <p>Last visited Date: {charger.lastVisited}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chargers;
