import React, { useContext, useState } from "react";
import classes from "./NewVideo.module.css";
import storage from "../../firebase";
import { createVideo } from "../../context/videoContext/ApiCalls";
import { VideosContext } from "../../context/videoContext/videoContext";
import { VideoOutput } from "../../context/videoContext/videoActions";

const NewVideo = () => {
  const [videoObj, setVideoObj] = useState<VideoOutput>({} as VideoOutput);
  const [imgFeatured, setImgFeatured] = useState<any>(null);
  const [imgTitle, setImgTitle] = useState<any>(null);
  const [imgThumbnail, setImgThumbnail] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>(null);
  const [video, setVideo] = useState<any>(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(VideosContext);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setVideoObj({ ...videoObj, [e.target.name]: value });
  };

  const handleFileChange = (
    e: any,
    setFile: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const file = e.target.files[0];
    setFile(file);

    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   const base64String = reader.result;
    //   setFile(base64String as string);
    // };
    // reader.readAsDataURL(file);
  };

  const upload = (items: any) => {
    items.forEach((item: any) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done.");
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setVideoObj((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e: any) => {
    e.preventDefault();
    upload([
      { file: imgFeatured, label: "imgFeatured" },
      { file: imgThumbnail, label: "imgThumbnail" },
      { file: imgTitle, label: "imgTitle" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createVideo(videoObj, dispatch);
  };

  console.log(videoObj);
  return (
    <div className={classes.newProduct}>
      <h1 className={classes.addProductTitle}>New Video</h1>
      <form className={classes.addProductForm}>
        <div className={classes.addProductItem}>
          <label>Image</label>
          <input
            type="file"
            id="imgFeatured"
            name="imgFeatured"
            onChange={(e) => handleFileChange(e, setImgFeatured)}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Title Image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => handleFileChange(e, setImgTitle)}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgThumbnail"
            name="imgThumbnail"
            onChange={(e) => handleFileChange(e, setImgThumbnail)}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Year</label>
          <input
            type="text"
            placeholder="year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Genre</label>
          <input
            type="text"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Duration</label>
          <input
            type="text"
            placeholder="duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className={classes.addProductItem}>
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => handleFileChange(e, setTrailer)}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => handleFileChange(e, setVideo)}
          />
        </div>
        {uploaded === 5 ? (
          <button className={classes.addProductButton} onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className={classes.addProductButton} onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};

export default NewVideo;
