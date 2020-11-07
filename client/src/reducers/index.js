import { combineReducers } from 'redux';
import dicesReducer from './dicesReducer';
import singlePlayerReducer from './singlePlayerReducer';

const rootReducer = combineReducers({
  dices: dicesReducer,
  singlePlayer: singlePlayerReducer
});

export default rootReducer;
