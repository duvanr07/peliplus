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

export const SEARCH_MOVIES = (params) => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.SEARCH,
    payload: request(config, OPTIONS_HTTP.GET, "movies.search", params),
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

export const GET_POPULAR = () => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.POPULAR,
    payload: request(config, OPTIONS_HTTP.GET, "movies.popular"),
  });
};

export const GET_UPCOMING = () => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.UPCOMING,
    payload: request(config, OPTIONS_HTTP.GET, "movies.upcoming"),
  });
};

export const GET_PEOPLES = () => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.PEOPLES,
    payload: request(config, OPTIONS_HTTP.GET, "peoples.popularList"),
  });
};

export const GET_PEOPLE_DETAIL = (params) => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.PEOPLE_DETAIL,
    payload: request(config, OPTIONS_HTTP.GET, "peoples.detail",params),
  });
};

export const GET_KEYWORDS = (params) => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.KEYWORDS,
    payload: request(config, OPTIONS_HTTP.GET, "movie.keywords", params),
  });
};

export const GET_VIDEOS = (params) => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.VIDEOS,
    payload: request(config, OPTIONS_HTTP.GET, "movie.videos", params),
  });
};
export const GET_CREDITS = (params) => (dispatch) => {
  dispatch({
    type: MOVIES_TYPE.CREDITS,
    payload: request(config, OPTIONS_HTTP.GET, "movie.credits", params),
  });
};
