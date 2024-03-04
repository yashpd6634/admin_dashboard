import React from "react";
import classes from "./List.module.css";
import { Link, useLocation } from "react-router-dom";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

const List = () => {
  const location = useLocation();
  const list: any = location.state;
  return (
    <div className={classes.product}>
      <div className={classes.productTitleContainer}>
        <h1 className={classes.productTitle}>List</h1>
        <Link to="/newList">
          <button className={classes.productAddButton}>Create</button>
        </Link>
      </div>
      <div className={classes.productTop}>
        {/* <div className={classes.productTopLeft}>
            <Chart data={productData} dataKey="Sales" title="Sales Performance" grid={false} />
          </div> */}
        <div className={classes.productTopRight}>
          <div className={classes.productInfoTop}>
            <span className={classes.productName}>{list.title}</span>
          </div>
          <div className={classes.productInfoBottom}>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>id:</span>
              <span className={classes.productInfoValue}>{list._id}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>genre:</span>
              <span className={classes.productInfoValue}>{list.genre}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>type:</span>
              <span className={classes.productInfoValue}>{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.productBottom}>
        <form className={classes.productForm}>
          <div className={classes.productFormLeft}>
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className={classes.productFormRight}>
            <button className={classes.productButton}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
