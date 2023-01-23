
import React, { Component } from "react";
export default class AddToWishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      wishListId:  "",
      productName:"",
      productId:"",
      productPrice:""

    }
  }
  addCartApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8081/mywishlist/addWishList", {
      method: "POST",
      body: JSON.stringify({
        quantity:this.props.quantity,
        productPrice:this.props.productPrice,
        productName:this.props.productName,
        productId:this.props.productId,
        

        
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
   
    alert("Item Added to Menu");
  };

  render() {
    return (
      <div>
          <button type="submit" className="btn btn-primary" onClick={this.addCartApi}>Add To WishList</button>
      </div>
    );
  }
}
