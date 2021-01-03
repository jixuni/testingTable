import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function Demo() {
  // using functional component instead of a class component
  // it makes things a little more elegant without a large overhead isntead if you have a very complex react state
  //Here im using react hook useState to initialize my state as an empty array.

  // using hooks you initialize the state with useState - here im initialize an empty array
  // useState needs 2 variables to be declare
  //apiData is the "count/value of the current state"
  //setApiData is the "counter/function" use to update the state - think of it as setState
  const [apiData, setApiData] = useState([]);

  //useEffect think of it as a lifecycle method for class component, instead of using component did mount
  //useEffect takes a callback of an empty array so this so the fetch() is only render 1 time after the initial render
  // you can pass a variable like state/variable, this will make it call useeffect again when the value change e.g [props.value]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => setApiData(data.splice(0, 5)))
      .catch(err => console.log("error", err));
  }, []);

  const columns = [
    { field: "id", headerName: "id", width: 70 },
    { field: "name", headerName: "name", width: 90 },
    { field: "email", headerName: "email", width: 130 },
    { field: "body", headerName: "body", width: 130 },
  ];

  return (
    <div style={{ height: 400, width: "80%" }}>
      <DataGrid
        oncli
        columns={columns}
        rows={apiData}
        checkboxSelection
        rowsPerPageOptions={false}
        hideFooterPagination={true}
        hideFooterRowCount={true}
      ></DataGrid>
    </div>
  );
}
