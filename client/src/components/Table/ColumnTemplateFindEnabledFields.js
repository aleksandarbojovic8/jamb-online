export const findEnabledFields = (columnState, columnName, turnNumber) => {
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

  switch (columnName) {
    case 'topToBottom':
      topToBottomFields();
      break;
    case 'fromTopAndBottom':
      fromTopAndBottomFields();
      break;
    case 'bottomToTop':
      bottomToTopFields();
      break;
    case 'fromHand':
      fromHandFields();
      break;
    case 'fromMiddle':
      fromMiddleFields();
      break;
    case 'toMiddle':
      toMiddleFields();
      break;
    case 'maxCol':
      maxColFields();
      break;
    default:
      console.log("Column name doesn't exist");
  }

  function topToBottomFields() {
    let foundOne = false;
    fieldsArray.forEach(fieldName => {
      if (foundOne === false && columnState[fieldName] === null) {
        enabledFields.push(fieldName);
        foundOne = true;
      }
    });
  }

  function fromTopAndBottomFields() {
    fieldsArray.forEach(fieldName => {
      if (columnState[fieldName] === null) {
        enabledFields.push(fieldName);
      }
    });
  }

  function bottomToTopFields() {
    let foundOne = false;
    fieldsArray
      .slice()
      .reverse()
      .forEach(fieldName => {
        if (foundOne === false && columnState[fieldName] === null) {
          enabledFields.push(fieldName);
          foundOne = true;
        }
      });
  }

  function fromHandFields() {
    fieldsArray.forEach(fieldName => {
      if (columnState[fieldName] === null && turnNumber === 1) {
        enabledFields.push(fieldName);
      }
    });
  }

  function fromMiddleFields() {
    let foundOne = false;
    let foundTwo = false;
    fieldsArray
      .slice(0, 7)
      .reverse()
      .forEach(fieldName => {
        if (foundOne === false && columnState[fieldName] === null) {
          enabledFields.push(fieldName);
          foundOne = true;
        }
      });

    fieldsArray.slice(7).forEach(fieldName => {
      if (foundTwo === false && columnState[fieldName] === null) {
        enabledFields.push(fieldName);
        foundTwo = true;
      }
    });
  }

  function toMiddleFields() {
    let foundOne = false;
    let foundTwo = false;
    fieldsArray.slice(0, 7).forEach(fieldName => {
      if (foundOne === false && columnState[fieldName] === null) {
        enabledFields.push(fieldName);
        foundOne = true;
      }
    });

    fieldsArray
      .slice(7)
      .reverse()
      .forEach(fieldName => {
        if (foundTwo === false && columnState[fieldName] === null) {
          enabledFields.push(fieldName);
          foundTwo = true;
        }
      });
  }

  function maxColFields() {
    fieldsArray.forEach(fieldName => {
      if (columnState[fieldName] === null) {
        enabledFields.push(fieldName);
      }
    });
  }

  return enabledFields;
};
