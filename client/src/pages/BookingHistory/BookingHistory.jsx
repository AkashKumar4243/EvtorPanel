import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';
import './BookingHistory.css';

const BookingHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('All');
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const fetchBookingsHistory = async () => {
      try {
        const response = await api.get('/charger/dashboard/bookinghistory');
        console.log(response.data);
        setBookings(response.data);
        setFilteredBookings(response.data); 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchBookingsHistory();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  const filterBookings = () => {
    const result = bookings.filter((booking) => {
      const matchesSearchTerm = 
        booking.station?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.address?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDate = date === '' || booking.date.includes(date);
      const matchesStatus = status === 'All' || booking.status === status;

      console.log(`Booking ID: ${booking.bookingId}, Matches Search: ${matchesSearchTerm}, Matches Date: ${matchesDate}, Matches Status: ${matchesStatus}`);

      return matchesSearchTerm && matchesDate && matchesStatus;
    });

    setFilteredBookings(result);
  };

  return (
    <div className="booking-history">
      <h1>Booking History</h1>
      <p className="breadcrumb">Booking History</p>
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
          <option value="Processing">Processing</option>
          <option value="Complete">Complete</option>
          <option value="Cancel">Cancel</option>
        </select>
        <button className="submit-button" onClick={filterBookings}>Submit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Charging Station</th>
            <th>Charging Station Address</th>
            <th>Booking ID</th>
            <th>Date</th>
            <th>Rupees</th>
            <th>Status</th>
            <th>Invoice Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <tr key={booking.id || index}>
                <td>{index + 1}</td>
                <td>{booking.chargingStation}</td>
                <td>{booking.chargingStationAddress}</td>
                <td>{booking.bookingId}</td>
                <td>{booking.date}</td>
                <td>₹ {booking.rupees.toFixed(2)}</td>
                <td className={booking.status.toLowerCase()}>{booking.status}</td>
                <td>
                  <button className="invoice-button">
                    Invoice <i className="fa fa-download"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
