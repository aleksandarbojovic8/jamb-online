import { fieldsKeysArray } from '../../constants';

export const findEnabledFields = (columnState, columnName, turnNumber) => {
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
    fieldsKeysArray.forEach(fieldName => {
      if (foundOne === false && columnState[fieldName] === null) {
        enabledFields.push(fieldName);
        foundOne = true;
      }
    });
  }

  function fromTopAndBottomFields() {
    fieldsKeysArray.forEach(fieldName => {
      if (columnState[fieldName] === null) {
        enabledFields.push(fieldName);
      }
    });
  }

  function bottomToTopFields() {
    let foundOne = false;
    fieldsKeysArray
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
    fieldsKeysArray.forEach(fieldName => {
      if (columnState[fieldName] === null && turnNumber === 1) {
        enabledFields.push(fieldName);
      }
    });
  }

  function fromMiddleFields() {
    let foundOne = false;
    let foundTwo = false;
    fieldsKeysArray
      .slice(0, 7)
      .reverse()
      .forEach(fieldName => {
        if (foundOne === false && columnState[fieldName] === null) {
          enabledFields.push(fieldName);
          foundOne = true;
        }
      });

    fieldsKeysArray.slice(7).forEach(fieldName => {
      if (foundTwo === false && columnState[fieldName] === null) {
        enabledFields.push(fieldName);
        foundTwo = true;
      }
    });
  }

  function toMiddleFields() {
    let foundOne = false;
    let foundTwo = false;
    fieldsKeysArray.slice(0, 7).forEach(fieldName => {
      if (foundOne === false && columnState[fieldName] === null) {
        enabledFields.push(fieldName);
        foundOne = true;
      }
    });

    fieldsKeysArray
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
    fieldsKeysArray.forEach(fieldName => {
      if (columnState[fieldName] === null) {
        enabledFields.push(fieldName);
      }
    });
  }

  return enabledFields;
};
