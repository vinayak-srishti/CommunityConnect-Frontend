import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function OrphanageList() {
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
        <h1 class='mb-3' style={{textAlign:'center',color:'brown',paddingTop:'50px'}}>Listed Orphanages</h1>
       
        <table class="table table-striped table-hover w-75 text-center" style={{marginLeft:'auto',marginRight:'auto',marginBottom:'50px'}} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Orphanage Name</th>
              <th scope="col">Address</th>
              <th scope="col">Year Of Establishment</th>
              <th scope="col">Contact Number</th>
              <th scope="col">View More</th>
            </tr>

          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data._id}>
                
                <th scope="row">{index + 1}</th>
                <td>{data.OrphanageName}</td>
                <td>{data.City}</td>
                <td>{data.YearOfEstablishment}</td>
                <td>{data.PhoneNumber}</td>
                <td><Link to={`/orphanagedetailslist/${data._id}`}><button type="submit" class="btn btn-info border-0" style={{backgroundColor:'brown',color:'white'}}>View More</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section> 
    </div>
  )
}

export default OrphanageList