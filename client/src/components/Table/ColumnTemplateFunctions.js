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
  let obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  };
  let valueToReturn = 0;

  if (
    id === 'one' ||
    id === 'two' ||
    id === 'three' ||
    id === 'four' ||
    id === 'five' ||
    id === 'six'
  ) {
    let countFiltered = valuesArray.filter(val => val === obj[id]);
    let count = countFiltered.length === 6 ? 5 : countFiltered.length;
    valueToReturn = count * obj[id];
  }

  if (id === 'max' || id === 'min') {
    let sortedValues = valuesArray.sort();
    id === 'max' ? sortedValues.shift() : sortedValues.pop();
    valueToReturn = sortedValues.reduce((a, b) => a + b, 0);
  }
  return valueToReturn;
};
