import React from 'react'
import classes from "./ProductList.module.css"
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id: number) => {
        setData(data.filter((item) => item.id !== id))
      };

      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
          return (
            <div className={classes.productListItem}>
                <img className={classes.productListImg} src={params.row.img} alt='' />
                {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/product/"+params.row.id}>
                <button className={classes.productListEdit}>Edit</button>
              </Link>
              <DeleteOutline className={classes.productListDelete} onClick={() => handleDelete(params.row.id)} />
              </>
            )
          }
        }
      ];

    return (
        <div className={classes.productList}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { pageSize: 8 } },
            }}
            pageSizeOptions={[8]}
            disableRowSelectionOnClick
            checkboxSelection
          />
        </div>
      );
}

export default ProductList