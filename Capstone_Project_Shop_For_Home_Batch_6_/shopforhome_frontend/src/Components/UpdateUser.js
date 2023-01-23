import React, { Component } from "react";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userName: "",
      userMail: "",
      password: "",
    };
    this.userIdRef = React.createRef();
    this.userNameRef = React.createRef();
    this.userMailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  addPostApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8081/user/updateuser", {
      method: "PUT",
      body: JSON.stringify({
        userId: this.userIdRef.current.value,
        userName: this.userNameRef.current.value,

        userMail: this.userMailRef.current.value,

        password: this.passwordRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(this.userNameRef.current.value);
    alert("User updated successfully");
  };
  render() {
    return (
      <div>
        <form
          className="container bg-success col-md-5"
          onSubmit={this.addPostApi}
        >
          <h1>Update User</h1>

          <div className="form-group">
            <label>Enter UserId</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Id"
              className="form-control"
              ref={this.userIdRef}
            />
          </div>
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

          <button type="submit" className="btn btn-primary">
            Update User
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
