import {
  FILL_FIELD,
  FILL_UPPER_SUM,
  FILL_MIDDLE_SUM,
  FILL_BOTTOM_SUM
} from '../actions/types';
import {
  upperKeysArray,
  middleKeysArray,
  bottomKeysArray,
  fieldKeysNullHash,
  singlePlayerColumnNamesArray
} from '../constants';

const singlePlayerState = {};

singlePlayerColumnNamesArray.forEach(columnName => {
  return (singlePlayerState[columnName] = { ...fieldKeysNullHash });
});

singlePlayerState.rowResult = {
  fullUpperSum: 0,
  fullMiddleSum: 0,
  fullBottomSum: 0
};
singlePlayerState.fullResult = 0;

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
  let objToFill = state[columnName];

  let upperSum = 0;
  let allExist = true;

  upperKeysArray.forEach(val => {
    upperSum += objToFill[val];
    if (objToFill[val] === null) {
      allExist = false;
    }
  });

  if (upperSum >= 60 && allExist) {
    upperSum += 30;
  }

  objToFill['upperSum'] = upperSum;

  // let fullResult = calculateAllResults(state, 'fullUpperSum');

  return {
    ...state,
    [state[columnName]]: objToFill
    // fullResult
  };
}

function fillMiddleSumReducer(state, action) {
  let { columnName } = action.payload;

  let objToFill = state[columnName];
  let middleSum = null;
  let allExist = true;

  ['one', ...middleKeysArray].forEach(val => {
    if (objToFill[val] === null) {
      allExist = false;
    }
  });

  if (allExist) {
    middleSum = (objToFill['max'] - objToFill['min']) * objToFill['one'];
  }
  objToFill['middleSum'] = middleSum;

  // let fullResult = calculateAllResults(state, 'fullMiddleSum');

  return {
    ...state,
    [state[columnName]]: objToFill
    // fullResult
  };
}

function fillBottomSumReducer(state, action) {
  let { columnName } = action.payload;

  let objToFill = state[columnName];
  let bottomSum = 0;

  bottomKeysArray.forEach(val => {
    if (objToFill[val] !== null) {
      bottomSum += objToFill[val];
    }
  });

  objToFill['bottomSum'] = bottomSum;

  // let fullResult = calculateAllResults(state, 'fullBottomSum');

  return {
    ...state,
    [state[columnName]]: objToFill
    // fullResult
  };
}

// function calculateAllResults(state, sumType) {
//   const { rowResult } = state;
//   let rowSum = 0;

//   singlePlayerColumnNamesArray.forEach(columnName => {
//     let columnState = singlePlayerState[columnName];
//     if (columnState[sumType] !== null) {
//       rowSum += columnState[sumType];
//     }
//   });

//   rowResult[sumType] = rowSum;
//   let fullResult = 0;
//   for (let x in rowResult) {
//     if (rowResult[x] !== null) {
//       fullResult += rowResult[x];
//     }
//   }

//   return fullResult;
// }

export default singlePlayerReducer;
