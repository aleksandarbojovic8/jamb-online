export const upperKeysArray = ['one', 'two', 'three', 'four', 'five', 'six'];

export const middleKeysArray = ['max', 'min'];

export const bottomKeysArray = ['kenta', 'triling', 'ful', 'poker', 'jamb'];

export const sumKeysArray = ['upperSum', 'middleSum', 'bottomSum'];

export const allFieldsKeysArray = [
  ...upperKeysArray,
  sumKeysArray[0],
  ...middleKeysArray,
  sumKeysArray[1],
  ...bottomKeysArray,
  sumKeysArray[2]
];

export const fieldsKeysArray = [
  ...upperKeysArray,
  ...middleKeysArray,
  ...bottomKeysArray
];

export const fieldKeysNullHash = {
  one: null,
  two: null,
  three: null,
  four: null,
  five: null,
  six: null,
  upperSum: null,
  max: null,
  min: null,
  middleSum: null,
  kenta: null,
  triling: null,
  ful: null,
  poker: null,
  jamb: null,
  bottomSum: null
};

export const singlePlayerColumnNamesArray = [
  'topToBottom',
  'fromTopAndBottom',
  'bottomToTop',
  'fromHand',
  'fromMiddle',
  'toMiddle',
  'maxCol'
];

export const multiPlayerColumnNamesArray = [
  'topToBottom',
  'fromTopAndBottom',
  'bottomToTop',
  'annunciation',
  'fromHand',
  'alert',
  'fromMiddle',
  'toMiddle',
  'lastCol',
  'maxCol'
];

export const numbersObjHash = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6
};

export const maxResultsHash = {
  one: 5,
  two: 10,
  three: 15,
  four: 20,
  five: 25,
  six: 30,
  max: 30,
  min: 5,
  kenta: 66,
  triling: 38,
  ful: 58,
  poker: 64,
  jamb: 80
};
