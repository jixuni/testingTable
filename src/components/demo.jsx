import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function Demo() {
  const [apiData, setApiData] = useState([]);

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
