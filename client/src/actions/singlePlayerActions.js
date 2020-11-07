import { FILL_FIELD } from './types';

export const fillField = (field, name, value) => {
  return {
    type: FILL_FIELD,
    payload: { field, name, value }
  };
};
