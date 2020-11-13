import {
  ROLL_DICES,
  SELECT_DICE,
  UNSELECT_ALL_DICE,
  RESET_ROLL_COUNT
} from './types';

export const rollDices = () => {
  return {
    type: ROLL_DICES
  };
};

export const selectDice = diceIndex => {
  return {
    type: SELECT_DICE,
    payload: { diceIndex }
  };
};

export const unselectAllDices = () => {
  return {
    type: UNSELECT_ALL_DICE
  };
};

export const resetRollCount = () => {
  return {
    type: RESET_ROLL_COUNT
  };
};
