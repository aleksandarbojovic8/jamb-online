export const upperKeysArray = ['one', 'two', 'three', 'four', 'five', 'six'];

export const middleKeysArray = ['max', 'min'];

export const bottomKeysArray = ['kenta', 'triling', 'ful', 'poker', 'jamb'];

export const sumKeysArray = ['upperSum', 'middleSum', 'bottomSum'];

export const fieldsKeysArray = [
  ...upperKeysArray,
  sumKeysArray[0],
  ...middleKeysArray,
  sumKeysArray[1],
  ...bottomKeysArray,
  sumKeysArray[2]
];

// export const fieldsArray = upperKeysArray.concat(sumKeysArray[0]).concat()

// const numbersObjHash = {
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6
// };
// const maxResultsHash = {
//   one: 5,
//   two: 10,
//   three: 15,
//   four: 20,
//   five: 25,
//   six: 30,
//   max: 30,
//   min: 5,
//   kenta: 66,
//   triling: 38,
//   ful: 58,
//   poker: 64,
//   jamb: 80
// };

// const fieldsArray = [
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'max',
//   'min',
//   'kenta',
//   'triling',
//   'ful',
//   'poker',
//   'jamb'
// ];

// const keyArray = [
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'upperSum',
//   'max',
//   'min',
//   'middleSum',
//   'kenta',
//   'triling',
//   'ful',
//   'poker',
//   'jamb',
//   'bottomSum'
// ];

// const obj = {
//     one: null,
//     two: null,
//     three: null,
//     four: null,
//     five: null,
//     six: null,
//     upperSum: null,
//     max: null,
//     min: null,
//     middleSum: null,
//     kenta: null,
//     triling: null,
//     ful: null,
//     poker: null,
//     jamb: null,
//     bottomSum: null
//   };
