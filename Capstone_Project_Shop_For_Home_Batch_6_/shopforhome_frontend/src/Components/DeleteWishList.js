import React from "react";

function DeleteWishList(props) {
  const deleteApi = () => {
    fetch(
      "http://localhost:8081/mywishlist/deleteProductInWishList/" +
        props.wishListId,
      {
        method: "DELETE",
      }
    ).then((res) => {
      console.log(res.status);
      alert("item deleted successfully...");
    });
  };
  return (
    <div>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={deleteApi}
        value={props.wishListId}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteWishList;
