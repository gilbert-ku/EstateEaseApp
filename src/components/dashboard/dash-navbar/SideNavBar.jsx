// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineDashboardCustomize, MdOutlineReviews,MdOutlinePayments, MdEdit } from 'react-icons/md';
// import { IoReceiptOutline } from 'react-icons/io5';
// import { AiOutlineMessage } from 'react-icons/ai';
// import { HiOutlineLogout } from "react-icons/hi";
// import { FaFileInvoiceDollar } from "react-icons/fa";


// const SideNavBar = () => {
//   return (
    
//     <>
//     <div className=' d-flex justify-content-start mt-0' style={{backgroundColor: "#9C5412", width: "18rem", height: "100vh"}}>
//       <nav className="navbar mt-0 pt-0">
      
//       <ul className="navbar-nav my-custom--link mt-1 mt-sm-">
      
//         <li className="nav-item ">
//           <Link to="/Dashboard" className="nav-link  my-2 ">
//             <span className="icon-name">
//               <MdOutlineDashboardCustomize className='me-1 fs-5 fs-md-'/>
//               <span className="d-none d-md-inline">Dashboard</span>
//             </span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/Dashboard/editProfile" className="nav-link  my-2">
//             <span className="icon-name">
//               <MdEdit className='me-1 fs-5 fs-md-3'/>
//               <span className="d-none d-md-inline">Edit Profile</span>
//             </span>
//           </Link>
//         </li>


//         <li className="nav-item">
//           <Link to="/Dashboard/invoice" className="nav-link  my-2">
//             <span className="icon-name ">
//               <FaFileInvoiceDollar className='me-1 fs-5 fs-md-3 '/>
//               <span className="d-none d-md-inline">Invoice</span>
//             </span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/Dashboard/payments" className="nav-link  my-2">
//             <span className="icon-name ">
//               <MdOutlinePayments className='me-1 fs-5 fs-md-3 '/>
//               <span className="d-none d-md-inline">Payments</span>
//             </span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/Dashboard/receipts" className="nav-link  my-2">
//             <span className="icon-name">
//               <IoReceiptOutline className='me-1 fs-5 fs-md-3'/>
//               <span className="d-none d-md-inline">Receipt</span>
//             </span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/Dashboard/contact" className="nav-link  my-2">
//             <span className="icon-name">
//               <AiOutlineMessage className='me-1 fs-5 fs-md-3'/>
//               <span className="d-none d-md-inline">Contact Us</span>
//             </span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/Dashboard/reviews" className="nav-link  my-2">
//             <span className="icon-name">
//               <MdOutlineReviews className='me-1 fs-5 fs-md-3'/>
//               <span className="d-none d-md-inline">Reviews</span>
//             </span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/logout" className="nav-link  my-2">
//             <span className="icon-name">
//               <HiOutlineLogout className='me-1 fs-5 fs-md-3'/>
//               <span className="d-none d-md-inline">Log Out</span>
//             </span>
//           </Link>
//         </li>
//       </ul>
//       </nav>
//     </div>
      
//     </>
    
//   );
// };

// export default SideNavBar;

// // SideNavBar.js


import React from 'react';
import { MdOutlineDashboardCustomize, MdOutlineReviews, MdOutlinePayments, MdEdit } from 'react-icons/md';
import { IoReceiptOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import SideNavMenuItem from './SideNavMenuItem';

const SideNavBar = () => {
  return (
    <div className="justify-content-start mt-0" style={{ backgroundColor: '#9C5412', height: '100vh' }}>
      <nav className="navbar mt-0 pt-0"> 
        <ul className="navbar-nav my-custom--link mt-5 p-5" style={{ width: "16vw"}}>
          <SideNavMenuItem to="/Dashboard" icon={<MdOutlineDashboardCustomize className='fs-4 me-2' />} label="Dashboard" />
          <SideNavMenuItem to="/Dashboard/editProfile" icon={<MdEdit className='fs-4 me-2' />} label="Edit Profile" />
          <SideNavMenuItem to="/Dashboard/invoice" icon={<FaFileInvoiceDollar className='fs-4 me-2' />} label="Invoice" />
          <SideNavMenuItem to="/Dashboard/payments" icon={<MdOutlinePayments className='fs-4 me-2' />} label="Payments" />
          <SideNavMenuItem to="/Dashboard/receipts" icon={<IoReceiptOutline className='fs-4 me-2' />} label="Receipt" />
          <SideNavMenuItem to="/Dashboard/contact" icon={<AiOutlineMessage className='fs-4 me-2' />} label="Contact Us" />
          <SideNavMenuItem to="/Dashboard/reviews" icon={<MdOutlineReviews className='fs-4 me-2' />} label="Reviews" />
          <SideNavMenuItem to="/logout" icon={<HiOutlineLogout className='fs-4 me-2' />} label="Log Out" />
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
