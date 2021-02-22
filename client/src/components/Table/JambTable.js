import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './JambTable.module.css';

import NamesColumn from './NamesColumn';
import ColumnTemplate from './ColumnTemplate';
import ResultColumn from './ResultColumn';
// import {
//   singlePlayerColumnNamesArray,
//   multiPlayerColumnNamesArray
// } from '../../constants.js';

import { rollDicesAction } from '../../actions/dicesActions';

export default function JambTable(props) {
  const { path } = props;
  const isMultiPlayer = path.includes('multiPlayer');
  const dispatch = useDispatch();
  // const singlePlayerState = useSelector(state => state.singlePlayer);
  const dicesState = useSelector(state => state.dices);
  // const { fullResult } = singlePlayerState;
  const { turnNumber } = dicesState;

  useEffect(() => {
    if (turnNumber === 0) {
      dispatch(rollDicesAction());
    }
  });

  return (
    <div
      className={
        isMultiPlayer ? styles.tableContainerMulti : styles.tableContainerSingle
      }
    >
      <NamesColumn />
      <ColumnTemplate columnName="topToBottom" />
      <ColumnTemplate columnName="fromTopAndBottom" />
      <ColumnTemplate columnName="bottomToTop" />
      {isMultiPlayer && (
        <div className={styles.column}>
          <span>N</span>
        </div>
      )}
      <ColumnTemplate columnName="fromHand" />
      {isMultiPlayer && (
        <div className={styles.column}>
          <span>D</span>
        </div>
      )}
      <ColumnTemplate columnName="fromMiddle" />
      <ColumnTemplate columnName="toMiddle" />
      {isMultiPlayer && (
        <div className={styles.column}>
          <span>O</span>
        </div>
      )}
      <ColumnTemplate columnName="maxCol" />
      <ResultColumn />
    </div>
  );
}
