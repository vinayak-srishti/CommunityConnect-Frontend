import React, { useEffect,useState } from 'react'
import OrphanageNavbar from '../Orphanage/OrphanageNavbar';
import DonationRequestForm from './DonationRequestForm';
import Footer from '../Header&Footer/Footer';


function CreateDonation() {
    const [orpData, setOrpData] = useState(null);
    useEffect(()=>{
        let orpData = localStorage.getItem("user") || null
        if(orpData){
            
            setOrpData(JSON.parse(orpData))
        }
        else {
            console.log("Orp data not found in local storage");
            console.log("Please login");
          }
    }, [])
  return (
    <>
    <OrphanageNavbar/>
    <br/>
    {orpData ? (
        <DonationRequestForm orpData={orpData}/>
    ):(
        <div class='container' style={{minHeight:'400px'}}>
            <h1>Please Login</h1>
        </div>
        )}
        <br/>
        <br/>
        <br/>
        <br/>
     <div>
      <Footer/>
     </div>
    </>

  )
}

export default CreateDonation