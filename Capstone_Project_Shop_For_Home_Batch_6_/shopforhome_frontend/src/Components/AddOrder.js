import React from "react";
import { useNavigate } from "react-router-dom";



function AddOrder(props) {
const navigate=useNavigate();
 
  
  const addOrderApi = () => {
    fetch("http://localhost:8081/order/addorder", {
      method: "POST",
      body: JSON.stringify({
        totalBill: props.totalBill,
        date: props.date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("order added Successfully...");
        
      });
  };
  return (
    <>
      {" "}
      <div className="tab">
        <h4>click here to place the order</h4>{" "}
        {" "}
        <button type="submit" className="btn btn-success" onClick={addOrderApi}>PlaceOrder</button>
        {" "}
      </div>
    {" "}
    </>
  );
}
export default AddOrder;
