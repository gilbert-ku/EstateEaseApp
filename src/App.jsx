import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Apartments from "./components/properties/Apartments"
import Homepg from './components/home/Homepg';
import About from './components/home/About';
import Navbar from './components/navbar/Navbar';
import Movers from './components/movers/Movers';
import Help from "./components/account/Help";
import SignUp from './components/account/SignUp';
import MyAccount from './components/account/MyAccount'
import HomeDash from './components/dashboard/home/HomeDash';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RentForm from './components/dashboard/home/RentForm';

// import NavbarDash from './components/dashboard/dash-navbar/NavbarDash';




function App() {

  return (
    <>
      
      
      {/* <Navbar /> */}
      <Router >
        <Routes basename="/subdirectory">
          {/* <Route path="/" element={<Homepg />} /> */}
          {/* <Route path="/aboutus" element={<About />} /> */}
          {/* <Route path="/apartments" element={<Apartments />} /> */}
          {/* <Route path="/movers" element={<Movers />} /> */}
          {/* <Route path="/signin" element={<SignUp />} /> */}
          {/* <Route path="/myaccount" element={<MyAccount />} /> */}
          {/* <Route path="/help" element={<Help />} /> */}
          <Route path="/" element={<HomeDash />} />
          <Route path="/form" element={<RentForm /> } />
        </Routes>
      </Router>

    </>
  )
}

export default App

