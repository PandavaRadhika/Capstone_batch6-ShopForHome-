import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    console.log(mail);
    if (validate()) {
      fetch("http://localhost:8081/user/userlogin/" + mail + "/" + password)
        .then((response) => {
          response.json();
        })

        .then((jsonData) => {
          console.log(jsonData);
          navigate("/UserMenu");
        });
    }
  };
  const validate = () => {
    let result = true;
    if (mail === null || mail === " ") {
      result = false;
    }
    if (password === null || password === " ") {
      result = false;
    }
    return result;
  };
  return (
    <div className="ul">
      <form className="container bg-info col-md-5" onSubmit={proceedLogin}>
        <h1>User Login</h1>
        <div className="form-group">
          <label>User Mail</label>
          <input
            value={mail}
            className="form-control"
            placeholder="Enter mail"
            onChange={(e) => setMail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>password</label>
          <input
          type="password"
            value={password}
            className="form-control"
            placeholder="Enter Password"
            pattern='[A-Z][a-z][@][.][1-10]'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
      <br></br>
      <br></br>
      <footer className="myFoot">
       <h3> To Create New Account <Link to="/UserRegister">Click Here</Link></h3>
      </footer>
    </div>
  );
};
export default UserLogin;
