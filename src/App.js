import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHome from './Component/User/UserHome';
import AdminLogin from './Component/Admin/AdminLogin';
import AdminSidebar from './Component/Admin/AdminSidebar';
import AdminDashboard from './Component/Admin/AdminDashboard';
import AdminMain from './Component/Admin/AdminMain';
import UserSignupForm from './Component/User/UserSignupForm';
import UserLogin from './Component/User/UserLogin';
import OrphanageSignupForm from './Component/Orphanage/OrphanageSignupForm';
import OrphanageLogin from './Component/Orphanage/OrphanageLogin';
import OrphanageHome from './Component/Orphanage/OrphanageHome';
import AdminUserManagement from './Component/Admin/AdminUserManagement';
import AdminUserMain from './Component/Admin/AdminUserMain';
import AdminOrphanageMain from './Component/Admin/AdminOrphanageMain';
import AdminOrphanageManagement from './Component/Admin/AdminOrphanageManagement';
import OrphanageNavbar from './Component/Orphanage/OrphanageNavbar';
import DonationRequestForm from './Component/Donation/DonationRequestForm';
import OrphanageList from './Component/Orphanage/OrphanageList';
import PendingDonation from './Component/Donation/PendingDonation';
import AdminDonationManagement from './Component/Admin/AdminDonationManagement';
import AdminDonationMain from './Component/Admin/AdminDonationMain';
import OrphanageDetailsList from './Component/Orphanage/OrphanageDetailsList';
import DonateToOrphanage from './Component/Donation/DonateToOrphanage';
import Donate from './Component/Donation/Donate';
import CreateDonation from './Component/Donation/CreateDonation'
import About from './Component/Pages/About';
import ViewDonation from './Component/Donation/ViewDonation';
import AdminNavbar from './Component/Admin/AdminNavbar';
import AdminAbout from './Component/Admin/AdminAbout';
import NavbarMain from './Component/Header&Footer/NavbarMain';
import Header from './Component/Header&Footer/Header';
import UserProfile from './Component/User/UserProfile';
import OrphanageProfile from './Component/Orphanage/OrphanageProfile';
import OrphanageListView from './Component/Orphanage/OrphanageListView';
import OrphanageDetails from './Component/Orphanage/OrphanageDetails';
import Footer from './Component/Header&Footer/Footer';
import UserProfiles from './Component/User/UserProfiles';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Routes>
      <Route path='/userhome' element={[<Header/>,<UserHome/>]}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminsidebar' element={<AdminSidebar/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/adminmain' element={<AdminMain/>}/>
      <Route path='/usersignup' element={<UserSignupForm/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/orphanagesign' element={<OrphanageSignupForm/>}/>
      <Route path='/orphanagelogin' element={<OrphanageLogin/>}/>
      <Route path='/orphanagehome' element={[<OrphanageHome/>]}/>
      <Route path='/adminusermanagement' element={<AdminUserManagement/>}/>
      <Route path='/adminusermain' element={<AdminUserMain/>}/>
      <Route path='/adminorphanagemanagement' element={<AdminOrphanageManagement/>}/>
      <Route path='/adminorphanagemain' element={<AdminOrphanageMain/>}/>
      <Route path='/orphanagenavbar' element={<OrphanageNavbar/>}/>
      <Route path='/donationrequest' element={<CreateDonation/>} />
      <Route path='/orphanagelist' element={[<Header/>,<OrphanageList/>,<Footer/>]}/>
      <Route path='/pendingdonation' element={<PendingDonation/>}/>
      <Route path='/admindonationmanagement' element={<AdminDonationManagement/>}/>
      <Route path='/admindonationmain' element={<AdminDonationMain/>}/>
      <Route path='/orphanagedetailslist/:id' element={<OrphanageDetailsList/>}/>
      <Route path='/donatetoorphanage/:id' element={<DonateToOrphanage/>}/>
      <Route path='/donate/:id' element={<Donate/>}/>
      <Route path='/viewdonation' element={<ViewDonation/>}/>
      <Route path='/about' element={[<Header/>,<About/>]}/>
      <Route path='/adminnav' element={<AdminNavbar/>}/>
      <Route path='/adminabout' element={<AdminAbout/>}/>
      <Route path='/navbarmain' element={[<NavbarMain/>,<UserHome/>]}/>
      <Route path='/userprofile/:id' element={<UserProfile/>}/>
      <Route path='/orphanageprofile/:id' element={<OrphanageProfile/>}/>
      <Route path='/orphanagelistview' element={[<OrphanageNavbar/>,<OrphanageListView/>,<Footer/>]}/>
      <Route path='/orphanagedetails/:id' element={[<OrphanageNavbar/>,<OrphanageDetails/>]}/>
      <Route path='/userprofiles/:id' element={<UserProfiles/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
