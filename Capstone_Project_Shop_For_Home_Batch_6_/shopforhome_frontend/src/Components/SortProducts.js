import React, { useState } from "react";

function SortProducts() {
  const [data, setData] = useState([]);
  function getApi() {
    fetch("http://localhost:8081/product/getlowtohigh/10/10000")
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  }
  return (
    <div className="container col-md-4 bt-5 ">
      <h1 style={{ backgroundColor: "pink", textAlign: "center" }}>
        ***Welcome to shop home***
      </h1>

      <button type="submit" onClick={getApi} className="btn btn-warning">
        Sort The Products
      </button>
      <br />

      <table className="table table-striped col-mdcd-4">
        <thead>
          <tr>
            <th>ProductID</th> <th>ProductName</th> <th>Quantity</th>{" "}
            <th>Product Price</th>
            <th>Category</th>{" "}
          </tr>{" "}
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.productId}>
                {" "}
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.productPrice}</td> <td>{item.category}</td>{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SortProducts;
