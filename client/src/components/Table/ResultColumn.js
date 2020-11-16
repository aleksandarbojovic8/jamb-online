import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ResultColumn.module.css';

export default function ResultColumn() {
  const singlePlayerState = useSelector(state => state.singlePlayer);
  const { upperSum, middleSum, bottomSum } = singlePlayerState.rowResult;

  return (
    <>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.resultDiv}>{upperSum}</div>
      <div></div>
      <div></div>
      <div className={styles.resultDiv}>{middleSum}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.resultDiv}>{bottomSum}</div>
    </>
  );
}
