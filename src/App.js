import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Pages/Home';
import Navbar from './Component/Inc/Navbar';
import About from './Component/Pages/About';
import Password from './Component/Password';
import Logreg from './Component/Logreg';
import Bloodcamp from './Component/Bloodcamp';
import Donate from './Component/Donate';
import Bloodcampdetails from './Component/Bloodcampdetails';
import Homeone from './Component/Pages/Homeone';
import Hometwo from './Component/Pages/Hometwo';
function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/password' element={<Password/>}/>
          <Route path='/logreg' element={<Logreg/>}/>
          <Route path='/bloodcamp' element={<Bloodcamp/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/bloodcampdetails' element={<Bloodcampdetails/>}/>
          <Route path='/homeone' element={<Homeone/>}/>
          <Route path='/hometwo' element={<Hometwo/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
