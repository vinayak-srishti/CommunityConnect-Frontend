import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDonationManagement() {
  const [donationData, setDonationData] = useState([]);

  const getAllRequest = () => {
    axios.post('http://localhost:4000/viewalldonationrequest')
      .then((result) => {
        console.log('Donation Data:', result.data.data);
        const activeDonations = result.data.data.filter(donation => !donation.isactive);
        setDonationData(activeDonations);
      })
      .catch((error) => {
        console.log('Error fetching donation data:', error);
      });
  };

  useEffect(() => {
    getAllRequest();
  }, []);

  const handleApprove = (id) => {
    axios.post(`http://localhost:4000/approve/${id}`)
      .then((result) => {
        console.log('Approve Result:', result);
        if (result.data.status === 200) {
          alert('Approved');
          setDonationData(donationData.filter(donation => donation._id !== id)); // Remove the approved donation from the state
          console.log('Updated Donation Data:', donationData);
        } else if (result.data.status === 400) {
          alert(result.data.msg);
        }
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };
  const handleReject = (id) => {
    axios.post(`http://localhost:4000/reject/${id}`)
        .then((result) => {
            if (result.data.status === 200) {
                alert('Rejected successfully');
                setDonationData(donationData.filter(item => item._id !== id));
            } else {
                alert(result.data.msg);
            }
        })
        .catch((err) => {
            console.log('error', err);
        });
};
  return (
    <div>
      <section>
        <h1 className='mb-3'>All Donation Requests</h1>
        {/* <input
          type="text"
          className='mb-3'
          style={{ width: '400px' }}
          placeholder="Search Users"
        /> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Orphanage Name</th>
              <th scope="col">Request Purpose</th>
              <th scope="col">Amount Needed</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Approve</th>
              <th scope='col'>Reject</th>
            </tr>
          </thead>
          <tbody>
            {donationData.map((data, index) => (
              <tr key={data._id}>
                <th scope="row">{index + 1}</th>
                <td>{data.OrphanageId?.OrphanageName}</td>
                <td>{data.RequestTitle}</td>
                <td>{data.Amount}</td>
                <td>{data.OrphanageId?.PhoneNumber}</td>
                <td>
                  <button
                    onClick={() => handleApprove(data._id)}
                    className='btn btn-success'
                    type='submit'
                  >
                    Approve
                  </button>
                </td>
                <td><button onClick={() => handleReject(data._id)} type="submit" className="btn btn-danger">Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminDonationManagement;
