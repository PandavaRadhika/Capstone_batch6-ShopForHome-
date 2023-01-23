import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import DeleteProduct from "./DeleteProduct";

function GetAllProducts() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  function getApi() {
    fetch("http://localhost:8081/product/getAllProduct")
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  }
  useEffect(() => {
    getApi();
  },[]);

  return (
    <div className="container col-md-7 bt-5 ">
      <h1 style={{ textAlign: "center" }}>Product Details</h1>

      <br />

       <table className="table table-striped col-mdcd-4">
        <thead>
          <tr>
            <th>ProductID</th> <th>ProductName</th> <th>Quantity</th> <th>Product Price</th><th>Category</th><th>Stocks</th><th>Delete </th> <th>Update</th>{" "}
          </tr>{" "}
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.productId}>
                {" "}
                
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td> {item.quantity} </td>
                <td>{item.productPrice}</td>
                 <td>{item.category}</td>
                 <td>{item.stock}</td>
                 <td><DeleteProduct productId={item.productId}>Delete Product</DeleteProduct></td> 
                 <td><button className='btn btn-success' type='submit' onClick={()=>{navigate("/UpdateProduct")}}> Update Product</button></td>
              </tr>
            );
          })}
        </tbody>
      </table> 

       
    </div>
  );
}

export default GetAllProducts;
