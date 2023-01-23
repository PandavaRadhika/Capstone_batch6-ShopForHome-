

import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      productName:"",
      productPrice: "",
      quantity: "",
      category:" ",
      productImg:"",
      stock:""
    };
    // create refs
    this.stockRef = React.createRef();
    this.productImgRef = React.createRef();
    this.idRef = React.createRef();
    this.quantityRef=React.createRef();
    this.productNameRef = React.createRef();
    this.productPriceRef = React.createRef();
    this.categoryRef=React.createRef();
  }
  addItemApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8081/product/addProduct", {
      method: "POST",
      body: JSON.stringify({
        productImg:this.productImgRef.current.value,
        quantity:this.quantityRef.current.value,
        productName: this.productNameRef.current.value,
        productPrice: Number(this.productPriceRef.current.value),
        category:this.categoryRef.current.value,
        stock:this.stockRef.current.value
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    
    alert("Product Added to Menu");
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
              <Link to='/AdminDashBoard' className="nav-link">Admin Dashboard</Link>
            </li>
            <li class="nav-item">
              <Link to='/AddUser' className="nav-link">Add User</Link>
            </li>
            <li class="nav-item">
              <Link to='/AddProduct' className="nav-link active">Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div className="ad">
        <h1 style={{textAlign:"center"}}>Add Product</h1>
        <form className="container col-md-5" onSubmit={this.addItemApi}>
          <div className="form-group">
            {" "}
            <label>Enter product Name</label>{" "}
            <input type="text" className="form-control" ref={this.productNameRef} />{" "}
          </div>

          <div className="form-group">
            {" "}
            <label>Enter product category</label>{" "}
            <input type="text" className="form-control" ref={this.categoryRef} />{" "}
          </div>

          <div className="form-group">
            {" "}
            <label>Enter The product Imgage url</label>{" "}
            <input type="text" className="form-control" ref={this.productImgRef} />{" "}
          </div>
          <div className="form-group">
            {" "}
            <label>Enter no. of stocks</label>{" "}
            <input type="text" className="form-control" ref={this.stockRef} />{" "}
          </div>

          <div className="form-group">
            {" "}
            <label>Enter quantity</label>{" "}
            <input type="text" className="form-control" ref={this.quantityRef} />{" "}
          </div>

          <div className="form-group">
            {" "}
            <label>Enter Product Price</label>{" "}
            <input type="number" className="form-control" ref={this.productPriceRef} />{" "}
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
      </>
    );
  }
}
