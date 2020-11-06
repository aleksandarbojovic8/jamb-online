import { ROLL_DICES, SELECT_DICE } from './types';

export const rollDices = () => {
  return {
    type: ROLL_DICES
  };
};

export const selectDice = index => {
  return {
    type: SELECT_DICE,
    payload: { diceIndex: index }
  };
};
