import { combineReducers } from 'redux';
import dicesReducer from './dicesReducer';
// import singlePlayerReducer from './singlePlayerReducer';

const rootReducer = combineReducers({
  dices: dicesReducer
  // singlePlayerReducer: singlePlayerReducer
});

export default rootReducer;
