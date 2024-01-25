import React from 'react'
import { MdOutlineDashboardCustomize, MdOutlineReviews } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { IoReceiptOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

const SideNavBar = () => {
  return (

    <>
      <nav>
        <ul>
          <li>
            <span>
            <MdOutlineDashboardCustomize />
            </span>
            Dashboard
          </li>
          <li>
            <span><BsHouses /></span>
            Property
          </li>
          <li>
            <span><IoReceiptOutline /></span>
            Receipt
          </li>
          <li>
            <span><AiOutlineMessage /></span>
            Contact Us
          </li>
          <li>
            <span><MdOutlineReviews /></span>
            Reviews
          </li>
        </ul>
      </nav>
    </>

  )
}

export default SideNavBar