import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDash from './home/HomeDash';
import Contact from './info/Contact';
import Notification from './info/Notification';
import Reviews from './info/Reviews';
import Invoice from './payment-receipt/Invoice';
import Payments from './payment-receipt/Payments';
import Receipts from './payment-receipt/Receipts';
import EditProfile from './Profile/EditProfile';
import Setting from './Profile/Setting';
import RentForm from "./home/RentForm"
import SideBar from './dash-navbar/SideBar';

const DashApp = () => {
  return (
    <>
    <SideBar />
      <Routes>
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="setting" element={<Setting />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="payments" element={<Payments />} />
        <Route path="receipts" element={<Receipts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notification" element={<Notification />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="form" element={<RentForm />} />
        <Route path="/*" element={<HomeDash />} /> 
      </Routes>
    </>
  );
};

export default DashApp;
