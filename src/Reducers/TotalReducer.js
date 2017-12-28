import { ADD_TOTAL, RESET_TOTAL } from '../Utils/ActionTypes'

const initialState = {
  amount: 0.0
};

export default function(state = initialState, action) {

  switch(action.type) {

    case ADD_TOTAL:
      return Object.assign({}, state, {
        amount: state.amount + action.payload
      });

    case RESET_TOTAL:
      return initialState;

    default:
      return state;
  }
}