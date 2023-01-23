import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteUser from "./DeleteUser";

function GetAllUsers() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  function getApi() {
    fetch("http://localhost:8081/user/getallusers")
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  }
  useEffect(() => {
    getApi();
  });
  return (
    <div className="container col-md-7 bt-5 ">
      <h1 style={{ textAlign: "center" }}>User Details</h1>

      <table className="table table-striped col-mdcd-4">
        <thead>
          <tr>
            <th>ID</th> <th>UserName</th> <th>userMail</th> <th>password</th>{" "}
            <th>Delete User</th>
            <th>Update User</th>
          </tr>{" "}
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                {" "}
                <td>{item.id}</td>
                <td>{item.userName}</td>
                <td>{item.userMail}</td> <td>{item.password}</td>{" "}
                <td>
                  <DeleteUser userId={item.id}></DeleteUser>
                </td>{" "}
                <td>
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={() => {
                      navigate("/UpdateUser");
                    }}
                  >
                    {" "}
                    Update User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllUsers;
