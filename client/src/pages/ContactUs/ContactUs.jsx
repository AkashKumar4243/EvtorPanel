import React, { useState } from 'react';
import './ContactUs.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Logic for submitting form
    console.log(formData);
  };

  return (
    <>
      {/* <h1>Contact Us</h1>
      <p className="breadcrumb">Dashboard / Contact us</p>
      <div className="contact-container">
        <div className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="mobileNumber" 
            placeholder="Mobile Number" 
            value={formData.mobileNumber} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email Id" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
          />
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="contact-info">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5124149605723!2d75.8312117754731!3d26.823071073010634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2d839bfe9ad%3A0x4e64b6f4c1242ff0!2sRIICO%20Industrial%20Area%2C%20Sitapura%2C%20Jaipur%2C%20Rajasthan%20302022%2C%20India!5e0!3m2!1sen!2sus!4v1658757624321!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
          <div className="address">
            <h2>Address</h2>
            <p>G 845 RIICO Industrial Area | Sitapura | Jaipur</p>
            <h2>Contact No.</h2>
            <p>+91 830 600 6901</p>
          </div>
        </div>
      </div> */}
      <section className='main-sec'>
        <div className='row justify-content-center'>
        <div className='col-lg-12'>
            <h2 className='dashboard-title'>Contact Us</h2>
          <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <Link to="/">Dashboard </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Contact Us
          </li>
          </ol>
          </nav>
          </div>
          <div className='col-lg-6'>
          <div className='cards contact-frm'>
   <div className='mb-4'>
      <input className='form-control' 
         type="text" 
         name="name" 
         placeholder="Name" 
         value={formData.name} 
         onChange={handleChange} 
         />
   </div>
   <div className='mb-4'>
      <input className='form-control' 
         type="text" 
         name="mobileNumber" 
         placeholder="Mobile Number" 
         value={formData.mobileNumber} 
         onChange={handleChange} 
         />
   </div>
   <div className='mb-4'>
      <input className='form-control' 
         type="email" 
         name="email" 
         placeholder="Email Id" 
         value={formData.email} 
         onChange={handleChange} 
         />
   </div>
   <div className='mb-4'>
      <textarea className='form-control' 
         name="message" 
         placeholder="Message" 
         value={formData.message} 
         onChange={handleChange} 
         />
   </div>
   <div>
      <button className="submit-button thm-btn w-100" onClick={handleSubmit}>Submit</button>
   </div>
</div>
          </div>
          <div className='col-lg-6'>
            <div className='contact-map'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5124149605723!2d75.8312117754731!3d26.823071073010634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2d839bfe9ad%3A0x4e64b6f4c1242ff0!2sRIICO%20Industrial%20Area%2C%20Sitapura%2C%20Jaipur%2C%20Rajasthan%20302022%2C%20India!5e0!3m2!1sen!2sus!4v1658757624321!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
            </div>
            <div className='contact-map-dtl cards'>
              <div className='contact-map-dtl-innr'>
              <h5>Address</h5>
            <p>G 845 RIICO Industrial Area | Sitapura | Jaipur</p>
              </div>
              <div className='contact-map-dtl-innr mb-0'>
              <h5>Contact No.</h5>
            <p>+91 830 600 6901</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
