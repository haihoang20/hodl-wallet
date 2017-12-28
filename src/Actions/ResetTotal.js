import { RESET_TOTAL } from "../Utils/ActionTypes";

export default function ResetTotal() {
  return dispatch => {
    dispatch({ type: RESET_TOTAL });
  }
}