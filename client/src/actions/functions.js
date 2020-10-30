import { SAY_HELLO_ACTION } from './types';

export const sayHello = () => {
  return {
    type: SAY_HELLO_ACTION,
    payload: { message: 'Hello World' }
  };
};
