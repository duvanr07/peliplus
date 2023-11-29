import { MOVIES_TYPE } from "../actions/types";

const initialState = {
  loading: false,
  loadingDetail: false,
  nowPlaying: [],
  discover: [],
  detailMovie: {
    id: null,
    title: null,
    overview: null,
    poster_path: "",
    genres: [],
  },
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${MOVIES_TYPE.NOW_PLAYING}_FULFILLED`:
      return {
        ...state,
        nowPlaying: action.payload.data.results,
      };
    case `${MOVIES_TYPE.DETAIL}_PENDING`:
      return {
        ...state,
        loadingDetail: true,
      };
    case `${MOVIES_TYPE.DETAIL}_FULFILLED`:
      return {
        ...state,
        detailMovie: action.payload.data,
        loadingDetail: false,
      };

    case `${MOVIES_TYPE.DISCOVER}_FULFILLED`:
      return {
        ...state,
        discover: action.payload.data.results,
      };

    default:
      return state;
  }
};
