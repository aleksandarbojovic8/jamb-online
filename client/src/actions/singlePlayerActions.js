import {
  FILL_FIELD,
  FILL_UPPER_SUM,
  FILL_MIDDLE_SUM,
  FILL_BOTTOM_SUM
} from './types';

export const fillFieldAction = (fieldName, columnName, fieldValue) => {
  return {
    type: FILL_FIELD,
    payload: { fieldName, columnName, fieldValue }
  };
};
export const fillUpperSumAction = columnName => {
  return {
    type: FILL_UPPER_SUM,
    payload: { columnName }
  };
};
export const fillMiddleSumAction = columnName => {
  return {
    type: FILL_MIDDLE_SUM,
    payload: { columnName }
  };
};
export const fillBottomSumAction = columnName => {
  return {
    type: FILL_BOTTOM_SUM,
    payload: { columnName }
  };
};
