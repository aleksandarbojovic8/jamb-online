import { FILL_FIELD } from '../actions/types';

const obj = {
  one: null,
  two: null,
  three: null,
  four: null,
  five: null,
  six: null,
  upperSum: null,
  max: null,
  min: null,
  middleSum: null,
  kenta: null,
  triling: null,
  ful: null,
  poker: null,
  jamb: null,
  bottomSum: null
};

const singlePlayerState = {
  topToBottom: {},
  fromTopAndBottom: {},
  bottomToTop: {},
  //   annunciation: {},
  fromHand: {},
  //   alert: {},
  fromMiddle: {},
  toMiddle: {},
  //   lastCol: {},
  maxCol: {}
};

for (let x in singlePlayerState) {
  for (let y in obj) {
    singlePlayerState[x][y] = obj[y];
  }
}

const singlePlayerReducer = (state = singlePlayerState, action) => {
  switch (action.type) {
    case FILL_FIELD:
      let { field, name, value } = action.payload;
      let objToFill = state[name];
      objToFill[field] = value;
      return { ...state, [state[name]]: objToFill };
    default:
      return state;
  }
};

export default singlePlayerReducer;
