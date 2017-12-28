import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import TotalReducer from './TotalReducer';

export default combineReducers({
  crypto: CryptoReducer,
  total: TotalReducer
});