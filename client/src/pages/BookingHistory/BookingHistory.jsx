import React, { useState } from 'react';
import './BookingHistory.css'; // Ensure this path is correct

const BookingHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('All');

  const bookings = [
    { id: 1, station: 'Advant Dc Charging Station', address: 'Raja Park, Jaipur', bookingId: 345, date: '07 Aug 2023', rupees: 86, status: 'Processing' },
    { id: 2, station: 'Advant Dc Charging Station', address: 'Raja Park, Jaipur', bookingId: 545, date: '08 Aug 2023', rupees: 95, status: 'Cancel' },
    { id: 3, station: 'Advant Dc Charging Station', address: 'Raja Park, Jaipur', bookingId: 345, date: '09 Aug 2023', rupees: 10, status: 'Complete' },
    { id: 4, station: 'Advant Dc Charging Station', address: 'Raja Park, Jaipur', bookingId: 345, date: '07 Aug 2023', rupees: 200, status: 'Processing' },
    { id: 5, station: 'Advant Dc Charging Station', address: 'Raja Park, Jaipur', bookingId: 545, date: '08 Aug 2023', rupees: 500, status: 'Cancel' }
  ];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  const filteredBookings = bookings.filter(booking => {
    return (
      (booking.station.toLowerCase().includes(searchTerm.toLowerCase()) || booking.address.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (date === '' || booking.date.includes(date)) &&
      (status === 'All' || booking.status === status)
    );
  });

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
        <button className="submit-button">Submit</button>
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
          {filteredBookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.station}</td>
              <td>{booking.address}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingHistory;
