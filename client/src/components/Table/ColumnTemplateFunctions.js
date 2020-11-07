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
      if (true) {
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
      if (turnNumber === 1) {
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
      if (true) {
        enabledFields.push(val);
      }
    });
  }

  return enabledFields;
};
