import {
  ROLL_DICES,
  SELECT_DICE,
  UNSELECT_ALL_DICE,
  RESET_ROLL_COUNT
} from '../actions/types';

const dicesState = {
  dicesSelected: [false, false, false, false, false, false],
  dicesValue: [1, 1, 1, 1, 1, 1],
  turnNumber: 1
};

const dicesReducer = (state = dicesState, action) => {
  switch (action.type) {
    case ROLL_DICES:
      return rollDicesReducer(state, action);
    case SELECT_DICE:
      return selectDiceReducer(state, action);
    case UNSELECT_ALL_DICE:
      return unselectAllDiceReducer(state, action);
    case RESET_ROLL_COUNT:
      return resetRollCountReducer(state, action);
    default:
      return state;
  }
};

function rollDicesReducer(state, action) {
  const { dicesSelected, dicesValue, turnNumber } = state;

  const dicesValueNew = dicesSelected.map((val, i) => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    return val ? dicesValue[i] : randomDice;
  });

  return { ...state, dicesValue: dicesValueNew, turnNumber: turnNumber + 1 };
}

function selectDiceReducer(state, action) {
  const { dicesSelected } = state;
  const { diceIndex } = action.payload;

  const dicesSelectedNew = [...dicesSelected];
  dicesSelectedNew[diceIndex] = !dicesSelected[diceIndex];

  return { ...state, dicesSelected: dicesSelectedNew };
}

function unselectAllDiceReducer(state, action) {
  return {
    ...state,
    dicesSelected: [false, false, false, false, false, false]
  };
}

function resetRollCountReducer(state, action) {
  return { ...state, turnNumber: 0 };
}

export default dicesReducer;
