

import React from "react";

function Delete(props) {
  const deleteApi = () => {
    fetch("http://localhost:8081/product/deleteProduct/" + props.productId, {
      method: "DELETE",
    }).then((res) => {
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
        value={props.productId}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;

