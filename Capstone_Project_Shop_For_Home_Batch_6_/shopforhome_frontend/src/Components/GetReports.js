import React, { useState } from "react";

function GetReports() {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [data, setData] = useState([]);
  const getReports = () => {
    fetch("http://localhost:8081/orders/getreportsbydate/" + one + "/" + two)
      .then((response) => response.json())

      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      });
  };

  return (
    <>
      <form className="container bg-info col-md-5" onSubmit={getReports}>
        <h1>Get Reports</h1>
        <div className="form-group">
          <label>From</label>
          <input
            value={one}
            className="form-control"
            placeholder="Enter yyyy/mm/dd"
            onChange={(e) => setOne(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>To</label>
          <input
            value={two}
            className="form-control"
            placeholder="Enter yyyy/mm/dd"
            onChange={(e) => setTwo(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-dark">
          Generate Report
        </button>
      </form>

      {data.map((item) => {
        return (
          <tr key={item.orderId}>
            {" "}
            <td>{item.orderId}</td>
            <td>{item.date}</td>
            <td>{item.totalBill}</td>
          </tr>
        );
      })}
    </>
  );
}

export default GetReports;
