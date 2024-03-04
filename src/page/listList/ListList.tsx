import React, { useContext, useEffect } from "react";
import classes from "./ListList.module.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ListsContext } from "../../context/listContext/listContext";
import { deleteList, getLists } from "../../context/listContext/ApiCalls";

const ListList = () => {
  const { state: listsState, dispatch } = useContext(ListsContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  console.log(listsState.lists);

  const handleDelete = (id: string) => {
    deleteList(id, dispatch);
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/lists/" + params.row._id} state={params.row}>
              <button className={classes.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes.productListDelete}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={classes.productList}>
      <DataGrid
        rows={listsState.lists ?? []}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 8 } },
        }}
        pageSizeOptions={[8]}
        disableRowSelectionOnClick
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default ListList;
