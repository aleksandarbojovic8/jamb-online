import React from 'react';
import styles from './OneDice.module.css';

export default function OneDice({ name }) {
  const diceContent = 5;
  console.log('dice name', name);
  return (
    <div className={styles.diceField}>
      <img
        src={require(`../../img/die${diceContent}.png`).default}
        alt="Dice"
        width="100%"
        height="100%"
      />
    </div>
  );
}
