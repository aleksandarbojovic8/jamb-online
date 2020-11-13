import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rollDices } from '../../actions/dicesActions';
import OneDice from './OneDice';
import styles from './Dices.module.css';

export default function Dices() {
  const diceNames = ['die1', 'die2', 'die3', 'die4', 'die5', 'die6'];
  const dispatch = useDispatch();
  const dicesState = useSelector(state => state.dices);
  const { turnNumber } = dicesState;

  return (
    <div className={styles.dicesContainer}>
      {diceNames.map((val, i) => {
        return <OneDice key={val} diceIndex={i} />;
      })}
      <button
        className={styles.rollDiceButton}
        disabled={turnNumber >= 3}
        onClick={() => dispatch(rollDices())}
      >
        Roll Dices
      </button>
    </div>
  );
}
