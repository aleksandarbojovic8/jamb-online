import { ROLL_DICES, SELECT_DICE } from '../actions/types';

const diceState = {
  dicesSelected: [false, false, false, false, false, false],
  dicesValue: [1, 1, 1, 1, 1, 1],
  turn: 1
};

const dicesReducer = (state = diceState, action) => {
  switch (action.type) {
    case ROLL_DICES:
      return rollDicesReducer(state, action);
    case SELECT_DICE:
      return selectDiceReducer(state, action);
    default:
      return state;
  }
};

function rollDicesReducer(state, action) {
  const { dicesSelected, dicesValue, turn } = state;

  const dicesValueNew = dicesSelected.map((val, i) => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    return val ? dicesValue[i] : randomDice;
  });

  return { ...state, dicesValue: dicesValueNew, turn: turn + 1 };
}

function selectDiceReducer(state, action) {
  const { dicesSelected } = state;
  const { diceIndex } = action.payload;

  const dicesSelectedNew = [...dicesSelected];
  dicesSelectedNew[diceIndex] = !dicesSelected[diceIndex];

  return { ...state, dicesSelected: dicesSelectedNew };
}

export default dicesReducer;
