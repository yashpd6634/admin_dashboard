import React, { useContext, useEffect } from "react";
import classes from "./VideosList.module.css";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { VideosContext } from "../../context/videoContext/videoContext";
import { deleteVideo, getVideos } from "../../context/videoContext/ApiCalls";

const VideosList = () => {
  const [data, setData] = useState(productRows);
  const { state: videoState, dispatch } = useContext(VideosContext);

  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);

  console.log(videoState.videos);

  const handleDelete = (id: string) => {
    deleteVideo(id, dispatch);
  };

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={classes.productListItem}>
            <img
              className={classes.productListImg}
              src={params.row.imgThumbnail}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/videos/" + params.row._id} state={params.row}>
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
        rows={videoState.videos ?? []}
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

export default VideosList;
