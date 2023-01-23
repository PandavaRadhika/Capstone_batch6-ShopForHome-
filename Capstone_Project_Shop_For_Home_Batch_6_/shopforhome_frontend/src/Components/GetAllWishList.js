import React, { useEffect, useState } from "react";
import { BsCart4,BsFillSuitHeartFill,BsMenuButtonWide} from "react-icons/bs";
import { BiSearchAlt,BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import AddCart from "./AddCart";
import DeleteWishList from "./DeleteWishList";
import UserFooter from "./UserFooter";

function GetAllWishList(props) {
  const navigate=useNavigate();
    const [data, setData] = useState([]);
  function getApi() {
    fetch("http://localhost:8081/mywishlist/getAllProductsInWishList")
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  }
useEffect(()=>{
  getApi();
})
  return (
    <>
    <div>
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
                <Link to='/UserMenu' className="nav-link "><BsMenuButtonWide></BsMenuButtonWide>User Menu</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetAllProductsInCart' className="nav-link"><BsCart4></BsCart4>My Cart</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetAllWishList' className="nav-link active"><BsFillSuitHeartFill></BsFillSuitHeartFill>My WishList</Link>
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
    <div className="container col-md-8 bt-5 ">
      <h1 style={{  textAlign: "center" }}>
        WishList
      </h1>

      {/* <button type="submit" onClick={getApi} className="btn btn-warning">
        Display All Products in wish List
      </button> */}
      <br />

      <table className="table table-striped col-mdcd-4">
        <thead>
          <tr>
            <th>wishListId</th><th>ProductID</th> <th>ProductName</th>  <th>Product Price</th><th>quantity</th> <th>Add to cart</th><th>Delete</th>{" "}
          </tr>{" "}
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.wishListId}>
                {" "}
                <td>{item.wishListId}</td>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                
                <td>{item.productPrice}</td>
                <td>{item.quantity}</td>
                
                 <td><AddCart productId={item.productId}  productName={item.productName} productPrice={item.productPrice}  quantity={item.quantity} totalprice={item.quantity*item.productPrice} ></AddCart></td>{" "} 
                 <td><DeleteWishList wishListId={item.wishListId}></DeleteWishList></td> 

              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>{props.quantity}</h1>
      
    </div>
    <UserFooter></UserFooter>

    </div>
    </>
  );
}

export default GetAllWishList;
