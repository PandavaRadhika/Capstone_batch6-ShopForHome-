import React from "react";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="app">
        <nav style={{ textAlign: "center" }}>
          <h1>WELCOME TO SHOP FOR HOME </h1>
        </nav>
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-dark"
            type="submit"
            onClick={() => {
              navigate("/userlogin");
            }}
          >
            {" "}
            User Login
          </button>
          <br></br>
          <br></br>
          <button
            className="btn btn-dark"
            type="submit"
            onClick={() => {
              navigate("/AdminLogin");
            }}
          >
            {" "}
            Admin Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
