import { Reducer } from "react";
import { VideoOutput } from "./videoActions";
import { VideosState } from "./videoContext";

export interface ActionType {
  type: string;
  payload?: VideoOutput[] | string;
}

export const VideosReducer: Reducer<VideosState, ActionType> = (
  state: VideosState,
  action: ActionType
) => {
  switch (action.type) {
    case "GET_VIDEOS_START":
      return {
        videos: [], // Specify the correct type for this property
        isFetching: true,
        error: false,
      };
    case "GET_VIDEOS_SUCCESS":
      return {
        videos: action.payload as VideoOutput[],
        isFetching: false,
        error: false,
      };
    case "GET_VIDEOS_FAILURE":
      return {
        videos: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_VIDEO_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_VIDEO_SUCCESS":
      return {
        videos:
          state.videos?.filter(
            (video) => video._id !== (action.payload as string)
          ) ?? [],
        isFetching: false,
        error: false,
      };
    case "DELETE_VIDEO_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
