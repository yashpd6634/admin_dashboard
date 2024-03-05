import React, { useContext, useEffect, useState } from "react";
import classes from "./NewList.module.css";
import storage from "../../firebase";
import { createVideo, getVideos } from "../../context/videoContext/ApiCalls";
import { VideosContext } from "../../context/videoContext/videoContext";
import { VideoOutput } from "../../context/videoContext/videoActions";
import { ListsContext } from "../../context/listContext/listContext";
import { createList } from "../../context/listContext/ApiCalls";
import { useNavigate } from "react-router-dom";

const NewList = () => {
  const [list, setList] = useState<any>(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListsContext);
  const { state, dispatch: dispatchVideo } = useContext(VideosContext);

  useEffect(() => {
    getVideos(dispatchVideo);
  }, [dispatchVideo]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e: any) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value
    );
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };

  console.log(list);
  return (
    <div className={classes.newProduct}>
      <h1 className={classes.addProductTitle}>New List</h1>
      <form className={classes.addProductForm}>
        <div className={classes.formLeft}>
          <div className={classes.addProductItem}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className={classes.addProductItem}>
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className={classes.addProductItem}>
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className={classes.formRight}>
          <div className={classes.addProductItem}>
            <label>Content</label>
            <select
              name="content"
              onChange={handleSelect}
              multiple
              style={{ height: "292px" }}
            >
              {state.videos?.map((video) => (
                <option key={video._id} value={video._id}>
                  {video.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className={classes.addProductButton} onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewList;
