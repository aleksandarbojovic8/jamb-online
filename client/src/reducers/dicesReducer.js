import { ROLL_DICES, SELECT_DICE } from '../actions/types';

const diceState = {
  dicesSelected: [false, false, false, false, false, false],
  dicesValue: [1, 1, 1, 1, 1, 1],
  turn: 1
};

const dicesReducer = (state = diceState, action) => {
  const { dicesSelected, dicesValue } = state;
  switch (action.type) {
    case ROLL_DICES:
      const dicesValueNew = dicesSelected.map((val, i) => {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        return val ? dicesValue[i] : randomDice;
      });
      return { ...state, dicesValue: dicesValueNew };

    case SELECT_DICE:
      const { diceIndex } = action.payload;
      const dicesSelectedNew = [...dicesSelected];
      dicesSelectedNew[diceIndex] = !dicesSelected[diceIndex];
      return { ...state, dicesSelected: dicesSelectedNew };
    default:
      return state;
  }
};

export default dicesReducer;
