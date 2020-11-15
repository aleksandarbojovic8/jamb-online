const numbersObjHash = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6
};

const createCountObj = dicesValue => {
  let countNumbersObj = {};
  dicesValue.forEach(val => {
    if (countNumbersObj.hasOwnProperty(val)) {
      countNumbersObj[val]++;
    } else {
      countNumbersObj[val] = 1;
    }
  });
  return countNumbersObj;
};

const maxColValidatorFunc = (fieldName, valueToReturn) => {
  const maxResultsHash = {
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

  return valueToReturn === maxResultsHash[fieldName];
};

export const calculateFieldValue = (
  fieldName,
  columnName,
  dicesValue,
  turnNumber
) => {
  let valueToReturn = 0;
  ///////////////////////////////////////
  if (
    fieldName === 'one' ||
    fieldName === 'two' ||
    fieldName === 'three' ||
    fieldName === 'four' ||
    fieldName === 'five' ||
    fieldName === 'six'
  ) {
    let countFiltered = dicesValue.filter(
      val => val === numbersObjHash[fieldName]
    );
    let count = countFiltered.length === 6 ? 5 : countFiltered.length;
    valueToReturn = count * numbersObjHash[fieldName];
  }
  ///////////////////////////////////////
  if (fieldName === 'max' || fieldName === 'min') {
    let sortedValues = dicesValue.sort();
    let maxArr = sortedValues.filter((val, i) => i !== 0);
    let minArr = sortedValues.filter((val, i) => i !== 5);

    fieldName === 'max'
      ? (valueToReturn = maxArr.reduce((a, b) => a + b, 0))
      : (valueToReturn = minArr.reduce((a, b) => a + b, 0));
  }
  ///////////////////////////////////////
  if (fieldName === 'kenta') {
    let exampleSmall = [1, 2, 3, 4, 5];
    let exampleBig = [2, 3, 4, 5, 6];

    dicesValue.forEach(val => {
      exampleSmall = exampleSmall.filter(val1 => val !== val1);
      exampleBig = exampleBig.filter(val2 => val !== val2);
    });

    let isSmall = exampleSmall.length ? false : true;
    let isBig = exampleBig.length ? false : true;

    if (isSmall === false && isBig === false) {
      valueToReturn = 0;
    } else {
      switch (turnNumber) {
        case 1:
          valueToReturn = 66;
          break;
        case 2:
          valueToReturn = 56;
          break;
        case 3:
          valueToReturn = 46;
          break;
        default:
          valueToReturn = 0;
      }
    }
  }
  ///////////////////////////////////////
  if (
    fieldName === 'triling' ||
    fieldName === 'poker' ||
    fieldName === 'jamb'
  ) {
    const sixToOneArr = [6, 5, 4, 3, 2, 1];
    const nameObj = { triling: 3, poker: 4, jamb: 5 };
    const bonusObj = { triling: 20, poker: 40, jamb: 50 };
    let obj = createCountObj(dicesValue);

    sixToOneArr.forEach(val => {
      if (obj[val] < nameObj[fieldName]) {
        delete obj[val];
      }
    });

    let keysArr = Object.keys(obj).sort();
    let value = 0;

    if (keysArr.length) {
      value = Number(keysArr[keysArr.length - 1]);
    }
    let count = value ? nameObj[fieldName] : 0;
    let bonus = value ? bonusObj[fieldName] : 0;

    valueToReturn = value * count + bonus;
  }
  ///////////////////////////////////////
  if (fieldName === 'ful') {
    const sixToOneArr = [6, 5, 4, 3, 2, 1];
    let obj3 = createCountObj(dicesValue);
    let obj2 = createCountObj(dicesValue);

    sixToOneArr.forEach(val => {
      if (obj3[val] < 3) {
        delete obj3[val];
      }
      if (obj2[val] < 2) {
        delete obj2[val];
      }
    });

    let value3 = 0;
    let value2 = 0;

    let keysArr3 = Object.keys(obj3).sort();
    if (keysArr3.length) {
      value3 = Number(keysArr3[keysArr3.length - 1]);
      let keyToDelete = keysArr3[keysArr3.length - 1];
      delete obj2[keyToDelete];
    }

    let keysArr2 = Object.keys(obj2).sort();
    if (keysArr2.length) {
      value2 = Number(keysArr2[keysArr2.length - 1]);
    }

    let bonus = keysArr3.length && keysArr2.length ? 30 : 0;

    if (keysArr3.length && keysArr2.length) {
      valueToReturn = value3 * 3 + value2 * 2 + bonus;
    } else {
      valueToReturn = 0;
    }
  }
  ///////////////////////////////////////
  if (columnName === 'maxCol') {
    const maxColValidator = maxColValidatorFunc(fieldName, valueToReturn);
    return maxColValidator === true ? valueToReturn : 0;
  }
  ///////////////////////////////////////
  return valueToReturn;
};
