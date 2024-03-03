import React from "react";
import classes from "./Video.module.css";
import { Link, useLocation } from "react-router-dom";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import { VideoOutput } from "../../context/videoContext/videoActions";

const Video = () => {
  const location = useLocation();
  const videoObj: VideoOutput = location.state;
  return (
    <div className={classes.product}>
      <div className={classes.productTitleContainer}>
        <h1 className={classes.productTitle}>Video</h1>
        <Link to="/newProduct">
          <button className={classes.productAddButton}>Create</button>
        </Link>
      </div>
      <div className={classes.productTop}>
        {/* <div className={classes.productTopLeft}>
            <Chart data={productData} dataKey="Sales" title="Sales Performance" grid={false} />
          </div> */}
        <div className={classes.productTopRight}>
          <div className={classes.productInfoTop}>
            <img
              src={videoObj.imgThumbnail}
              alt=""
              className={classes.productInfoImg}
            />
            <span className={classes.productName}>{videoObj.title}</span>
          </div>
          <div className={classes.productInfoBottom}>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>id:</span>
              <span className={classes.productInfoValue}>{videoObj._id}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>genre:</span>
              <span className={classes.productInfoValue}>{videoObj.genre}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>year:</span>
              <span className={classes.productInfoValue}>{videoObj.year}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>limit:</span>
              <span className={classes.productInfoValue}>{videoObj.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.productBottom}>
        <form className={classes.productForm}>
          <div className={classes.productFormLeft}>
            <label>Video Title</label>
            <input type="text" placeholder={videoObj.title} />
            <label>Year</label>
            <input type="text" placeholder={videoObj.year} />
            <label>Genre</label>
            <input type="text" placeholder={videoObj.genre} />
            <label>Limit</label>
            <input type="number" placeholder={`${videoObj.limit}`} />
            <label>Trailer</label>
            <input type="file" placeholder={videoObj.trailer} />
            <label>Video</label>
            <input type="file" placeholder={videoObj.video} />
          </div>
          <div className={classes.productFormRight}>
            <div className={classes.productUpload}>
              <img
                src={videoObj.imgThumbnail}
                alt=""
                className={classes.productUploadImg}
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className={classes.productButton}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Video;
