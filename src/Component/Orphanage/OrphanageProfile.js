import React, { useEffect, useState } from 'react'
import './Orphanage.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function OrphanageProfile() {
    const { id } = useParams()
    const [orphanageDetails, setOrphanageDetails] = useState({ OrphanageName: '', Email: '', PhoneNumber: '', City: '', Pincode: '', Street: '' })
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.post(`http://localhost:4000/viewoneorphanage/${id}`)
                console.log(response)
                setOrphanageDetails(response.data.msg)
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
        setOrphanageDetails({ ...orphanageDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/editorpdetails/${id}`, orphanageDetails)

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
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10" style={{ width: '700px' }}>
                    <div className="card shadow-lg" style={{ width: '700px' }}>
                        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                            <h5 className="mb-0" style={{ color: 'white' }}>My Profile</h5>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img src={'http://localhost:4000/' + orphanageDetails.image?.filename} className="rounded-circle profile-img mb-3" alt="Profile" />
                                    <h5 className="font-weight-bold" style={{ color: 'brown' }}>{orphanageDetails.OrphanageName}</h5>
                                    <p>{orphanageDetails.City}</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="personal-info mb-4">
                                        <h6 className="font-weight-bold" style={{ color: 'brown', fontFamily: 'fantasy', fontSize: '20px' }}>Personal Information</h6>
                                        <button className="btn btn-sm btn-outline-secondary float-right" onClick={() => setIsEditing(!isEditing)}>Edit</button>
                                        {isEditing ? (
                                            <div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label>Orphanage Name</label>
                                                        <input type="text" className="form-control" name="OrphanageName" value={orphanageDetails.OrphanageName} onChange={handleInputChange} />
                                                    </div>

                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" name="Email" value={orphanageDetails.Email} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Phone Number</label>
                                                        <input type="text" className="form-control" name="PhoneNumber" value={orphanageDetails.PhoneNumber} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" name="City" value={orphanageDetails.City} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Postal Code</label>
                                                        <input type="text" className="form-control" name="Pincode" value={orphanageDetails.Pincode} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Street</label>
                                                    <input type="text" className="form-control" name="Street" value={orphanageDetails.Street} onChange={handleInputChange} />
                                                </div>
                                                <button className="btn btn-primary mt-3" onClick={handleSubmit}>Save</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="form-row">
                                                    <div className="col-md-9">
                                                        <p><strong>First Name:</strong> {orphanageDetails.OrphanageName}</p>
                                                        <p><strong>Email:</strong> {orphanageDetails.Email}</p>
                                                    </div>
                                                    <div className="col-md-6">

                                                        <p><strong>Phone:</strong> {orphanageDetails.PhoneNumber}</p>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-6">
                                                        <p><strong>City:</strong> {orphanageDetails.City}</p>
                                                        <p><strong>Postal Code:</strong> {orphanageDetails.Pincode}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p><strong>Street:</strong> {orphanageDetails.Street}</p>
                                                    </div>
                                                </div>
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
    )
}

export default OrphanageProfile