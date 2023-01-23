import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    console.log(mail);
    if (validate()) {
      fetch("http://localhost:8081/admin/adminlogin/" + mail + "/" + password)
        .then((response) => {
          response.json();
        })

        .then((jsonData) => {
          console.log(jsonData);
          navigate("/AdminDashBoard");
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
    <div className='ul'>
      <form className="container bg-info col-md-5" onSubmit={proceedLogin}>
        <h1>Admin Login</h1>
        <div className="form-group">
          <label>Admin Mail</label>
          <input
            value={mail}
            className="form-control"
           
            placeholder="Enter mail"
            onChange={(e) => setMail(e.target.value)}   ></input>
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
      <footer className="myFoot">
        To Create New Account <Link to="/AdminRegister">Click Here</Link>
      </footer>
    </div>
  );
};
export default AdminLogin;
