import React, { Component } from "react";

export default class UserRegister extends Component {
  constructor(props) {
    //parn -chil
    super(props);
    this.state = {
      //created state
      userId: "",
      userName: "",
      userMail: "",
      password: "",
      // gender:""
    };

    //create Ref var
    this.userIdRef = React.createRef();
    this.userNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    // this.genderRef = React.createRef();
  }

  addPostApi = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/user/userregister", {
      method: "POST",
      body: JSON.stringify({
        userName: this.userNameRef.current.value,
        userMail: this.emailRef.current.value,

        password: this.passwordRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    alert("User registered successfully");
  };
  render() {
    return (
      <>
        <div className="ur">
          <form className="container col-md-5" onSubmit={this.addPostApi}>
            <h1>User Registration</h1>
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
                ref={this.emailRef}
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
                pattern="[A-Z][a-z][@][.][1-10]"
                ref={this.passwordRef}
              />
            </div>

            <div className="justify-content centre">
              <button type="submit" className="btn btn-primary">
                Register as User
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
