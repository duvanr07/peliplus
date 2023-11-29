import axios from "axios";
import qs from "qs";
import { get, isEmpty, merge, template } from "lodash";
import { OPTIONS_HTTP } from "../constants/apiConfig.constant";

const defaultOptions = { withCredentials: true };

const matchUrlParams = (url, params) => {
  return template(url)(params);
};

const createBaseURL = (config, endpointReference, params) => {
  const url = `${config.host}${get(config, `endpoints.${endpointReference}`)}`;
  return matchUrlParams(url, params);
};

const createHeaders = (settings) => {
  const defaultHeaders = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTQzMGM0MmNkMzdjY2Q4YzIzNGMyMTI2NTBmYTEzNSIsInN1YiI6IjY1NjIyY2EwMDI4ZjE0MDBlMTMwMjM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ors4nY5DeZXYyu_zYoQEveakDc9QRG9fRz8OeC6Ltk",
    "Content-Type": "application/json;charset=utf-8",
  };
  if (isEmpty(settings.headers)) {
    return {
      ...defaultHeaders,
    };
  }

  return merge({}, defaultHeaders, settings.headers);
};

const createConfig = (config, method, endpointReference, params, settings) => {
  const {
    isQueryString = false,
    cancelToken = null,
    withCredentials,
  } = settings;
  const defaultConfig = {
    url: createBaseURL(config, endpointReference, params),
    method,
    cancelToken,
    withCredentials,
    timeout: 1000 * 120, // Wait for 120 seconds
    headers: createHeaders(settings),
  };

  switch (method) {
    case OPTIONS_HTTP.GET:
      return {
        ...defaultConfig,
        params: { language: "es-CO", ...params },
        paramsSerializer: (params) => qs.stringify(params, { encode: false }),
      };
    case OPTIONS_HTTP.POST:
      return {
        ...defaultConfig,
        data: params,
      };
    case OPTIONS_HTTP.DELETE:
      return {
        ...defaultConfig,
        data: params,
        paramsSerializer: (params) =>
          isQueryString ? qs.stringify(params, { encode: false }) : null,
      };
    case OPTIONS_HTTP.PUT:
      return {
        ...defaultConfig,
        data: params,
        params,
        paramsSerializer: (params) =>
          isQueryString ? qs.stringify(params, { encode: false }) : null,
      };
    case OPTIONS_HTTP.PATCH:
      return {
        ...defaultConfig,
        data: params,
        params,
      };
  }

  return defaultConfig;
};

const request = async (
  config,
  method,
  endpointReference,
  params,
  settings = {}
) =>
  await axios(
    createConfig(config, method, endpointReference, params, settings),
    isEmpty(settings.options)
      ? defaultOptions
      : { ...defaultOptions, ...settings.options }
  );

export default request;

export const cancelToken = axios.CancelToken;
