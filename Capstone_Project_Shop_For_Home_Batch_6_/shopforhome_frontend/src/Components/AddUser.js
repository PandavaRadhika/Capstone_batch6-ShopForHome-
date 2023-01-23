import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userName: "",
      userMail: "",
      password: "",
    };

    this.userNameRef = React.createRef();
    this.userMailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  addPostApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8081/user/adduser", {
      method: "POST",
      body: JSON.stringify({
        userName: this.userNameRef.current.value,

        userMail: this.userMailRef.current.value,

        password: this.passwordRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(this.userNameRef.current.value);
    alert("User added successfully");
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
          <h1 style={{textAlign:'center'}}>Add User</h1>
          <div className="form-group">
            <label>Enter UserName</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Name"
              className="form-control"
              ref={this.userNameRef}
            />
          </div>

          <div className="form-group">
            <label>Enter email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="abc@gmail.com"
              className="form-control"
              ref={this.userMailRef}
            />
          </div>

          <div className="form-group">
            <label>Enter password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter Password"
              className="form-control"
              ref={this.passwordRef}
            />
          </div>
          <br></br>

          <button type="submit" className=" btn btn-primary" >
            Add User
          </button>
        </form>
      </div>
      </>
    );
  }
}

export default AddUser;
