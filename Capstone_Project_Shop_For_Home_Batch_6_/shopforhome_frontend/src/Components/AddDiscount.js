import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddDiscount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountId: "",
      discountCouponName: "",
      userId: "",
      discountAmount: "",
    };

    this.discountIdRef = React.createRef();
    this.discountCouponNameRef = React.createRef();
    this.userIdRef = React.createRef()
    this.discountAmountRef=React.createRef()
  }

  addPostApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8082/discount/adddiscount", {
      method: "POST",
      body: JSON.stringify({
       
        discountCouponName:this.discountCouponNameRef.current.value,
        discountAmount:this.discountAmountRef.current.value,
        userId:this.userIdRef.current.value
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(this.discountCouponNameRef.current.value);
    alert("dicountCoupon added successfully");
  };
  render() {
    return (
      <>
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
          <Link to='/AddProduct' className="nav-link">Add Product</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="ad">
        <form
          className="container col-md-5"
          onSubmit={this.addPostApi}
        >
          

          <div className="form-group">
            <label>Enter dicountCouponName</label>
            <input
              type="text"
              name="email"
              required
              placeholder="discount name"
              className="form-control"
              ref={this.discountCouponNameRef}
            />
          </div>

          <div className="form-group">
            <label>Enter discountAmount</label>
            <input
              type="text"
              name="password"
              required
              placeholder="Enter discount amount"
              className="form-control"
              ref={this.discountAmountRef}
            />
          </div>
          <div className="form-group">
            <label>Enter userId</label>
            <input
              type="text"
              name="password"
              required
              placeholder="Enter userId"
              className="form-control"
              ref={this.userIdRef}
            />
          </div>
          <br></br>

          <button type="submit" className=" btn btn-primary" >
            Add Coupon
          </button>
        </form>
      </div>
      </>
    );
  }
}

export default AddDiscount;