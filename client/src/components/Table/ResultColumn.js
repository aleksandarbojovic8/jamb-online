import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ResultColumn.module.css';

export default function ResultColumn() {
  const singlePlayerState = useSelector(state => state.singlePlayer);
  const {
    fullUpperSum,
    fullMiddleSum,
    fullBottomSum
  } = singlePlayerState.rowResult;

  return (
    <>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.resultDiv}>{fullUpperSum}</div>
      <div></div>
      <div></div>
      <div className={styles.resultDiv}>{fullMiddleSum}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.resultDiv}>{fullBottomSum}</div>
    </>
  );
}
