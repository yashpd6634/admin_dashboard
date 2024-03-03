import axios from "axios";
import { getVideosFailure, getVideosStart, getVideosSuccess } from "./videoActions";
import { ActionType } from "./videoReducer";
import { UserOutput } from "../authContext/AuthActions";

const getVideos = async (videos: any, dispatch: React.Dispatch<ActionType>) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const user = (
    userFromLocalStorage !== null ? JSON.parse(userFromLocalStorage) : null
  ) as UserOutput | null | undefined;

  dispatch(getVideosStart());
  try {
    const res = await axios.get("/videos", {
      headers: {
        token: "Bearer " + user,
      },
    });
    dispatch(getVideosSuccess(res.data));
  } catch (err) {
    dispatch(getVideosFailure());
  }
};
