import { ADD_TOTAL} from "../Utils/ActionTypes";

export default function AddToTotal(amount) {
  return dispatch => {
    dispatch({ type: ADD_TOTAL, payload: amount });
  }
}