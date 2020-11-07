import { FILL_FIELD } from './types';

export const fillField = (field, name) => {
  return {
    type: FILL_FIELD,
    payload: { field, name }
  };
};
