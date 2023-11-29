import { config } from "../../config/api.config";
import request from "../../config/api.core";
import { OPTIONS_HTTP } from "../../constants/apiConfig.constant";
import { MOVIES_TYPE } from "./types";

export const GET_NOW_PLAYING = () => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.NOW_PLAYING,
    payload: request(config, OPTIONS_HTTP.GET, "movies.nowPlaying"),
  });
};
export const GET_DETAIL = (params) => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.DETAIL,
    payload: request(config, OPTIONS_HTTP.GET, "movie.detail", params),
  });
};

export const GET_DISCOVER = () => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.DISCOVER,
    payload: request(config, OPTIONS_HTTP.GET, "movies.discover"),
  });
};
