import {
  FILL_FIELD,
  FILL_UPPER_SUM,
  FILL_MIDDLE_SUM,
  FILL_BOTTOM_SUM
} from './types';

export const fillField = (field, name, value) => {
  return {
    type: FILL_FIELD,
    payload: { field, name, value }
  };
};
export const fillUpperSumAction = name => {
  return {
    type: FILL_UPPER_SUM,
    payload: { name }
  };
};
export const fillMiddleSumAction = name => {
  return {
    type: FILL_MIDDLE_SUM,
    payload: { name }
  };
};
export const fillBottomSumAction = name => {
  return {
    type: FILL_BOTTOM_SUM,
    payload: { name }
  };
};
