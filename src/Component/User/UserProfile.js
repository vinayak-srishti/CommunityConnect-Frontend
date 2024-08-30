import React, { useEffect, useState } from 'react'
import './User.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../Images/download.png'

function UserProfile() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({ FirstName: '', LastName: '', Email: '', Street: '', City: '', Pincode: '', PhoneNumber: '' })
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.post(`http://localhost:4000/viewoneuser/${id}`)
                console.log(response)
                setUserDetails(response.data.msg)
            }
            catch (error) {
                console.log('Error fetching', error)
            }
        }
        if (id) {
            fetchDetails()
        }


    }, [id]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/editdetails/${id}`, userDetails)

            .then((result) => {
                console.log("Updated", result)
                alert("updated Successfully")
                setIsEditing(false);
            })

    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/navbarmain');
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: 'gray' }}>
                            <h5 className="mb-0" style={{ color: 'white' }}>My Profile</h5>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img src={img} className="rounded-circle profile-img mb-3" alt="Profile" />
                                    <h5 className="font-weight-bold">{userDetails.FirstName}</h5>
                                    <p>{userDetails.City}</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="personal-info mb-4">
                                        <h6 className="font-weight-bold">Personal Information</h6>
                                        <button
                                            className="btn btn-sm btn-outline-secondary float-right"
                                            onClick={() => setIsEditing(!isEditing)}
                                        >
                                            {isEditing ? 'Cancel' : 'Edit'}
                                        </button>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div>
                                                        <label><strong>First Name:</strong></label>
                                                        {isEditing ? (
                                                            <input
                                                                type="text"
                                                                name="FirstName"
                                                                value={userDetails.FirstName}
                                                                onChange={handleInputChange}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <p>{userDetails.FirstName}</p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <label><strong>Email:</strong></label>
                                                        {isEditing ? (
                                                            <input
                                                                type="email"
                                                                name="Email"
                                                                value={userDetails.Email}
                                                                onChange={handleInputChange}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <p>{userDetails.Email}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div>
                                                        <label><strong>Last Name:</strong></label>
                                                        {isEditing ? (
                                                            <input
                                                                type="text"
                                                                name="LastName"
                                                                value={userDetails.LastName}
                                                                onChange={handleInputChange}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <p>{userDetails.LastName}</p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <label><strong>Phone:</strong></label>
                                                        {isEditing ? (
                                                            <input
                                                                type="text"
                                                                name="PhoneNumber"
                                                                value={userDetails.PhoneNumber}
                                                                onChange={handleInputChange}
                                                                className="form-control"
                                                            />
                                                        ) : (
                                                            <p>{userDetails.PhoneNumber}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="address-info">
                                        <h6 className="font-weight-bold">Address</h6>
                                        <div className="row">
                                            <div className="col-6">
                                                <div>
                                                    <label><strong>City:</strong></label>
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            name="City"
                                                            value={userDetails.City}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                        />
                                                    ) : (
                                                        <p>{userDetails.City}</p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label><strong>Pincode:</strong></label>
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            name="Pincode"
                                                            value={userDetails.Pincode}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                        />
                                                    ) : (
                                                        <p>{userDetails.Pincode}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div>
                                                    <label><strong>Current Address:</strong></label>
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            name="Street"
                                                            value={userDetails.Street}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                        />
                                                    ) : (
                                                        <p>{userDetails.Street}</p>
                                                    )}
                                                    
                                                </div>
                                                
                                            </div>
                                            {isEditing && (
                                                <div className="text-right mt-3">
                                                    <button className="btn btn-success" type="submit">Save Changes</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile