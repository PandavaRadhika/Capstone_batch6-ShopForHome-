import React, { useState, useEffect } from "react";

function GetAllOrder() {
  const [data, setData] = useState([]);

  function getApi() {
    fetch("http://localhost:8081/order/getallorders")
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="container col-md-4 bt-5 "  style={{backgroundColor:"skyblue"}}>
      <h1 style={{ backgroundColor: "pink", textAlign: "center" }}>
        ***View Orders***
      </h1>

      <br />

      <table className="table table-striped col-mdcd-4">
        <thead>
          <tr>
            <th>OrderID</th> <th>Total Bill</th> <th>Date</th>{" "}
          </tr>{" "}
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.orderId}>
                {" "}
                <td>{item.orderId}</td>
                <td>{item.totalBill}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllOrder;
