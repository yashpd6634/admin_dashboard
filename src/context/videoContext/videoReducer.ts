import { Reducer } from "react";
import { VideoOutput } from "./videoActions";
import { VideosState } from "./videoContext";

export interface ActionType {
  type: string;
  payload?: VideoOutput[];
}

export const VideosReducer: Reducer<VideosState, ActionType> = (state: VideosState, action: ActionType) => {
  switch (action.type) {
    case "GET_VIDEOS_START":
      return {
        videos: [],
        isFetching: true,
        error: false,
      };
    case "GET_VIDEOS_SUCCESS":
      return {
        videos: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_VIDEOS_FAILURE":
      return {
        videos: [],
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
