

import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut} from "react-icons/bi";
import GetAllProducts from './GetAllProducts';
import GetAllUsers from './GetAllUsers';
import UserFooter from './UserFooter';


function AdminDashBoard() {
    const navigate = useNavigate();

  return (
   <>
   <div style={{backgroundColor:"black"}}>
   <nav class="navbar navbar-expand-lg nb ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
    <img  src={"https://www.bing.com/th?id=OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" } width="80px" class="d-inline-block align-top" alt=""/>

  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/AdminDashBoard' className="nav-link active">Admin Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link to='/AddUser' className="nav-link">Add User</Link>
        </li>
        <li class="nav-item">
          <Link to='/GetAllOrder' className="nav-link"> Order History</Link>
        </li>
        <li class="nav-item">
          <Link to='/AddProduct' className="nav-link">Add Product</Link>
        </li>
        <li class="nav-item">
          <Link to='/AddDiscount' className="nav-link">Add Discount Coupon</Link>
        </li>
        <li class="nav-item">
          <Link to='/BulkUpload' className="nav-link">Upload Bulk of Products</Link>
        </li>
      </ul>
    </div>
    <button className='btn' onClick={()=>{navigate('/')}}><BiLogOut></BiLogOut>Logout</button>
  </div>
</nav>
</div>
<div className='ad'>


   <GetAllProducts></GetAllProducts>
   <GetAllUsers></GetAllUsers>
   <UserFooter></UserFooter>

   
  
</div>

   </>
  );
}

export default AdminDashBoard