import {
  ROLL_DICES,
  SELECT_DICE,
  DESELECT_ALL_DICE,
  RESET_ROLL_COUNT
} from './types';

export const rollDicesAction = () => {
  return {
    type: ROLL_DICES
  };
};

export const selectDiceAction = diceIndex => {
  return {
    type: SELECT_DICE,
    payload: { diceIndex }
  };
};

export const deselectAllDicesAction = () => {
  return {
    type: DESELECT_ALL_DICE
  };
};

export const resetRollCountAction = () => {
  return {
    type: RESET_ROLL_COUNT
  };
};
