import { Reducer } from "react";

export interface ActionType {
  type: string;
  payload?: any;
}

export const ListReducer: Reducer<any, ActionType> = (
  state: any,
  action: ActionType
) => {
  switch (action.type) {
    case "GET_LISTS_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "GET_LISTS_SUCCESS":
      return {
        lists: action.payload || [],
        isFetching: false,
        error: false,
      };
    case "GET_LISTS_FAILURE":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
    //   case "CREATE_VIDEO_START":
    //     return {
    //       ...state,
    //       isFetching: true,
    //       error: false,
    //     };
    //   case "CREATE_VIDEO_SUCCESS":
    //     return {
    //        lists: [...(state  lists || []), action.payload as VideoOutput],
    //       isFetching: false,
    //       error: false,
    //     };
    //   case "CREATE_VIDEO_FAILURE":
    //     return {
    //       ...state,
    //       isFetching: false,
    //       error: true,
    //     };
    //   case "UPDATE_VIDEO_START":
    //     return {
    //       ...state,
    //       isFetching: true,
    //       error: false,
    //     };
    //   case "UPDATE_VIDEO_SUCCESS":
    //     return {
    //        lists: state lists?.map((video) =>
    //         typeof action.payload === "object" &&
    //         video._id === (action.payload as VideoOutput)._id
    //           ? (action.payload as VideoOutput)
    //           : video
    //       ),
    //       isFetching: false,
    //       error: false,
    //     };
    //   case "UPDATE_VIDEO_FAILURE":
    //     return {
    //       ...state,
    //       isFetching: false,
    //       error: true,
    //     };
    case "DELETE_LISTS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_LISTS_SUCCESS":
      return {
        lists:
          state.lists?.filter(
            (list: any) => list._id !== (action.payload as string)
          ) ?? [],
        isFetching: false,
        error: false,
      };
    case "DELETE_LISTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
