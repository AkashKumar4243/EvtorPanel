import React, { useState } from 'react';
import './BuyProducts.css'; // Ensure this path is correct
// import productImage from 'path/to/product-image.png'; // Update this path accordingly

const BuyProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('All');

  const products = [
    { id: 1, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 2, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 3, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 4, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 5, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 6, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 7, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
    { id: 8, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' }
  ];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (date === '' || product.date.includes(date)) &&
      (status === 'All' || product.status === status)
    );
  });

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
        <button className="submit-button">Submit</button>
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
              {/* <td>
                <img src={productImage} alt="Product" className="product-image" />
              </td> */}
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
