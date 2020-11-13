import {
  FILL_FIELD,
  FILL_UPPER_SUM,
  FILL_MIDDLE_SUM,
  FILL_BOTTOM_SUM
} from '../actions/types';

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
      return fillFieldReducer(state, action);
    case FILL_UPPER_SUM:
      return fillUpperSumReducer(state, action);
    case FILL_MIDDLE_SUM:
      return fillMiddleSumReducer(state, action);
    case FILL_BOTTOM_SUM:
      return fillBottomSumReducer(state, action);
    default:
      return state;
  }
};

function fillFieldReducer(state, action) {
  let { field, name, value } = action.payload;
  let objToFill = state[name];
  objToFill[field] = value;
  return { ...state, [state[name]]: objToFill };
}

function fillUpperSumReducer(state, action) {
  let { name } = action.payload;
  let objToFill = state[name];

  let upperSum = 0;
  let allExist = true;
  let upperNames = ['one', 'two', 'three', 'four', 'five', 'six'];

  upperNames.forEach(val => {
    upperSum += objToFill[val];
    allExist = objToFill[val] === null ? false : true;
  });

  if (upperSum >= 60 && allExist) {
    upperSum += 30;
  }

  objToFill['upperSum'] = upperSum;
  return { ...state, [state[name]]: objToFill };
}
function fillMiddleSumReducer(state, action) {
  let { name } = action.payload;
  let objToFill = state[name];
  let middleSum = null;
  let allExist = true;
  let middleNames = ['one', 'max', 'min'];

  middleNames.forEach(val => {
    allExist = objToFill[val] === null ? false : true;
  });

  if (allExist) {
    middleSum = (objToFill['max'] - objToFill['min']) * objToFill['one'];
  }

  objToFill['middleSum'] = middleSum;
  return { ...state, [state[name]]: objToFill };
}
function fillBottomSumReducer(state, action) {
  let { name } = action.payload;
  let objToFill = state[name];
  let bottomSum = 0;
  let bottomNames = ['kenta', 'triling', 'ful', 'poker', 'jamb'];

  bottomNames.forEach(val => {
    if (objToFill[val] !== null) {
      bottomSum += objToFill[val];
    }
  });

  objToFill['bottomSum'] = bottomSum;
  return { ...state, [state[name]]: objToFill };
}

export default singlePlayerReducer;
