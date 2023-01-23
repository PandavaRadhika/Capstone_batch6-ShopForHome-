import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function GetDiscountByCouponName() {
const navigate=useNavigate();

const [discount, setDiscount] = useState({

  discountCouponName:""
     })
const handleChange = (e)=>{
  const name = e.target.name;
  const value = e.target.value;

  setDiscount({...discount,[name]:value});

  console.log(discount)}

  const [data, setData] = useState([]);
  const[cartData,setCartData]=useState([]);

  const productApi=()=>{
    fetch("http://localhost:8082/discount/getDiscountByCouponName/"+discount.discountCouponName)
    .then((response) => response.json())

    .then((jsonData) => {
      console.log(jsonData);

      setData(jsonData);
    });
  }

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg nb ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SHOP FOR HOME</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/UserMenu' className="nav-link">User Menu</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetAllProductsInCart' className="nav-link">My Cart</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetAllWishList' className="nav-link">My WishList</Link>
              </li>
              <li class="nav-item">
                <Link to='/GetProductByCategory' className="nav-link active">Search by Category</Link>
              </li>
            </ul>
          </div>
          <button className='btn' onClick={()=>{navigate('/')}}>Logout</button>
        </div>
      </nav>
      </div>
      <form>
               <label htmlFor='discountCouponName'>Product discountCouponName</label>
                <input  type="text" className="form-control" name="discountCouponName" placeholder="Enter the discountCouponName" value={discount.discountCouponName} onChange={handleChange} /><br />

            </form>
          <button type="submit" className='btn btn-warning' onClick={productApi} >Submit</button>

                 <h1> {data.discountId}</h1>
                  <h1>{data.discountCouponName}</h1>
                  <h1> {data.discountAmount}</h1>
                  <h1> {data.userId}</h1>


    </div>
  )
}

export default GetDiscountByCouponName