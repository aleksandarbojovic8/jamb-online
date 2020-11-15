import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findEnabledFields } from './ColumnTemplateFindEnabledFields';
import { calculateFieldValue } from './ColumnTemplateCalculateFieldValue';
import {
  fillFieldAction,
  fillUpperSumAction,
  fillMiddleSumAction,
  fillBottomSumAction
} from '../../actions/singlePlayerActions';
import { unselectAllDices, resetRollCount } from '../../actions/dicesActions';
import styles from './ColumnTemplate.module.css';

export default function ColumnTemplate(props) {
  const { columnName } = props;
  const dispatch = useDispatch();
  const singlePlayerState = useSelector(state => state.singlePlayer);
  const dicesState = useSelector(state => state.dices);

  const columnState = singlePlayerState[columnName];
  const { dicesValue, turnNumber } = dicesState;

  const keyArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'upperSum',
    'max',
    'min',
    'middleSum',
    'kenta',
    'triling',
    'ful',
    'poker',
    'jamb',
    'bottomSum'
  ];

  const enabledFields = findEnabledFields(columnState, columnName, turnNumber);

  const fillField = e => {
    const fieldName = e.target.id;
    let enabled = enabledFields.includes(fieldName);
    if (
      fieldName !== 'upperSum' &&
      fieldName !== 'middleSum' &&
      fieldName !== 'bottomSum' &&
      enabled === true
    ) {
      const fieldValue = calculateFieldValue(
        fieldName,
        columnName,
        dicesValue,
        turnNumber
      );
      dispatch(fillFieldAction(fieldName, columnName, fieldValue));
      dispatch(unselectAllDices());
      dispatch(resetRollCount());
    }
    if (
      (fieldName === 'one' ||
        fieldName === 'two' ||
        fieldName === 'three' ||
        fieldName === 'four' ||
        fieldName === 'five' ||
        fieldName === 'six') &&
      enabled === true
    ) {
      dispatch(fillUpperSumAction(columnName));
    }
    if (
      (fieldName === 'one' || fieldName === 'max' || fieldName === 'min') &&
      enabled === true
    ) {
      dispatch(fillMiddleSumAction(columnName));
    }
    if (
      (fieldName === 'kenta' ||
        fieldName === 'triling' ||
        fieldName === 'ful' ||
        fieldName === 'poker' ||
        fieldName === 'jamb') &&
      enabled === true
    ) {
      dispatch(fillBottomSumAction(columnName));
    }
  };

  const label = fieldName => {
    if (
      fieldName === 'upperSum' ||
      fieldName === 'middleSum' ||
      fieldName === 'bottomSum'
    ) {
      return columnState[fieldName] !== null ? columnState[fieldName] : 0;
    }
    return columnState[fieldName];
  };

  return (
    <>
      {keyArray.map(fieldName => {
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
