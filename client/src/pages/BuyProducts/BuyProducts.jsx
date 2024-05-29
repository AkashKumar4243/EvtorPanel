import React, { useState, useEffect } from 'react';
import './BuyProducts.css';
import api from '../../api/api.js';
import { Link } from 'react-router-dom';
import productImage from '../../assets/images/product-img.png'; 

const BuyProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('All');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const products = [
  //   { id: 1, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 2, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 3, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 4, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 5, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 6, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 7, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' },
  //   { id: 8, name: 'PowerPulse 30', productId: 345, date: '07 Aug 2022', price: 2000, status: 'Available' }
  // ];

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get('/charger/dashboard/buyproduct');
        console.log(response.data);
        setProducts(response.data); 
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

  const filterProducts = () => {
    const result = products.filter((product) => {
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
    <>
      {/* <h1>Buy Products</h1>
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
              <td>
                <img src={productImage} alt="Product" className="product-image" />
              </td>
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
      </table> */}


      <section className='main-sec'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='dashboard-title'>Buy Products</h2>
          <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <Link href="#">Dashboard </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Buy Products
          </li>
          </ol>
          </nav>
          </div>
          <div className='col-lg-12'>
            <div className='cards'>
            <div className="filters row">
          <div className='col-lg-3 profile-frm-bx'>
          <input className='form-control'
          type="text" 
          placeholder="Search" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
          </div>
        <div className='col-lg-3 profile-frm-bx'>
        <input  className='form-control'
          type="date" 
          value={date} 
          onChange={handleDateChange} 
        />
        </div>
        <div className='col-lg-3 profile-frm-bx'>
        <select className='form-select'
          value={status} 
          onChange={handleStatusChange}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Sold Out">Sold Out</option>
        </select>
        </div>
        <div className='col-lg-3'>
        <button className="submit-button thm-btn w-100">Submit</button>
        </div>
      </div>
      <div className='table table-responsive cstm-table'>
      <table className='table table-bordered text-white'>
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
              <td>
                <span className='prdct-img'><img src={productImage} alt="Product" className="product-image" /></span>
              </td>
              <td>{product.productName}</td>
              <td>{product.productId}</td>
              <td>{product.date}</td>
              <td>₹ {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
              <td>
                <button className="details-button dwn-btn">
                  Download Pdf <i className="fa fa-file-pdf"></i>
                </button>
              </td>
              <td>
                <button className="invoice-button ">
                  Invoice <i className="fa fa-download"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyProducts;
