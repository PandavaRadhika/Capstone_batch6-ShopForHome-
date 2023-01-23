import { BsCart4,BsFillSuitHeartFill,BsMenuButtonWide} from "react-icons/bs";
import { BiSearchAlt ,BiLogOut} from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddCart from "./AddCart";
import AddToWishList from "./AddToWishList";
import UserFooter from "./UserFooter"
import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap";
function UserMenu() {
  const navigate = useNavigate();
  const columnsPerRow = 3;
  const [data, setData] = useState([]);
  const [quantity, setquantity] = useState(1);

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
    <>
      <div>
        <nav class="navbar navbar-expand-lg nb ">
          <div class="container-fluid">
           
          <a class="navbar-brand" href="#">
    <img  src={"https://www.bing.com/th?id=OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" } width="80px" class="d-inline-block align-top" alt=""/>

  </a>
         
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/UserMenu" className="nav-link active">
                   <BsMenuButtonWide></BsMenuButtonWide> User Menu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/GetAllProductsInCart" className="nav-link">
                  <BsCart4></BsCart4>mycart
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/GetAllWishList" className="nav-link">
                    <BsFillSuitHeartFill></BsFillSuitHeartFill>My WishList
                  </Link>
                </li>
                <br></br>
                <li class="nav-item" >
                  <Link to="/GetProductByCategory" className="nav-link">
                  <BiSearchAlt></BiSearchAlt> Search by Category
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="btn"
              onClick={() => {
                navigate("/");
              }}
            >
             <BiLogOut></BiLogOut> Logout
            </button>
          </div>
        </nav>
      </div>
              <div>

              <Container>
              <Row xs={1} md={columnsPerRow}>
      {data.map((item) => {
        return (
                 <div>
            <div class="row">
              <div class="col-sm">
                <div class="card d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title">{item.productName}</h5>
                    <img
                      src={item.productImg}
                      className="card-img-top"
                      alt="Property1"
                    />
                    <h5 className="card-title">Product Id :{item.productId}</h5>
                    <p className="card-text">
                      <br></br>ProductPrice=<b>{item.productPrice}</b>
                      <br></br>category=<b>{item.category}</b> <br></br>
                      quantity=
                      <b>
                        <input
                          type="number"
                          name="plates"
                          value={quantity}
                          onChange={(e) => {
                            setquantity(e.currentTarget.value);
                          }}
                        />
                      </b>
                    </p>
                    <AddCart
                      productId={item.productId}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      quantity={quantity}
                      category={item.category}
                      stock={item.stock}
                    ></AddCart>
                    <br></br>
                    <AddToWishList
                      productId={item.productId}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      quantity={quantity}
                    ></AddToWishList>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
            </div>
          </div>
        );
      }
      )}
      </Row>
      </Container>
      </div>
      <UserFooter></UserFooter>
    </>
  );
}

export default UserMenu;
