import React, { useState } from "react";
import Papa from "papaparse";

function BulkUpload() {
  const [parsedData, setParsedData] = useState([]);

  const [tableRows, setTableRows] = useState([]);

  const [values, setValues] = useState([]);
  const [data, setData] = useState({
    productId: "",
    productName: "",
    productPrice: "",
    quantity: "",
    category: "",
    stock:""
  });
  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,

      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setParsedData(results.data);

        setTableRows(rowsArray[0]);

        setValues(valuesArray);
        console.log(valuesArray[0][1]);

        for (let n = 0; n < 5; n++) {
          fetch("http://localhost:8081/product/addProduct", {
            method: "POST",
            body: JSON.stringify({
              productId: valuesArray[n][0],
              productName: valuesArray[n][1],
              productPrice: valuesArray[n][2],
              quantity: valuesArray[n][3],
              category: valuesArray[n][4],
              stock: valuesArray[n][5],
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {console.log(data);
            }
            );
        }
       
      },
    });
  };
  return (
    <div   style={{backgroundColor:"skyblue"}}>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />

      <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default BulkUpload;
