import axios from "axios";
import {
  deleteVideoFailure,
  deleteVideoStart,
  deleteVideoSuccess,
  getVideosFailure,
  getVideosStart,
  getVideosSuccess,
} from "./videoActions";
import { ActionType } from "./videoReducer";
import { UserOutput } from "../authContext/AuthActions";

export const getVideos = async (dispatch: React.Dispatch<ActionType>) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const user = (
    userFromLocalStorage !== null ? JSON.parse(userFromLocalStorage) : null
  ) as UserOutput | null | undefined;

  dispatch(getVideosStart());
  try {
    const res = await axios.get("/videos", {
      headers: {
        token: "Bearer " + user?.accessToken,
      },
    });
    dispatch(getVideosSuccess(res.data));
  } catch (err) {
    dispatch(getVideosFailure());
  }
};

export const deleteVideo = async (
  id: string,
  dispatch: React.Dispatch<ActionType>
) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const user = (
    userFromLocalStorage !== null ? JSON.parse(userFromLocalStorage) : null
  ) as UserOutput | null | undefined;

  dispatch(deleteVideoStart());
  try {
    await axios.delete("/videos/" + id, {
      headers: {
        token: "Bearer " + user?.accessToken,
      },
    });
    dispatch(deleteVideoSuccess(id));
  } catch (err) {
    dispatch(deleteVideoFailure());
  }
};
