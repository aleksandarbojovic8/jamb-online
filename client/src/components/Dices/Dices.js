import React from 'react';
import OneDice from './OneDice';
import styles from './Dices.module.css';

export default function Dices() {
  const diceNames = ['die1', 'die2', 'die3', 'die4', 'die5', 'die6'];
  return (
    <div className={styles.dicesContainer}>
      {diceNames.map(val => {
        return <OneDice key={val} name={val} />;
      })}
    </div>
  );
}
