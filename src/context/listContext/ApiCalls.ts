import axios from "axios";
import {
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./listActions";
import { ActionType } from "./listReducer";
import { UserOutput } from "../authContext/AuthActions";

export const getLists = async (dispatch: React.Dispatch<ActionType>) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const user = (
    userFromLocalStorage !== null ? JSON.parse(userFromLocalStorage) : null
  ) as UserOutput | null | undefined;

  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + user?.accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// export const createVideo = async (
//   lists: any,
//   dispatch: React.Dispatch<ActionType>
// ) => {
//   const userFromLocalStorage = localStorage.getItem("user");
//   const user = (
//     userFromLocalStorage !== null ? JSON.parse(userFromLocalStorage) : null
//   ) as UserOutput | null | undefined;

//   dispatch(createVideoStart());
//   try {
//     const res = await axios.post("/videos", video, {
//       headers: {
//         token: "Bearer " + user?.accessToken,
//       },
//     });
//     dispatch(createVideoSuccess(res.data));
//   } catch (err) {
//     dispatch(createVideoFailure());
//   }
// };
export const deleteList = async (
  id: string,
  dispatch: React.Dispatch<ActionType>
) => {
  const userFromLocalStorage = localStorage.getItem("user");
  const user = (
    userFromLocalStorage !== null ? JSON.parse(userFromLocalStorage) : null
  ) as UserOutput | null | undefined;

  dispatch(deleteListsStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + user?.accessToken,
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (err) {
    dispatch(deleteListsFailure());
  }
};
