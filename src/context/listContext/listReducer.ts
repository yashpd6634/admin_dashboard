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
    case "CREATE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_LIST_SUCCESS":
      return {
        lists: [...(state.list || []), action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_LIST_SUCCESS":
      return {
        lists: state.lists?.map((list: any) =>
          typeof action.payload === "object" && list._id === action.payload._id
            ? action.payload
            : list
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_VIDEO_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
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
