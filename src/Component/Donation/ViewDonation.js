import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../Header&Footer/Header'
import OrphanageNavbar from '../Orphanage/OrphanageNavbar'
import Footer from '../Header&Footer/Footer'

function ViewDonation() {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
  
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await axios.post("http://localhost:4000/viewDonationDetails")
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
            <OrphanageNavbar/>
        </section>
     <section>
        <h1 class='mb-3' style={{textAlign:'center',color:'brown'}}>Donation Request</h1>
       
        <table class="table table-striped table-hover w-75 text-center" style={{marginLeft:'auto',marginRight:'auto'}} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Amount</th>
              <th scope="col">Urgency Level</th>
              <th scope="col">Category</th>
            </tr>

          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data._id}>
                
                <th scope="row">{index + 1}</th>
                <td>{data.RequestTitle}</td>
                <td>{data.Amount}</td>
                <td>{data.UrgencyLevel}</td>
                <td>{data.RequestCategory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section> 
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default ViewDonation