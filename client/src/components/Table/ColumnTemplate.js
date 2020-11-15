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
  fieldsKeysArray
} from '../../constants';
import styles from './ColumnTemplate.module.css';

export default function ColumnTemplate(props) {
  const { columnName } = props;
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

  const label = fieldName => {
    if (sumKeysArray.includes(fieldName)) {
      return columnState[fieldName] !== null ? columnState[fieldName] : 0;
    }
    return columnState[fieldName];
  };

  return (
    <>
      {fieldsKeysArray.map(fieldName => {
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
