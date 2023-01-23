import React, { useState,useEffect } from "react";
import { BsCart4,BsFillSuitHeartFill,BsMenuButtonWide} from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BiLogOut} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import AddOrder from "./AddOrder";
import DeleteCart from "./DeleteCart";
import UserFooter from "./UserFooter";

function GetAllProductsInCart() {
  
    const [data, setData] = useState([]);
    const [totalprice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
  
    const current= new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  function getApi() {
    fetch("http://localhost:8081/mycart/getallcartproductsincart")
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  }
  const handlePrice = () => {
    let total = 0;
    data.map((item) => (total += item.totalPrice));
    setTotalPrice(total);
    alert(`press placeorder if you want to confirm order`)
  };
  useEffect(() => {
    getApi();
    
  },[]);
  return (
    <>
    <div >
        <nav class="navbar navbar-expand-lg nb ">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
    <img  src={"https://www.bing.com/th?id=OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" } width="80px" class="d-inline-block align-top" alt=""/>

  </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/UserMenu' className="nav-link"><BsMenuButtonWide></BsMenuButtonWide>User Menu</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetAllProductsInCart' className="nav-link active"><BsCart4></BsCart4>My Cart</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetAllWishList' className="nav-link"><BsFillSuitHeartFill></BsFillSuitHeartFill>My WishList</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetProductByCategory' className="nav-link"><BiSearchAlt></BiSearchAlt>Search by Category</Link>
              </li>
            </ul>
          </div>
          <button className='btn' onClick={()=>{navigate('/')}}><BiLogOut></BiLogOut>Logout</button>
        </div>
      </nav>
      </div>
      <div className="ad">
    <div className="container col-md-7 bt-5 ">
      <h1 style={{  textAlign: "center" }}>
        Cart
      </h1>

     
      <br />

      <table className="table table-striped col-mdcd-7">
        <thead>
          <tr>
            <th>Cart ID</th><th>Product Id</th> <th>Product Name</th> <th>Quantity</th> <th>Total Price</th><th>Delete </th>{" "}
          </tr>{" "}
        </thead>

        <tbody>
          {data.map((item) => {
            return (

              <tr key={item.productId}>
                {" "}
                <td>{item.cartId}</td>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td> {item.quantity}</td> 
                <td>{item.totalPrice}</td>
              
                <td><DeleteCart cartId={item.cartId}>Delete Cart</DeleteCart></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-warning" onClick={handlePrice}>Checkout</button>
      <AddOrder totalBill={totalprice} date={date}></AddOrder>
      <div style={{textAlign:"end " ,border: '1px solid ' }}>
          <span >
            <h3>{date}</h3>
            <h3>Total Bill </h3>
          </span>

          <span><h2>{totalprice}</h2></span>
        </div>
        <button className="btn btn-info" onClick={()=>{setTotalPrice(totalprice-100)}}>Republicday100</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-info" onClick={()=>
          {
            if(totalprice>5000)
            {
              setTotalPrice(totalprice-1000)
              alert("congratulations you are eligible")
            }
            else{
              alert("Sorry you are not eligible")
            }
          }}>Price5000</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-info" onClick={()=>
          {
            if(totalprice>2000)
            {
              setTotalPrice(totalprice-500)
              alert("congratulations you are eligible")
            }
            else{
              alert("Sorry you are not eligible")
            }
          }}>Price2000</button>
        </div>
    </div>
    <UserFooter></UserFooter>
    </>
  );
}

export default GetAllProductsInCart;
