import { SAY_HELLO_ACTION } from '../actions/types';

const helloState = {
  message: 'Hi'
};

const helloReducer = (state = helloState, action) => {
  switch (action.type) {
    case SAY_HELLO_ACTION:
      const { message } = action.payload;
      return { ...state, message };
    default:
      return state;
  }
};

export default helloReducer;
