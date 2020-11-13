export const findEnabledField = (columnState, name, turnNumber) => {
  const fieldsArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'max',
    'min',
    'kenta',
    'triling',
    'ful',
    'poker',
    'jamb'
  ];
  const enabledFields = [];

  if (name === 'topToBottom') {
    let foundOne = false;
    fieldsArray.forEach(val => {
      if (foundOne === false && columnState[val] === null) {
        enabledFields.push(val);
        foundOne = true;
      }
    });
  }

  if (name === 'fromTopAndBottom') {
    fieldsArray.forEach(val => {
      if (columnState[val] === null) {
        enabledFields.push(val);
      }
    });
  }

  if (name === 'bottomToTop') {
    let foundOne = false;
    fieldsArray
      .slice()
      .reverse()
      .forEach(val => {
        if (foundOne === false && columnState[val] === null) {
          enabledFields.push(val);
          foundOne = true;
        }
      });
  }

  if (name === 'fromHand') {
    fieldsArray.forEach(val => {
      if (columnState[val] === null && turnNumber === 1) {
        enabledFields.push(val);
      }
    });
  }

  if (name === 'fromMiddle') {
    let foundOne = false;
    let foundTwo = false;
    fieldsArray
      .slice(0, 7)
      .reverse()
      .forEach(val => {
        if (foundOne === false && columnState[val] === null) {
          enabledFields.push(val);
          foundOne = true;
        }
      });

    fieldsArray.slice(7).forEach(val => {
      if (foundTwo === false && columnState[val] === null) {
        enabledFields.push(val);
        foundTwo = true;
      }
    });
  }

  if (name === 'toMiddle') {
    let foundOne = false;
    let foundTwo = false;
    fieldsArray.slice(0, 7).forEach(val => {
      if (foundOne === false && columnState[val] === null) {
        enabledFields.push(val);
        foundOne = true;
      }
    });

    fieldsArray
      .slice(7)
      .reverse()
      .forEach(val => {
        if (foundTwo === false && columnState[val] === null) {
          enabledFields.push(val);
          foundTwo = true;
        }
      });
  }

  if (name === 'maxCol') {
    fieldsArray.forEach(val => {
      if (columnState[val] === null) {
        enabledFields.push(val);
      }
    });
  }

  return enabledFields;
};

export const calculateFieldValue = (id, nameOfColumn, valuesArray, turn) => {
  let numberObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  };
  let valueToReturn = 0;
  ///////////////////////////////////////
  if (
    id === 'one' ||
    id === 'two' ||
    id === 'three' ||
    id === 'four' ||
    id === 'five' ||
    id === 'six'
  ) {
    let countFiltered = valuesArray.filter(val => val === numberObj[id]);
    let count = countFiltered.length === 6 ? 5 : countFiltered.length;
    valueToReturn = count * numberObj[id];
  }
  ///////////////////////////////////////
  if (id === 'max' || id === 'min') {
    let sortedValues = valuesArray.sort();
    let maxArr = sortedValues.filter((val, i) => i !== 0);
    let minArr = sortedValues.filter((val, i) => i !== 5);

    id === 'max'
      ? (valueToReturn = maxArr.reduce((a, b) => a + b, 0))
      : (valueToReturn = minArr.reduce((a, b) => a + b, 0));
  }
  ///////////////////////////////////////
  if (id === 'kenta') {
    let exampleSmall = [1, 2, 3, 4, 5];
    let exampleBig = [2, 3, 4, 5, 6];

    valuesArray.forEach(val => {
      exampleSmall = exampleSmall.filter(val1 => val !== val1);
      exampleBig = exampleBig.filter(val2 => val !== val2);
    });

    let isSmall = exampleSmall.length ? false : true;
    let isBig = exampleBig.length ? false : true;

    if (isSmall === false && isBig === false) {
      valueToReturn = 0;
    } else {
      switch (turn) {
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
          console.log('Default');
      }
    }
  }

  const createCountObj = () => {
    let countNumbersObj = {};
    valuesArray.forEach(val => {
      if (countNumbersObj.hasOwnProperty(val)) {
        countNumbersObj[val]++;
      } else {
        countNumbersObj[val] = 1;
      }
    });
    return countNumbersObj;
  };
  ///////////////////////////////////////
  if (id === 'triling' || id === 'poker' || id === 'jamb') {
    const oneToSixArr = [6, 5, 4, 3, 2, 1];
    const nameObj = { triling: 3, poker: 4, jamb: 5 };
    const bonusObj = { triling: 20, poker: 40, jamb: 50 };
    let obj = createCountObj();

    oneToSixArr.forEach(val => {
      if (obj[val] < nameObj[id]) {
        delete obj[val];
      }
    });

    let keysArr = Object.keys(obj).sort();
    let value = 0;

    if (keysArr.length) {
      value = Number(keysArr[keysArr.length - 1]);
    }
    let count = value ? nameObj[id] : 0;
    let bonus = value ? bonusObj[id] : 0;

    valueToReturn = value * count + bonus;
  }
  ///////////////////////////////////////
  if (id === 'ful') {
    const oneToSixArr = [6, 5, 4, 3, 2, 1];
    let obj3 = createCountObj();
    let obj2 = createCountObj();

    oneToSixArr.forEach(val => {
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

  return valueToReturn;
};
