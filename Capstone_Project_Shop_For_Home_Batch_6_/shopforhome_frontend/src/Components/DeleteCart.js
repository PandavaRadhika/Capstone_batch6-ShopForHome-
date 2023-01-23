

import React from "react";

function DeleteCart(props) {
  const deleteApi = () => {
    fetch("http://localhost:8081/mycart/deletecart/" + props.cartId, {
      method: "DELETE",
    }).then((res) => {
      console.log(res.status);
      alert("cart  deleted successfully...");
    });
  };
  return (
    <div>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={deleteApi}
        value={props.cartId}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteCart;

