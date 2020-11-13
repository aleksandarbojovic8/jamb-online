import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  findEnabledField,
  calculateFieldValue
} from './ColumnTemplateFunctions';
import {
  fillField as fillFieldAction,
  fillUpperSumAction,
  fillMiddleSumAction,
  fillBottomSumAction
} from '../../actions/singlePlayerActions';
import { unselectAllDices, resetRollCount } from '../../actions/dicesActions';
import styles from './ColumnTemplate.module.css';

export default function ColumnTemplate(props) {
  const { name } = props;
  const dispatch = useDispatch();
  const singlePlayerState = useSelector(state => state.singlePlayer);
  const diceState = useSelector(state => state.dices);
  const columnState = singlePlayerState[name];
  const turnNumber = diceState.turn;

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

  const enabledFields = findEnabledField(columnState, name, turnNumber);

  const fillField = e => {
    const id = e.target.id;
    let enabled = enabledFields.includes(id);
    if (
      id !== 'upperSum' &&
      id !== 'middleSum' &&
      id !== 'bottomSum' &&
      enabled === true
    ) {
      const value = calculateFieldValue(
        id,
        name,
        diceState.dicesValue,
        turnNumber
      );
      dispatch(fillFieldAction(id, name, value));
      dispatch(unselectAllDices());
      dispatch(resetRollCount());
    }
    if (
      (id === 'one' ||
        id === 'two' ||
        id === 'three' ||
        id === 'four' ||
        id === 'five' ||
        id === 'six') &&
      enabled === true
    ) {
      dispatch(fillUpperSumAction(name));
    }
    if ((id === 'one' || id === 'max' || id === 'min') && enabled === true) {
      dispatch(fillMiddleSumAction(name));
    }
    if (
      (id === 'kenta' ||
        id === 'triling' ||
        id === 'ful' ||
        id === 'poker' ||
        id === 'jamb') &&
      enabled === true
    ) {
      dispatch(fillBottomSumAction(name));
    }
  };

  return (
    <>
      {keyArray.map(val => {
        let enabled = enabledFields.includes(val);
        return (
          <div
            id={val}
            key={val}
            onClick={e => {
              if (enabled) {
                fillField(e);
              }
            }}
            className={`${styles.field} ${enabled && styles.nextField}`}
          >
            {columnState[val]}
          </div>
        );
      })}
    </>
  );
}
