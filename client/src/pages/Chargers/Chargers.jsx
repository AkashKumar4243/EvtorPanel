import React from 'react';
import './Chargers.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import  ChargerImg from '../../assets/images/charger-img.png'

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
    <>
      {/* <h1>Chargers</h1>
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
      </div> */}
      <section className='main-sec'>
        <div className='row'>
          <div className='col-lg-12'>
          <h2 className='dashboard-title'>Chargers</h2>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Chargers
                </li>
              </ol>
            </nav>
          </div>
          {chargers.map((charger) => (
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='cards charger-card' key={charger.id}>
              <div className='row'>
                <div className='col-lg-3 col-md-12'>
                  <div className='charger-card-img'>
                    <img src={ChargerImg} alt=''/>
                  </div>
                </div>
                <div className='col-lg-9 col-md-12'>
                  <div className='charger-card-content'>
                  <h4>Athes Grid Charging point (ELE...</h4>
                  <p className='rating'>
                  {Array.from({ length: charger.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span> // Star symbol
                ))}
                {charger.rating < 5 && <span>&#9734;</span>} 
                <span> ({charger.reviews})</span>
                  </p>
                  <p className='add mb-0'>
                  53/102, Raghuvar Marg, VT Rd, Mansarovar, Jaipur, Rajasthan 302020
                  </p>
                  <p class="mb-0">Last visited Date : 08-04-2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
   ))}
        </div>
      </section>
    </>
  );
}

export default Chargers;
