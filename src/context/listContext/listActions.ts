
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

// export const createVideoStart = () => ({
//   type: "CREATE_VIDEO_START",
// });
// export const createVideoSuccess = (video: VideoOutput) => ({
//   type: "CREAT_VIDEO_SUCCESS",
//   payload: video,
// });
// export const createVideoFailure = () => ({
//   type: "CREAT_VIDEO_FAILURE",
// });
// export const updateVideoStart = () => ({
//   type: "UPDATE_VIDEO_START",
// });
// export const updateVideoSuccess = (video: VideoOutput) => ({
//   type: "UPDATE_VIDEO_SUCCESS",
//   payload: video,
// });
// export const updateVideoFailure = () => ({
//   type: "UPDATE_VIDEO_FAILURE",
// });
