import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AdminOrphanageManagement() {
  const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
  
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await axios.post("http://localhost:4000/vieworphanagedetails")
          console.log(response)
          setData(response.data.msg)
        }
        catch (error) {
          console.error("Error fetching", error)
        }
      }
      fetchDetails()
    }, [])
  return (
    <div>
     <section>
        <h1 class='mb-3'>All Orphanage</h1>
        {/* <input
          type="text"
          class='mb-3'
          style={{width:'400px'}}
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Orphanage Name</th>
              <th scope="col">Address</th>
              <th scope="col">Year Of Establishment</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              

            </tr>

          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data._id}>
                
                <th scope="row">{index + 1}</th>
                <td>{data.OrphanageName}</td>
                <td>{data.City}</td>
                <td>{data.YearOfEstablishment}</td>
                <td>{data.Email}</td>
                <td>{data.PhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>   
    </div>
  )
}

export default AdminOrphanageManagement