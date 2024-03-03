export interface VideoInput {
    title: string;
    desc: string;
    imgFeatured: string;
    imgTitle: string;
    imgThumbnail: string;
    trailer: string;
    video: string;
    year: string;
    limit: number;
    genre: string;
    isSeries: boolean;
  }
  
  export interface VideoOutput extends VideoInput {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };

export const getVideosStart = () => ({
    type: "GET_VIDEOS_START",
  });
  export const getVideosSuccess = (videos: VideoOutput[]) => ({
    type: "GET_VIDEOS_SUCCESS",
    payload: videos,
  });
  export const getVideosFailure = () => ({
    type: "GET_VIDEOS_FAILURE",
  });
export const deleteVideoStart = () => ({
    type: "DELETE_VIDEO_START",
  });
  export const deleteVideoSuccess = (id: string) => ({
    type: "DELETE_VIDEO_SUCCESS",
    payload: id,
  });
  export const deleteVideoFailure = () => ({
    type: "DELETE_VIDEO_FAILURE",
  });