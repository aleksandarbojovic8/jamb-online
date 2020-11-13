import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './JambTable.module.css';

import NamesColumn from './NamesColumn';
import ColumnTemplate from './ColumnTemplate';
import ResultColumn from './ResultColumn';

import { rollDices } from '../../actions/dicesActions';

export default function JambTable(props) {
  const { path } = props;
  const isMultiPlayer = path.includes('multiPlayer');
  const dispatch = useDispatch();
  const dicesState = useSelector(state => state.dices);
  const { turnNumber } = dicesState;

  useEffect(() => {
    if (turnNumber === 0) {
      dispatch(rollDices());
    }
  });

  return (
    <div
      className={`${styles.tableContainer} ${
        isMultiPlayer ? styles.tableContainerMulti : styles.tableContainerSingle
      }`}
    >
      <div className={styles.column}>
        <NamesColumn />
      </div>
      <div className={styles.column}>
        <span>&#8595;</span>
        <ColumnTemplate columnName="topToBottom" />
      </div>
      <div className={styles.column}>
        <span>&#8645;</span>
        <ColumnTemplate columnName="fromTopAndBottom" />
      </div>
      <div className={styles.column}>
        <span>&#x2191;</span>
        <ColumnTemplate columnName="bottomToTop" />
      </div>
      {isMultiPlayer && (
        <div className={styles.column}>
          <span>N</span>
        </div>
      )}
      <div className={styles.column}>
        <span>R</span>
        <ColumnTemplate columnName="fromHand" />
      </div>
      {isMultiPlayer && (
        <div className={styles.column}>
          <span>D</span>
        </div>
      )}
      <div className={styles.column}>
        <span>&#x2191;/&#8595;</span>
        <ColumnTemplate columnName="fromMiddle" />
      </div>
      <div className={styles.column}>
        <span>&#8595;/&#x2191;</span>
        <ColumnTemplate columnName="toMiddle" />
      </div>
      {isMultiPlayer && (
        <div className={styles.column}>
          <span>O</span>
        </div>
      )}
      <div className={styles.column}>
        <span>M</span>
        <ColumnTemplate columnName="maxCol" />
      </div>
      <div className={styles.column}>
        <ResultColumn />
      </div>
    </div>
  );
}
