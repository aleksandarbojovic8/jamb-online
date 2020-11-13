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

singlePlayerState.results = {
  fullUpperSum: 0,
  fullMiddleSum: 0,
  fullBottomSum: 0,
  fullSum: 0
};

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
  let { fieldName, columnName, fieldValue } = action.payload;
  let objToFill = state[columnName];
  objToFill[fieldName] = fieldValue;
  return { ...state, [state[columnName]]: objToFill };
}

function fillUpperSumReducer(state, action) {
  let { columnName } = action.payload;
  console.log(columnName);
  let objToFill = state[columnName];

  let upperSum = 0;
  let allExist = true;
  let upperNames = ['one', 'two', 'three', 'four', 'five', 'six'];
  console.log(upperNames);
  upperNames.forEach(val => {
    console.log(objToFill);
    upperSum += objToFill[val];
    if (objToFill[val] === null) {
      allExist = false;
    }
  });

  if (upperSum >= 60 && allExist) {
    upperSum += 30;
  }

  objToFill['upperSum'] = upperSum;
  return { ...state, [state[columnName]]: objToFill };
}

function fillMiddleSumReducer(state, action) {
  let { columnName } = action.payload;
  let objToFill = state[columnName];
  let middleSum = null;
  let allExist = true;
  let middleNames = ['one', 'max', 'min'];

  middleNames.forEach(val => {
    if (objToFill[val] === null) {
      allExist = false;
    }
  });

  if (allExist) {
    middleSum = (objToFill['max'] - objToFill['min']) * objToFill['one'];
  }

  objToFill['middleSum'] = middleSum;
  return { ...state, [state[columnName]]: objToFill };
}

function fillBottomSumReducer(state, action) {
  let { columnName } = action.payload;
  let objToFill = state[columnName];
  let bottomSum = 0;
  let bottomNames = ['kenta', 'triling', 'ful', 'poker', 'jamb'];

  bottomNames.forEach(val => {
    if (objToFill[val] !== null) {
      bottomSum += objToFill[val];
    }
  });

  objToFill['bottomSum'] = bottomSum;
  return { ...state, [state[columnName]]: objToFill };
}

export default singlePlayerReducer;
