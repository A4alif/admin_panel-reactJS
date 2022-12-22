import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns, userRows} from '../../dummydata/datatablesource'
import { Link } from "react-router-dom";

const Datatable = () => {
    
  const actionColumn = [
    {
      field: "action",
      headerName : "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/users/id"} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
            </Link>
            <div  className="deleteButton">Delete</div>
          </div>
        )
      }
    },
  ]
  return (
    <>
      <div className="datatable">
        <div className="dataTableTitle">
          Add New User
          <Link to={"/users/new"} className="link">
            Add New
          </Link>
        </div>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Datatable;
