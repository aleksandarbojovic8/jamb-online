import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findEnabledFields } from './ColumnTemplateFindEnabledFields';
import { calculateFieldValue } from './ColumnTemplateCalculateFieldValue';
import {
  deselectAllDicesAction,
  resetRollCountAction
} from '../../actions/dicesActions';
import {
  fillFieldAction,
  fillUpperSumAction,
  fillMiddleSumAction,
  fillBottomSumAction
} from '../../actions/singlePlayerActions';
import {
  upperKeysArray,
  middleKeysArray,
  bottomKeysArray,
  sumKeysArray,
  allFieldsKeysArray
} from '../../constants';
import styles from './ColumnTemplate.module.css';

export default function ColumnTemplate({ columnName }) {
  const dispatch = useDispatch();
  const singlePlayerState = useSelector(state => state.singlePlayer);
  const dicesState = useSelector(state => state.dices);

  const columnState = singlePlayerState[columnName];
  const { dicesValue, turnNumber } = dicesState;

  const enabledFields = findEnabledFields(columnState, columnName, turnNumber);

  const fillField = e => {
    const fieldName = e.target.id;
    let enabled = enabledFields.includes(fieldName);
    //fill fields actions
    if (!sumKeysArray.includes(fieldName) && enabled === true) {
      const fieldValue = calculateFieldValue(
        fieldName,
        columnName,
        dicesValue,
        turnNumber
      );
      dispatch(fillFieldAction(fieldName, columnName, fieldValue));
      dispatch(deselectAllDicesAction());
      dispatch(resetRollCountAction());
    }
    //sum actions
    if (upperKeysArray.includes(fieldName) && enabled === true) {
      dispatch(fillUpperSumAction(columnName));
    }
    if (
      (fieldName === 'one' || middleKeysArray.includes(fieldName)) &&
      enabled === true
    ) {
      dispatch(fillMiddleSumAction(columnName));
    }
    if (bottomKeysArray.includes(fieldName) && enabled === true) {
      dispatch(fillBottomSumAction(columnName));
    }
  };

  const renderIcon = () => {
    let icon = null;
    switch (columnName) {
      case 'topToBottom':
        icon = <span>&#8595;</span>;
        break;
      case 'fromTopAndBottom':
        icon = <span>&#8645;</span>;
        break;
      case 'bottomToTop':
        icon = <span>&#x2191;</span>;
        break;
      case 'fromHand':
        icon = <span>R</span>;
        break;
      case 'fromMiddle':
        icon = <span>&#x2191;/&#8595;</span>;
        break;
      case 'toMiddle':
        icon = <span>&#8595;/&#x2191;</span>;
        break;
      case 'maxCol':
        icon = <span>M</span>;
        break;
      default:
        icon = <span></span>;
    }
    return icon;
  };

  const label = fieldName => {
    if (sumKeysArray.includes(fieldName)) {
      return columnState[fieldName] !== null ? columnState[fieldName] : 0;
    }
    return columnState[fieldName];
  };

  return (
    <>
      {renderIcon()}
      {allFieldsKeysArray.map(fieldName => {
        let enabled = enabledFields.includes(fieldName);
        return (
          <div
            id={fieldName}
            key={fieldName}
            onClick={e => {
              if (enabled) {
                fillField(e);
              }
            }}
            className={`${styles.field} ${enabled && styles.nextField}`}
          >
            {label(fieldName)}
          </div>
        );
      })}
    </>
  );
}
