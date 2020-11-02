import { combineReducers } from 'redux';
import helloReducer from './helloReducer';
// import singlePlayerReducer from './singlePlayerReducer';

const rootReducer = combineReducers({
  hello: helloReducer
  // singlePlayerReducer: singlePlayerReducer
});

export default rootReducer;
