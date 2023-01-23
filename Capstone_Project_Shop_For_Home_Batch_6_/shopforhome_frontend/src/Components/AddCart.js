
import React, { Component } from "react";

export default class AddCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartId: "",
      userId:  "",
      productName:"",
      productId:"",
      quantity:"",
      category:"",
      totalPrice:""

    }
  }
  addCartApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8081/mycart/addproducttocart", {
      method: "POST",
      body: JSON.stringify({
        
        cartId:this.props.cartId,
        userId: this.props.userId,
        productName:this.props.productName,
        category:this.props.category,
        productId:this.props.productId,
        quantity:Number(this.props.quantity),
        totalPrice:Number(this.props.productPrice*this.props.quantity)
        
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

   
    alert("order placed  successfully");

    
  };

  render() {
    return (
      <div>
          <button type="submit" className="btn btn-primary" onClick={this.addCartApi}>Add To Cart</button>
      </div>
    );
  }
}
