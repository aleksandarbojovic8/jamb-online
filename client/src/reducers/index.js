import { combineReducers } from 'redux';
import helloReducer from './helloReducer';

const rootReducer = combineReducers({
  hello: helloReducer
});

export default rootReducer;
