import React, { useState, useEffect } from 'react';
import './BuyProducts.css';
import api from '../../api/api.js';
import defaultImage from "../../assets/images/defaultProfile.jpg"

const BuyProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('All');
  const [buyProducts, setBuyProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get('/charger/dashboard/buyproduct');
        console.log(response.data);
        setBuyProducts(response.data); 
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchBookings();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  // const filteredProducts = products.filter(product => {
  //   return (
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (date === '' || product.date.includes(date)) &&
  //     (status === 'All' || product.status === status)
  //   );
  // });

  const filterProducts = () => {
    const result = buyProducts.filter((product) => {
      const matchesSearchTerm = 
      product.station?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.address?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDate = date === '' || product.date.includes(date);
      const matchesStatus = status === 'All' || product.status === status;

      console.log(`Booking ID: ${product.productId}, Matches Search: ${matchesSearchTerm}, Matches Date: ${matchesDate}, Matches Status: ${matchesStatus}`);

      return matchesSearchTerm && matchesDate && matchesStatus;
    });

    setFilteredProducts(result);
  };

  return (
    <div className="buy-products">
      <h1>Buy Products</h1>
      <p className="breadcrumb">Dashboard / Buy Products</p>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={handleDateChange} 
        />
        <select 
          value={status} 
          onChange={handleStatusChange}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Sold Out">Sold Out</option>
        </select>
        <button className="submit-button" onClick={filterProducts}>Submit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Product Details</th>
            <th>Invoice Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              {<img src={defaultImage} alt="Profile" className="profile-image" />}
              <td>{product.name}</td>
              <td>{product.productId}</td>
              <td>{product.date}</td>
              <td>₹ {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
              <td>
                <button className="details-button">
                  Download Pdf <i className="fa fa-file-pdf"></i>
                </button>
              </td>
              <td>
                <button className="invoice-button">
                  Invoice <i className="fa fa-download"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BuyProducts;
