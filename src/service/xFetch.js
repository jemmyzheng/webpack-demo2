import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';

const errorMessages = res => `${res.status} ${res.statusText}`;

function check401(res) {
  if (res.status === 401) {
    location.href = '/401';
  }
  return res;
}

function check404(res) {
  if (res.status === 404) {
    return Promise.reject(errorMessages(res));
  }
  return res;
}

function jsonParse(res) {
  return res.json().then(jsonResult => ({ ...res, jsonResult }));
}

function errorMessageParse(res) {
  const { code, result } = res.jsonResult;
  if (code < 0) {
    return Promise.reject(result);
  }
  return res;
}

function xFetch(url, options) {
  if (__DEV__) {
    url = `/api${url}`; // eslint-disable-line
  }
  const opts = { ...options };
  opts.headers = {
    ...opts.headers,
    authorization: cookie.get('authorization') || '',
  };

  return fetch(url, opts)
    .then(check401)
    .then(check404)
    .then(jsonParse)
    .then(errorMessageParse);
}
export const post = function post(url, data, options) {
  const postOpt = { method: 'POST', body: JSON.stringify(data) };
  return xFetch(url, { ...options, postOpt });
};
export default xFetch;
