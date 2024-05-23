import React, { useState } from 'react';
import './AddRfidCard.css';
import api from '../../api/api.js'
import rfidcard from '../../assets/images/rfid-card.png'
import { Link } from 'react-router-dom';

const AddRFIDCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    vehicleNumber: '',
    mobileNumber: '',
    rfidNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await api.post('/rfidcard/dashboard/rfid/addcard', formData);
          // setResponse(response.data);
          // console.log(response);
        } catch (error) {
          console.error('Error posting data: ', error);
        }
        setFormData({ 
          name : "",
          mobileNumber : '',
          rfidNumber : "",
          vehicleNumber : "",
         });
      };
    

  return (
    <>
      {/* <h1>Add RFID Card</h1>
      <p className="breadcrumb">Add RFID Card</p>
      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rfidNumber"
          placeholder="RFID CARD Number"
          value={formData.rfidNumber}
          onChange={handleChange}
        />
        <button className="send-otp-button" onClick={handleSubmit}>Send OTP</button>
      </div>
      <div className="card-image">
        <img src="path/to/rfid-card-image.png" alt="RFID Card" />
      </div> */}
      <section className='main-sec'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='dashboard-title'>Add RFID Card</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add RFID Card
                </li>
              </ol>
            </nav>
          </div>
          <div className='col-lg-12'>
            <div className='cards add-rfid'>
              <div className='row align-items-center'>
                <div className='col-lg-7 col-md-12 col-sm-12'>
                  <div className='profile-frm-bx mb-5'>
                    <input className='form-control'
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='profile-frm-bx mb-5'>
                    <input className='form-control'
                      type="text"
                      name="vehicleNumber"
                      placeholder="Vehicle Number"
                      value={formData.vehicleNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='profile-frm-bx mb-5'>
                    <input className='form-control'
                      type="text"
                      name="mobileNumber"
                      placeholder="Phone Number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='profile-frm-bx mb-5'>
                    <input className='form-control'
                      type="text"
                      name="rfidNumber"
                      placeholder="RFID CARD Number"
                      value={formData.rfidNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='text-center'>
                    <button className="send-otp-button thm-btn w-100" onClick={handleSubmit}>Send OTP</button>
                  </div>
                </div>
                <div className='col-lg-5 d-lg-block d-none'>
                  <img src={rfidcard} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddRFIDCard;

// import React, { useState } from 'react';
// import api from '../../api/api.js'
// import './AddRfidCard.css'; 

// const AddRFIDCard = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     vehicleNumber: '',
//     mobileNumber: '',
//     rfidNumber: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/rfidcard/dashboard/rfid/addcard', formData); // Use the Axios instance for POST request
//       // setResponse(response.data);
//       console.log(response);
//     } catch (error) {
//       console.error('Error posting data: ', error);
//     }
//     setFormData({ 
//       name : "",
//       mobileNumber : '',
//       rfidNumber : "",
//       vehicleNumber : "",
//      });
//   };

//   return (
//     <div className="add-rfid-card">
//       <h1>Add RFID Card</h1>
//       <p className="breadcrumb">Add RFID Card</p>
//       <div className="form-container">
//         <input 
//           type="text" 
//           name="name" 
//           placeholder="Name" 
//           value={formData.name} 
//           onChange={handleChange} 
//         />
//         <input 
//           type="text" 
//           name="vehicleNumber" 
//           placeholder="Vehicle Number" 
//           value={formData.vehicleNumber} 
//           onChange={handleChange} 
//         />
//         <input 
//           type="text" 
//           name="mobileNumber" 
//           placeholder="Phone Number" 
//           value={formData.mobileNumber} 
//           onChange={handleChange} 
//         />
//         <input 
//           type="text" 
//           name="rfidNumber" 
//           placeholder="RFID CARD Number" 
//           value={formData.rfidNumber} 
//           onChange={handleChange} 
//         />
//         <button className="send-otp-button" onClick={handleSubmit}>Send OTP</button>
//       </div>
//       <div className="card-image">
//         <img src="path/to/rfid-card-image.png" alt="RFID Card" />
//       </div>
//     </div>
//   );
// }

// export default AddRFIDCard;
