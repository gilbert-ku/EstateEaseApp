import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Apartments from "./components/client/account/properties/Apartments"
import Homepg from './components/client/account/home/Homepg';
import About from './components/client/account/home/About';
import Movers from './components/client/account/movers/Movers';
import Help from "./components/client/account/Help";
import SignUp from './components/client/account/SignUp';
import MyAccount from './components/client/account/MyAccount'
import DashApp from './components/dashboard/DashApp';


function App() {
  return (
  
      <>
        
        <Routes>
          {/* <Route path="/" element={<Homepg />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/movers" element={<Movers />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/help" element={<Help />} /> */}
          <Route path="/dashboard/*" element={<DashApp />} />
        </Routes>
        
      </>
      
    
  )
}

export default App;
