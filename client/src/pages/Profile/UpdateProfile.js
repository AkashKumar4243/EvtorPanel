import React, { useState } from 'react';
import api from '../../api/api.js'
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import defaultProfile from '../../assets/images/defaultProfile.jpg'


const UpdateProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        name: '',
        vehicleNumber: '',
        mobileNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put('/users/dashboard/profile/update', profile);
            // setResponse(response.data);
            console.log(response);
          } catch (error) {
            console.error('Error posting data: ', error);
          }
          setProfile({ 
            name : "",
            mobileNumber : '',
            vehicleNumber : "",
           });

           navigate('/profile')
    };

    return (
        <>
            {/* <h1>Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name
                    <input
                        type="text"
                        name="userName"
                        value={profile.userName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Vehicle Number
                    <input
                        type="text"
                        name="vehicleNumber"
                        value={profile.vehicleNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Mobile Number
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        value={profile.mobileNumber}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Save</button>
            </form> */}
            <section className='main-sec'>
                <div className='row justify-content-center'>
                    <div className='col-lg-12'>
                        <h2 className='dashboard-title'>Update Profile </h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Dashboard </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Update Profile
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='cards update-profile-card'>
                            <div className='update-profile-img'>
                                <div className="update-profile-img">
                                    <img src={defaultProfile} alt='' />
                                    <div className="upload">
                                        <label htmlFor="upload">
                                            <i className="bi bi-camera-fill" />
                                        </label>
                                        <input type="file" id="upload" />
                                    </div>
                                </div>

                            </div>
                            <form action="">
                                <div className="profile-frm-bx mb-4">
                                    <label className='form-label'>User Name</label>
                                    <input type="text" className="form-control" name="name"
                                    placeholder="Enter mobile name"
                                        value={profile.name}
                                        onChange={handleChange} />
                                    <span className="far fa-pen" />
                                </div>
                                <div className="profile-frm-bx mb-4">
                                    <label className='form-label'>Vehicle Number</label>
                                    <input type="text" className="form-control" name="vehicleNumber"
                                    placeholder="Enter mobile Vehicle Number"
                                        value={profile.vehicleNumber}
                                        onChange={handleChange} />
                                    <span className="far fa-pen" />
                                </div>
                                <div className="profile-frm-bx mb-4">
                                    <label className='form-label'>Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue=""
                                        placeholder="Enter mobile number"
                                        name="mobileNumber"
                                        value={profile.mobileNumber}
                                        onChange={handleChange}
                                    />
                                    <span className="far fa-pen" />
                                </div>
                                <div className="profile-frm-bx mb-4 text-center">
                                    <button
                                        className="thm-btn"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UpdateProfile;