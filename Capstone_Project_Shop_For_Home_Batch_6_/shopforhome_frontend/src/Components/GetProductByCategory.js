import React, { useState } from "react";
import { BsFillSuitHeartFill, BsMenuButtonWide } from "react-icons/bs";
import { BiSearchAlt, BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import UserFooter from "./UserFooter";

// controlled components for forms
function GetProductByCategory() {
  const [details, setDetails] = useState({
    category: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails({ ...details, [name]: value });

    console.log(details);
  };

  const [data, setData] = useState([]);
  const productApi = () => {
    fetch("http://localhost:8081/product/getbycategory/" + details.category)
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);

        setData(jsonData);
      });
  };

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
                  <Link to="/UserMenu" className="nav-link">
                    {" "}
                    <BsMenuButtonWide></BsMenuButtonWide>User Menu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/GetAllProductsInCart" className="nav-link">
                    <BiSearchAlt></BiSearchAlt> My Cart
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/GetAllWishList" className="nav-link">
                    <BsFillSuitHeartFill></BsFillSuitHeartFill>My WishList
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/GetProductByCategory" className="nav-link active">
                    <BiSearchAlt></BiSearchAlt>Search by Category
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
              <BiLogOut></BiLogOut>Logout
            </button>
          </div>
        </nav>
      </div>
      <div className="al">
        <div className="container col-md-7">
          <h1>Get Product</h1>
          <form>
            <label htmlFor="category">Product category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              placeholder="Enter the category"
              value={details.category}
              onChange={handleChange}
            />
            <br />
          </form>
          <button
            type="submit"
            className="btn btn-warning"
            onClick={productApi}
          >
            Submit
          </button>

          <table className="table table-striped col-mdcd-7">
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
      </div>
      <UserFooter></UserFooter>
    </>
  );
}

export default GetProductByCategory;
