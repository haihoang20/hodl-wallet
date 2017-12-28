import axios from 'axios';
import {
  apiBaseUrl, convertCADUrl
} from '../Utils/Constants';

import { tokens } from '../Utils/Constants'

import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from '../Utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {

    dispatch({ type: FETCHING_COIN_DATA });

    return axios.all(createArrayOfCalls())
      .then(res => {
        let payload = res.map( r => r.data[0]);
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: payload })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err })
      });
  }
}

/**
 * Takes all of the tokens from the json blob and turns them into an array of axios calls
 * @returns Array[AxiosPromise]
 */
function createArrayOfCalls() {
  let callsArr = [];
  for (let key in tokens) {
    callsArr.push(axios.get(`${apiBaseUrl}${tokens[key].url}?${convertCADUrl}`));
  }
  return callsArr;
}