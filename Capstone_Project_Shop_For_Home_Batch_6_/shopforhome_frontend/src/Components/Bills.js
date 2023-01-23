import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Bill() {
  var nav = useNavigate();
  var [cart, setCart] = useState([]);
  var [bil, setBil] = useState();
  var [final, setFinal] = useState();
  var [ setCoupon] = useState([]);
 
  var [isDone, setIsDone] = useState(0);

  var loginvalue = localStorage.getItem("login");

  function checklogin() {
    if (loginvalue != 0) {
      
    } else {
      alert("Invalid Login");
      
      nav("/login");
    }
  }
  checklogin();

  function getCarts() {
    axios.get("http://localhost:8000/consumerviewallcart").then((response) => {
      setCart(response.data);
    });
  }
  useEffect(getCarts, []);

  function getCoupons() {
    axios
      .get("http://localhost:8000/consumerviewallcoupon?uid=" + loginvalue)
      .then((response) => {
        setCoupon(response.data);
      });
  }
  useEffect(getCoupons, []);

  function generateBill() {
    var t = 0;
    cart.map((temp) => {
      t = t + temp.price * temp.quantity;
    });
    setBil(t);
    cart.map((temp) => {
      axios
        .get(
          "http://localhost:8000/consumeraddtoorder?pid=" +
            temp.pid +
            "&uid=" +
            temp.uid +
            "&quantity=" +
            temp.quantity
        )
        .then((res) => {});
    });
  } 
  function getCoupon() {
    
    var t = bil - 250;
    setFinal(t);
    setIsDone(1); 
  }

  function tryNew() {
    var t = bil - 150;
    setFinal(t);
    setIsDone(2);
  }
  return (
    <div>
      <h1></h1>{" "}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => generateBill()}
      >
        Generate Bill
      </button>{" "}
     
      <br></br>
      <br></br> 
      <h3>Coupons : </h3>{" "}
      <button type="button" className="btn btn-info" onClick={()=>getCoupon()}>
   
      </button>{" "}
      &nbsp;{" "}
      <button type="button" className="btn btn-info" onClick={() => tryNew()}>
        TryNew150
      </button>
      {isDone == 0 && <h1>Total Bill =Rs. {bil}</h1>}{" "}
      {isDone == 1 && <h1>Total Bill =Rs. {final}</h1>}{" "}
      {isDone == 2 && <h1>Total Bill =Rs. {final}</h1>}{" "}
    </div>
  );
}
export default Bill;
