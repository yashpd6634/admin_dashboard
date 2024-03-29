
export const getListsStart = () => ({
  type: "GET_LISTS_START",
});
export const getListsSuccess = (lists: any) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});
export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});
export const deleteListsStart = () => ({
  type: "DELETE_LISTS_START",
});
export const deleteListsSuccess = (id: string) => ({
  type: "DELETE_LISTS_SUCCESS",
  payload: id,
});
export const deleteListsFailure = () => ({
  type: "DELETE_LISTS_FAILURE",
});

export const createListStart = () => ({
  type: "CREATE_LIST_START",
});
export const createListSuccess = (list: any) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});
export const createListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});
export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});
export const updateListSuccess = (list: any) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: list,
});
export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
});
