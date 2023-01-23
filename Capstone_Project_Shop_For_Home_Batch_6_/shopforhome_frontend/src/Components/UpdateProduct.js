import React, { Component } from "react";
export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      productName: "",
      productPrice: "",
      quantity: "",
      category: " ",
      productImg: "",
    };
    // create refs
    this.productImgRef = React.createRef();
    this.productIdRef = React.createRef();
    this.quantityRef = React.createRef();
    this.productNameRef = React.createRef();
    this.productPriceRef = React.createRef();
    this.categoryRef = React.createRef();
  }
  addItemApi = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8081/product/updateProduct", {
      method: "PUT",
      body: JSON.stringify({
        productImg: this.productImgRef.current.value,
        productId: this.productIdRef.current.value,
        quantity: this.quantityRef.current.value,
        productName: this.productNameRef.current.value,
        productPrice: Number(this.productPriceRef.current.value),
        category: this.categoryRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    alert("Product Added to Menu");
  };

  render() {
    return (
      <div>
        <form className="container col-md-5" onSubmit={this.addItemApi}>
          <div className="form-group">
            {" "}
            <label>Enter product Id</label>{" "}
            <input
              type="text"
              className="form-control"
              ref={this.productIdRef}
            />{" "}
          </div>
          <div className="form-group">
            {" "}
            <label>Enter The image url</label>{" "}
            <input
              type="text"
              className="form-control"
              ref={this.productImgRef}
            />{" "}
          </div>
          <div className="form-group">
            {" "}
            <label>Enter product Name</label>{" "}
            <input
              type="text"
              className="form-control"
              ref={this.productNameRef}
            />{" "}
          </div>

          <div className="form-group">
            {" "}
            <label>Enter product category</label>{" "}
            <input
              type="text"
              className="form-control"
              ref={this.categoryRef}
            />{" "}
          </div>
          <div className="form-group">
            {" "}
            <label>Enter quantity</label>{" "}
            <input
              type="text"
              className="form-control"
              ref={this.quantityRef}
            />{" "}
          </div>

          <div className="form-group">
            {" "}
            <label>Enter Product Price</label>{" "}
            <input
              type="number"
              className="form-control"
              ref={this.productPriceRef}
            />{" "}
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    );
  }
}
