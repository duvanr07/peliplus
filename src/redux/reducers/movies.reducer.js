import { MOVIES_TYPE } from "../actions/types";

const initialState = {
  loading: false,
  nowPlaying: [],
  discover: [],
  search: [],
  popular: [],
  upcoming: [],
  peoples: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${MOVIES_TYPE.NOW_PLAYING}_FULFILLED`:
      return {
        ...state,
        nowPlaying: action.payload.data.results,
      };

    case `${MOVIES_TYPE.DISCOVER}_FULFILLED`:
      return {
        ...state,
        discover: action.payload.data.results,
      };
    case `${MOVIES_TYPE.POPULAR}_FULFILLED`:
      return {
        ...state,
        popular: action.payload.data.results,
      };
    case `${MOVIES_TYPE.UPCOMING}_FULFILLED`:
      return {
        ...state,
        upcoming: action.payload.data.results,
      };

    case `${MOVIES_TYPE.PEOPLES}_FULFILLED`:
      return {
        ...state,
        peoples: action.payload.data.results,
      };

    case `${MOVIES_TYPE.SEARCH}_FULFILLED`:
      return {
        ...state,
        search: action.payload.data.results,
      };

    default:
      return state;
  }
};

export default moviesReducer;
