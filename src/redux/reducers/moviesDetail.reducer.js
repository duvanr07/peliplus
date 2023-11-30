import { MOVIES_TYPE } from "../actions/types";

const initialState = {
  id: null,
  title: null,
  overview: null,
  poster_path: "",
  genres: [],
  discover: [],
  keywords: [],
  videos: [],
  credits: [],
  loading: false,
  loadingKeywords: false,
  loadingVideos: false,
  loadingCredits: false,
};
const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${MOVIES_TYPE.DETAIL}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${MOVIES_TYPE.DETAIL}_FULFILLED`:
      return {
        ...state,
        ...action.payload.data,
        loading: false,
      };

    case `${MOVIES_TYPE.KEYWORDS}_PENDING`:
      return {
        ...state,
        loadingKeywords: true,
      };
    case `${MOVIES_TYPE.KEYWORDS}_FULFILLED`:
      return {
        ...state,
        keywords: action.payload.data.keywords,
        loadingKeywords: false,
      };

    case `${MOVIES_TYPE.VIDEOS}_PENDING`:
      return {
        ...state,
        loadingVideos: true,
      };
    case `${MOVIES_TYPE.VIDEOS}_FULFILLED`:
      return {
        ...state,
        videos: action.payload.data.results,
        loadingVideos: false,
      };

    case `${MOVIES_TYPE.CREDITS}_PENDING`:
      return {
        ...state,
        loadingVideos: true,
      };
    case `${MOVIES_TYPE.CREDITS}_FULFILLED`:
      return {
        ...state,
        credits: action.payload.data.cast,
        loadingVideos: false,
      };

    default:
      return state;
  }
};

export default movieDetailReducer;
